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
      "react-scripts": "^5.0.0",
      "simple-table-core": packageJson.dependencies["simple-table-core"],
    },
    devDependencies: {
      typescript: packageJson.devDependencies.typescript,
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

const publishAllSandboxes = async () => {
  const demosDir = path.join(__dirname, "../src/components/demos");
  const entries = await fs.readdir(demosDir, { withFileTypes: true });

  const codesandboxListPath = path.join(__dirname, "../src/constants/codesandbox-list.json");

  // Read existing codesandbox list
  let codesandboxList: Record<string, { id: string; url: string }> = {};
  try {
    const content = await fs.readFile(codesandboxListPath, "utf-8");
    codesandboxList = JSON.parse(content);
  } catch (error) {
    codesandboxList = {};
  }

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

publishAllSandboxes();
