import express, { Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

const router = express.Router();
const blogsDir = path.join(__dirname, "..", "blogs");

// Get all blog posts
router.get("/", async (req: Request, res: Response) => {
  try {
    const files = await fs.readdir(blogsDir);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          const content = await fs.readFile(path.join(blogsDir, file), "utf-8");
          return JSON.parse(content);
        })
    );

    res.json(
      posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    );
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog posts", error });
  }
});

// Get a single blog post by slug
router.get("/:slug", async (req: Request, res: Response) => {
  try {
    const filePath = path.join(blogsDir, `${req.params.slug}.json`);
    try {
      const content = await fs.readFile(filePath, "utf-8");
      res.json(JSON.parse(content));
    } catch (error) {
      res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog post", error });
  }
});

export const blogRoutes = router;
