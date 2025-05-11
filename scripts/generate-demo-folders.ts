import fs from "fs/promises";
import path from "path";

const DEMOS_DIR = path.join(__dirname, "../src/components/demos");
const OUTPUT_DIR = path.join(__dirname, "../codesandbox");

const BASE_PACKAGE_JSON = {
  name: "demo",
  version: "1.0.0",
  dependencies: {
    "your-package": "^1.0.0",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
  },
  devDependencies: {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    typescript: "^5.0.0",
  },
};

const INDEX_HTML = `
<!DOCTYPE html>
<html>
  <head>
    <title>Demo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/App.tsx"></script>
  </body>
</html>
`;

async function generateDemoFolders() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const demoFiles = await fs.readdir(DEMOS_DIR);

  for (const file of demoFiles) {
    if (file.endsWith(".tsx")) {
      const demoName = file.replace("Demo.tsx", "").toLowerCase();
      const demoDir = path.join(OUTPUT_DIR, demoName);
      await fs.mkdir(demoDir, { recursive: true });

      // Copy demo file as App.tsx
      const demoContent = await fs.readFile(path.join(DEMOS_DIR, file), "utf-8");
      await fs.writeFile(path.join(demoDir, "App.tsx"), demoContent);

      // Generate package.json and index.html
      await fs.writeFile(
        path.join(demoDir, "package.json"),
        JSON.stringify({ ...BASE_PACKAGE_JSON, name: demoName }, null, 2)
      );
      await fs.writeFile(path.join(demoDir, "index.html"), INDEX_HTML);

      console.log(`Generated folder for ${demoName}`);
    }
  }
}

generateDemoFolders().catch(console.error);
