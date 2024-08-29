import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/ToDoRoute.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 6060;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Connect to MongoDB
mongoose
	.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err));

// Use the defined routes
app.use(routes);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
