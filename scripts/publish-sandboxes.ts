import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_PACKAGE_JSON = path.join(__dirname, "../package.json");

async function getDependencies() {
  const packageJson = JSON.parse(await fs.readFile(ROOT_PACKAGE_JSON, "utf-8"));
  return {
    dependencies: {
      react: packageJson.dependencies.react,
      "react-dom": packageJson.dependencies["react-dom"],
      "react-scripts": "^5.0.1",
      "simple-table-core": packageJson.dependencies["simple-table-core"],
    },
    devDependencies: {
      typescript: packageJson.devDependencies.typescript,
    },
    scripts: {
      start: "react-scripts start",
      build: "react-scripts build",
      test: "react-scripts test",
      eject: "react-scripts eject",
    },
    browserslist: {
      production: [">0.2%", "not dead", "not op_mini all"],
      development: ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"],
    },
  };
}

const publishSandbox = async (
  filesToInclude: { localPath: string; sandboxPath: string }[],
  appTsxPath: string,
  sandboxName: string
) => {
  const dependencies = await getDependencies();

  const files: any = {
    files: {
      "public/index.html": {
        content: `<div id="root"></div>`,
        isBinary: false,
      },
      "src/index.tsx": {
        content: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div style={{ fontFamily: "Nunito" }}>
      <App />
    </div>
  </StrictMode>
);
`,
        isBinary: false,
      },
      "package.json": {
        content: JSON.stringify(
          {
            name: sandboxName,
            ...dependencies,
          },
          null,
          2
        ),
        isBinary: false,
      },
    },
  };

  // Add App.tsx (main entry)
  let appTsxContent = await fs.readFile(appTsxPath, "utf-8");
  if (!/^\s*import\s+React\s+from\s+['"]react['"];?/.test(appTsxContent)) {
    appTsxContent = `import React from "react";\n` + appTsxContent;
  }
  files.files["src/App.tsx"] = {
    content: appTsxContent,
    isBinary: false,
  };

  // Add supporting files (not App.tsx)
  for (const file of filesToInclude) {
    if (path.resolve(file.localPath) !== path.resolve(appTsxPath)) {
      let content = await fs.readFile(file.localPath, "utf-8");
      if (
        file.sandboxPath.endsWith(".tsx") &&
        !/^\s*import\s+React\s+from\s+['"]react['"];?/.test(content)
      ) {
        content = `import React from "react";\n` + content;
      }
      files.files[file.sandboxPath] = {
        content,
        isBinary: false,
      };
    }
  }

  console.log("\n");
  console.log("publishing", sandboxName);
  const response = await fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(files),
  });

  if (!response.ok) throw new Error(`Failed to publish: ${response.status}`);
  const { sandbox_id } = await response.json();
  console.log("published", sandboxName, sandbox_id);
  return `https://codesandbox.io/s/${sandbox_id}`;
};

const publishAllDemos = async (
  codesandboxList: Record<string, { id: string; url: string }>,
  codesandboxListPath: string
) => {
  const demosDir = path.join(__dirname, "../src/components/demos");
  const entries = await fs.readdir(demosDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith("Demo.tsx")) {
      // Single file demo
      const appTsxPath = path.join(demosDir, entry.name);
      const sandboxUrl = await publishSandbox([], appTsxPath, entry.name);
      const sandboxId = sandboxUrl.split("/").pop();
      if (!sandboxId) throw new Error(`Failed to extract sandbox ID from URL: ${sandboxUrl}`);
      codesandboxList[entry.name] = { id: sandboxId, url: sandboxUrl };
      await fs.writeFile(codesandboxListPath, JSON.stringify(codesandboxList, null, 2), "utf-8");
    } else if (entry.isDirectory()) {
      // Folder demo
      const folderName = entry.name;
      const folderPath = path.join(demosDir, folderName);
      const folderFiles = await fs.readdir(folderPath);
      const filesToInclude = folderFiles.map((file) => ({
        localPath: path.join(folderPath, file),
        sandboxPath: `src/${file}`,
      }));
      // Find the main file (e.g., CustomThemeDemo.tsx)
      const mainFile = filesToInclude.find((f) => f.sandboxPath.endsWith("Demo.tsx"));
      if (!mainFile) throw new Error(`No Demo.tsx file found in ${folderName}`);
      const sandboxUrl = await publishSandbox(
        filesToInclude,
        mainFile.localPath,
        mainFile.sandboxPath
      );
      const sandboxId = sandboxUrl.split("/").pop();
      if (!sandboxId) throw new Error(`Failed to extract sandbox ID from URL: ${sandboxUrl}`);
      codesandboxList[mainFile.sandboxPath] = { id: sandboxId, url: sandboxUrl };
      await fs.writeFile(codesandboxListPath, JSON.stringify(codesandboxList, null, 2), "utf-8");
    }
  }
};

const publishAllExamples = async (
  codesandboxList: Record<string, { id: string; url: string }>,
  codesandboxListPath: string
) => {
  const examplesDir = path.join(__dirname, "../src/examples");
  const exampleFolders = await fs.readdir(examplesDir, { withFileTypes: true });

  for (const folder of exampleFolders) {
    if (folder.isDirectory()) {
      const folderName = folder.name;
      const folderPath = path.join(examplesDir, folderName);
      const folderFiles = await fs.readdir(folderPath);

      // Find the main file ending with Example.tsx
      const mainFileName = folderFiles.find(
        (file) => file.endsWith("Example.tsx") && !file.endsWith("ExampleWrapper.tsx")
      );
      if (!mainFileName) continue;

      const mainFilePath = path.join(folderPath, mainFileName);

      // Include all supporting files except Wrapper.tsx files
      const filesToInclude = folderFiles
        .filter((file) => !file.endsWith("Wrapper.tsx"))
        .map((file) => ({
          localPath: path.join(folderPath, file),
          sandboxPath: `src/${file}`,
        }));

      const sandboxUrl = await publishSandbox(filesToInclude, mainFilePath, mainFileName);

      const sandboxId = sandboxUrl.split("/").pop();
      if (!sandboxId) throw new Error(`Failed to extract sandbox ID from URL: ${sandboxUrl}`);

      codesandboxList[`examples/${folderName}/${mainFileName}`] = {
        id: sandboxId,
        url: sandboxUrl,
      };
      await fs.writeFile(codesandboxListPath, JSON.stringify(codesandboxList, null, 2), "utf-8");
    }
  }
};

const publishAllSandboxes = async () => {
  const codesandboxListPath = path.join(__dirname, "../src/constants/codesandbox-list.json");

  // Read existing codesandbox list
  let codesandboxList: Record<string, { id: string; url: string }> = {};
  try {
    const content = await fs.readFile(codesandboxListPath, "utf-8");
    codesandboxList = JSON.parse(content);
  } catch (error) {
    codesandboxList = {};
  }

  // Publish demos
  await publishAllDemos(codesandboxList, codesandboxListPath);

  // Publish examples
  await publishAllExamples(codesandboxList, codesandboxListPath);
};

publishAllSandboxes();
