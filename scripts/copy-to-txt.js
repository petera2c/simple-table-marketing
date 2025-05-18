import { promises as fs } from "fs";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source and destination directories
const sourceDir = join(__dirname, "../src/components/demos");
const examplesSourceDir = join(__dirname, "../src/examples");
const outputDir = join(__dirname, "../public/txt-demos");

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

// Get Example.tsx files from each subdirectory in examples
async function getExampleContentFiles() {
  const files = [];
  try {
    // Get subdirectories in examples folder
    const entries = await fs.readdir(examplesSourceDir, { withFileTypes: true });
    const subdirectories = entries.filter((entry) => entry.isDirectory());

    console.log(`Found ${subdirectories.length} example categories to process`);

    // For each subdirectory, find the Example.tsx file
    for (const subdir of subdirectories) {
      const subdirPath = join(examplesSourceDir, subdir.name);
      const subdirEntries = await fs.readdir(subdirPath, { withFileTypes: true });

      // Find Example.tsx file in the subdirectory
      const contentFile = subdirEntries.find(
        (entry) => entry.isFile() && entry.name.endsWith("Example.tsx")
      );

      if (contentFile) {
        const fullPath = join(subdirPath, contentFile.name);
        files.push({
          path: fullPath,
          category: subdir.name,
        });
        console.log(`Found example: ${subdir.name}/${contentFile.name}`);
      } else {
        console.warn(`No Example.tsx file found in ${subdir.name} example`);
      }
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`Directory not found: ${examplesSourceDir}`);
      return [];
    }
    throw err;
  }
  return files;
}

async function copyFilesToTxt(sourceFiles, sourceBaseDir, outputBaseDir) {
  // Copy each file as .txt, preserving folder structure
  for (const file of sourceFiles) {
    const relativePath = relative(sourceBaseDir, file);
    const destPath = join(outputBaseDir, relativePath).replace(/\.(tsx|css)$/, ".txt");
    const destDir = dirname(destPath);

    // Create destination directory if it doesn't exist
    await fs.mkdir(destDir, { recursive: true });

    // Read and write file
    const content = await fs.readFile(file, "utf8");
    await fs.writeFile(destPath, content, "utf8");
    console.log(`✓ Copied ${relativePath} to ${relative(outputBaseDir, destPath)}`);
  }
}

async function copyExampleFilesToTxt(exampleFiles, outputDir) {
  // Copy example files to the root of the output directory
  for (const example of exampleFiles) {
    const { path: filePath } = example;

    // Get the original filename without extension
    const filename = filePath
      .split("/")
      .pop()
      .replace(/\.tsx$/, "");
    const destPath = join(outputDir, `${filename}.txt`);

    // Read and write file
    const content = await fs.readFile(filePath, "utf8");
    await fs.writeFile(destPath, content, "utf8");
    console.log(`✓ Copied ${filename} to ${filename}.txt`);
  }
}

async function copyToTxt() {
  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });
    console.log(`Output directory created/verified: ${outputDir}`);

    // Process demo files
    const demoFiles = await getAllDemoFiles(sourceDir);

    if (demoFiles.length === 0) {
      console.warn("No demo files found in:", sourceDir);
    } else {
      console.log(`Found ${demoFiles.length} demo files to process`);
      await copyFilesToTxt(demoFiles, sourceDir, outputDir);
    }

    // Process example files
    const exampleFiles = await getExampleContentFiles();

    if (exampleFiles.length === 0) {
      console.warn("No example files found in:", examplesSourceDir);
    } else {
      console.log(`Found ${exampleFiles.length} example Example.tsx files to process`);
      await copyExampleFilesToTxt(exampleFiles, outputDir);
    }

    console.log("✅ All files copied successfully!");
  } catch (err) {
    console.error("❌ Error copying files:", err);
    process.exit(1);
  }
}

// Run the script
copyToTxt();
