import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tripGenRoutes from "./routes/tripGenRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the trip generator routes
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/api", tripGenRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
