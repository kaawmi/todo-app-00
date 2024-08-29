import { Router } from "express";
import {
	getTodo,
	saveTodo,
	updateTodo,
	deleteTodo,
} from "../controllers/ToDoController.js"; // Ensure the .js extension is included

const router = Router();

// Route to get all TODO items
router.get("/", getTodo);

// Route to save a new TODO item
router.post("/save", saveTodo);

// Route to update an existing TODO item
router.post("/update", updateTodo);

// Route to delete a TODO item
router.post("/delete", deleteTodo);

export default router;
