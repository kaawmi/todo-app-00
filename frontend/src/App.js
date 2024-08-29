// Importing necessary hooks and components from React and local files
import { useEffect, useState } from "react";
import ToDo from "./components/ToDo"; // Importing ToDo component for rendering individual todo items
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi"; // Importing API utility functions for handling todos

// Main App component
function App() {
	// Initialize state for managing todos, text input, and update mode
	const [toDos, setToDos] = useState([]); // State to store the list of todo items
	const [text, setText] = useState(""); // State to store the current text input value
	const [isUpdating, setIsUpdating] = useState(false); // State to determine if the user is in update mode
	const [toDoId, setToDoId] = useState(""); // State to store the ID of the todo item being updated

	// useEffect hook to fetch all todo items from the API when the component mounts
	useEffect(() => {
		// Call the getAllToDo function with setToDos to initialize the todos state
		getAllToDo(setToDos);
	}, []); // Empty dependency array means this effect runs only once after the initial render

	// Function to set the component into update mode with pre-filled text
	const updateMode = (_id, text) => {
		setIsUpdating(true); // Set update mode to true
		setToDoId(_id); // Set the ID of the todo item being updated
		setText(text); // Set the text to be edited
	};

	return (
		<div className="App">
			<div className="container">
				<h1>TODO APP</h1> {/* Title of the application */}
				<div className="top">
					{/* Input field for adding or editing a todo */}
					<input
						type="text"
						placeholder="Add Todo"
						value={text} // Controlled input field
						onChange={(e) => setText(e.target.value)} // Update the text state on input change
					/>

					{/* Button to either add a new todo or update an existing todo */}
					<button
						onClick={
							isUpdating
								? // If in update mode, call updateToDo function
								  () => updateToDo(toDoId, text, setToDos, setText, isUpdating)
								: // Otherwise, call addToDo function
								  () => addToDo(text, setText, setToDos)
						}>
						{/* Button label based on update mode */}
						{isUpdating ? "Update" : "Add"}
					</button>
				</div>
				<div className="list">
					{/* Rendering list of todo items */}
					{toDos.map((item) => (
						<ToDo
							key={item._id} // Unique key for each todo item
							text={item.text} // Text of the todo item
							updateMode={() => updateMode(item._id, item.text)} // Function to set the component into update mode with this item's details
							deleteToDo={() => deleteToDo(item._id, setToDos)} // Function to delete this todo item
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App; // Exporting the App component for use in other parts of the application
