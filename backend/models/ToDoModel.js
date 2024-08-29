import mongoose from "mongoose";

// Define the schema for a TODO item
const ToDoSchema = new mongoose.Schema({
	text: {
		type: String, // The text of the TODO item
		required: true, // This field is mandatory
	},
});

// Export the model based on the schema
export default mongoose.model("ToDo", ToDoSchema);
