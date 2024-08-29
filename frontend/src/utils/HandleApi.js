// Importing the axios library for making HTTP requests
import axios from "axios";

// Base URL for the API server
const baseUrl = "http://localhost:6060";

// Function to fetch all todo items from the server
const getAllToDo = (setToDo) => {
	// Sending a GET request to the base URL to retrieve all todo items
	axios
		.get(baseUrl)
		.then(({ data }) => {
			// Logging the response data to the console for debugging purposes
			console.log("Data ===>", data);
			// Updating the state with the fetched todo items by calling setToDo
			setToDo(data);
		})
		.catch((err) => {
			// Logging any errors that occur during the request
			console.log(err);
		});
};

// Function to add a new todo item to the server
const addToDo = (text, setText, setToDo) => {
	// Sending a POST request to the /save endpoint with the new todo text
	axios
		.post(`${baseUrl}/save`, { text })
		.then((data) => {
			// Logging the server response to the console for debugging purposes
			console.log(data);
			// Clearing the input field by resetting the text state
			setText("");
			// Fetching the updated list of todo items to include the newly added item
			getAllToDo(setToDo);
		})
		.catch((err) => {
			// Logging any errors that occur during the request
			console.log(err);
		});
};

// Function to update an existing todo item on the server
const updateToDo = (todoId, text, setToDo, setText, setIsUpdating) => {
	// Sending a POST request to the /update endpoint with the todo ID and updated text
	axios
		.post(`${baseUrl}/update`, { _id: todoId, text })
		.then((data) => {
			// Clearing the input field by resetting the text state
			setText("");
			// Exiting the update mode by setting isUpdating to false
			setIsUpdating(false);
			// Fetching the updated list of todo items to reflect the changes
			getAllToDo(setToDo);
		})
		.catch((err) => {
			// Logging any errors that occur during the request
			console.log(err);
		});
};

// Function to delete a todo item from the server
const deleteToDo = (_id, setToDo) => {
	// Sending a POST request to the /delete endpoint with the ID of the todo item to be deleted
	axios
		.post(`${baseUrl}/delete`, { _id })
		.then((data) => {
			// Logging the server response to the console for debugging purposes
			console.log(data);
			// Fetching the updated list of todo items to remove the deleted item
			getAllToDo(setToDo);
		})
		.catch((err) => {
			// Logging any errors that occur during the request
			console.log(err);
		});
};

// Exporting the functions to be used in other parts of the application
export { getAllToDo, addToDo, updateToDo, deleteToDo };
