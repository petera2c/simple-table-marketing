import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { blogRoutes } from "./routes/blog.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: [
    "http://localhost:3000", // Development
    process.env.FRONTEND_URL || "https://your-heroku-app-name.herokuapp.com", // Production
  ],
  methods: ["GET", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/blog", blogRoutes);

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Simple Table API" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
