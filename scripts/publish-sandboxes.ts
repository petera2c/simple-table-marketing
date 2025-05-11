import fs from "fs/promises";
import path from "path";
import fetch from "node-fetch";

const API_TOKEN = process.env.CODESANDBOX_API_TOKEN;
const DEMOS_DIR = path.join(__dirname, "../codesandbox");
const OUTPUT_FILE = path.join(__dirname, "../sandbox-links.json");

async function createSandbox(files: { [key: string]: { content: string } }) {
  const response = await fetch("https://codesandbox.io/api/v1/sandboxes/define", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_TOKEN}` },
    body: JSON.stringify({ files }),
  });
  const { sandbox_id } = (await response.json()) as { sandbox_id: string };
  return `https://codesandbox.io/s/${sandbox_id}`;
}

async function publishSandboxes() {
  const demoDirs = await fs.readdir(DEMOS_DIR, { withFileTypes: true });
  const sandboxLinks: { name: string; url: string }[] = [];

  for (const dir of demoDirs.filter((d) => d.isDirectory())) {
    const demoPath = path.join(DEMOS_DIR, dir.name);
    const files: { [key: string]: { content: string } } = {};
    const demoFiles = await fs.readdir(demoPath);

    for (const file of demoFiles) {
      files[file] = { content: await fs.readFile(path.join(demoPath, file), "utf-8") };
    }

    try {
      const sandboxUrl = await createSandbox(files);
      sandboxLinks.push({ name: dir.name, url: sandboxUrl });
      console.log(`Published ${dir.name}: ${sandboxUrl}`);
    } catch (error) {
      console.error(`Failed to publish ${dir.name}:`, error);
    }
  }

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(sandboxLinks, null, 2));
}

publishSandboxes().catch(console.error);
