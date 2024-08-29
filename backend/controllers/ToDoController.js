import TodoModel from "../models/ToDoModel.js";

// Controller to get all TODO items
export const getTodo = async (req, res) => {
	try {
		const todos = await TodoModel.find(); // Fetch all TODO items from the database
		res.send(todos); // Send the list of TODO items as the response
	} catch (err) {
		console.error("Error fetching TODOs:", err);
		res.status(500).send("Server error");
	}
};

// Controller to save a new TODO item
export const saveTodo = async (req, res) => {
	try {
		const { text } = req.body; // Extract the text from the request body
		const newTodo = await TodoModel.create({ text }); // Create a new TODO item in the database
		console.log("Added Successfully...", newTodo);
		res.send(newTodo); // Send the newly created TODO item as the response
	} catch (err) {
		console.error("Error saving TODO:", err);
		res.status(500).send("Server error");
	}
};

// Controller to update an existing TODO item
export const updateTodo = async (req, res) => {
	try {
		const { _id, text } = req.body; // Extract the ID and updated text from the request body
		await TodoModel.findByIdAndUpdate(_id, { text }); // Find the TODO item by ID and update its text
		res.send("Updated Successfully..."); // Send a success message as the response
	} catch (err) {
		console.error("Error updating TODO:", err);
		res.status(500).send("Server error");
	}
};

// Controller to delete a TODO item
export const deleteTodo = async (req, res) => {
	try {
		const { _id } = req.body; // Extract the ID from the request body
		await TodoModel.findByIdAndDelete(_id); // Find the TODO item by ID and delete it
		res.send("Deleted Successfully..."); // Send a success message as the response
	} catch (err) {
		console.error("Error deleting TODO:", err);
		res.status(500).send("Server error");
	}
};
