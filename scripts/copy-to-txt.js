import { promises as fs } from "fs";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source and destination directories
const sourceDir = join(__dirname, "../client/src/components/demos");
const outputDir = join(__dirname, "../client/public/txt-demos");

// Recursively get all .tsx and .css files in a directory
async function getAllDemoFiles(dir) {
  const files = [];
  try {
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
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`Directory not found: ${dir}`);
      return [];
    }
    throw err;
  }
  return files;
}

async function copyToTxt() {
  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });
    console.log(`Output directory created/verified: ${outputDir}`);

    // Get all .tsx and .css files recursively
    const demoFiles = await getAllDemoFiles(sourceDir);

    if (demoFiles.length === 0) {
      console.warn("No demo files found in:", sourceDir);
      return;
    }

    console.log(`Found ${demoFiles.length} demo files to process`);

    // Copy each file as .txt, preserving folder structure
    for (const file of demoFiles) {
      const relativePath = relative(sourceDir, file);
      const destPath = join(outputDir, relativePath).replace(/\.(tsx|css)$/, ".txt");
      const destDir = dirname(destPath);

      // Create destination directory if it doesn't exist
      await fs.mkdir(destDir, { recursive: true });

      // Read and write file
      const content = await fs.readFile(file, "utf8");
      await fs.writeFile(destPath, content, "utf8");
      console.log(`✓ Copied ${relativePath} to ${relative(outputDir, destPath)}`);
    }

    console.log("✅ All files copied successfully!");
  } catch (err) {
    console.error("❌ Error copying files:", err);
    process.exit(1);
  }
}

// Run the script
copyToTxt();
