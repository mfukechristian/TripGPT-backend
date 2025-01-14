import express from "express";
import dotenv from "dotenv";
import tripGenRoutes from "./routes/tripGenRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Use the trip generator routes
app.use("/api", tripGenRoutes);

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
