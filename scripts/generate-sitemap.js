import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, readdirSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve, join } from "path";
import { glob } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = "https://www.simple-table.com";

// Function to get all Next.js routes from the app directory
async function getNextJsRoutes() {
  const appDir = resolve(__dirname, "../client/src/app");
  const routes = await glob("**/page.{tsx,jsx,js,ts}", { cwd: appDir });

  return routes
    .map((route) => {
      // Convert file path to URL path
      const path = route
        .replace(/\/page\.[jt]sx?$/, "") // Remove page.tsx
        .replace(/\/\([^)]+\)/g, "") // Remove route groups
        .replace(/\[([^\]]+)\]/g, ":$1") // Convert [param] to :param
        .replace(/index$/, ""); // Remove index from path

      return path || "/";
    })
    .filter((route) => !route.startsWith("_") && !route.includes("api")); // Filter out special Next.js routes
}

// Function to get all blog posts from JSON files
function getBlogPosts() {
  const blogsDir = resolve(__dirname, "../api/src/blogs");
  const blogFiles = readdirSync(blogsDir).filter((file) => file.endsWith(".json"));

  return blogFiles.map((file) => {
    const content = readFileSync(join(blogsDir, file), "utf-8");
    const post = JSON.parse(content);
    return {
      url: `/blog/${post.slug}`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: post.updatedAt || post.createdAt,
    };
  });
}

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({
      hostname: baseUrl,
    });

    // Get all routes
    const nextJsRoutes = await getNextJsRoutes();
    const blogPosts = getBlogPosts();

    // Add Next.js routes with default priorities
    nextJsRoutes.forEach((route) => {
      const priority =
        route === "/"
          ? 1.0
          : route.startsWith("/docs")
          ? 0.8
          : route.startsWith("/examples")
          ? 0.7
          : 0.6;

      sitemap.write({
        url: route,
        changefreq: route === "/" ? "daily" : "weekly",
        priority,
      });
    });

    // Add blog posts
    blogPosts.forEach((post) => {
      sitemap.write(post);
    });

    sitemap.end();

    // Generate the sitemap XML
    const xml = await streamToPromise(sitemap);

    // Write the sitemap to the public directory
    const outputPath = resolve(__dirname, "../client/public/sitemap.xml");
    createWriteStream(outputPath).write(xml.toString());

    console.log("Sitemap generated successfully!");
    console.log(`Found ${nextJsRoutes.length} Next.js routes and ${blogPosts.length} blog posts`);
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
