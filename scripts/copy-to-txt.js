import { promises as fs } from "fs";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source and destination directories
const sourceDir = join(__dirname, "../src/components/demos");
const outputDir = join(__dirname, "../public/txt-demos");

// Recursively get all .tsx and .css files in a directory
async function getAllDemoFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getAllDemoFiles(fullPath);
      files.push(...subFiles);
    } else if (entry.isFile() && (entry.name.endsWith(".tsx") || entry.name.endsWith(".css"))) {
      files.push(fullPath);
    }
  }
  return files;
}

async function copyToTxt() {
  try {
    // Get all .tsx and .css files recursively
    const demoFiles = await getAllDemoFiles(sourceDir);
    console.log("Found demo files:", demoFiles);

    // Copy each file as .txt, preserving folder structure
    for (const file of demoFiles) {
      const relativePath = relative(sourceDir, file);
      const destPath = join(outputDir, relativePath).replace(/\.(tsx|css)$/, ".txt");
      const destDir = dirname(destPath);

      await fs.mkdir(destDir, { recursive: true });
      const content = await fs.readFile(file, "utf8");
      await fs.writeFile(destPath, content, "utf8");
      console.log(`Copied ${file} to ${destPath}`);
    }
  } catch (err) {
    console.error("Error copying files:", err);
  }
}

copyToTxt();
