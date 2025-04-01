import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = "https://www.simple-table.com";

// Define all routes in your application
const routes = [
  // Main routes
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/theme-builder", changefreq: "weekly", priority: 0.8 },

  // Examples routes
  { url: "/examples/finance", changefreq: "weekly", priority: 0.7 },
  { url: "/examples/manufacturing", changefreq: "weekly", priority: 0.7 },
  { url: "/examples/hr", changefreq: "weekly", priority: 0.7 },
  { url: "/examples/billing", changefreq: "weekly", priority: 0.7 },

  // Docs routes
  { url: "/docs/installation", changefreq: "weekly", priority: 0.8 },
  { url: "/docs/quick-start", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/column-properties", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/column-resizing", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/column-visibility", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/column-pinning", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/column-alignment", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/column-sorting", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/cell-editing", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/cell-highlighting", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/cell-renderer", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/pagination", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/row-grouping", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/themes", changefreq: "weekly", priority: 0.7 },
  { url: "/docs/custom-theme", changefreq: "weekly", priority: 0.7 },
];

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({
      hostname: baseUrl,
    });

    // Add all routes to the sitemap
    routes.forEach((route) => {
      sitemap.write(route);
    });

    sitemap.end();

    // Generate the sitemap XML
    const xml = await streamToPromise(sitemap);

    // Write the sitemap to the public directory
    const outputPath = resolve(__dirname, "../public/sitemap.xml");
    createWriteStream(outputPath).write(xml.toString());

    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
