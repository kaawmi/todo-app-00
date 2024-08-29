// Importing necessary modules from React and icon libraries
import React from "react";
import { BiEdit } from "react-icons/bi"; // Importing edit icon from react-icons library
import { MdDeleteForever } from "react-icons/md"; // Importing delete icon from react-icons library

// Functional component to render a single todo item
const ToDo = ({ text, updateMode, deleteToDo }) => {
	return (
		<div>
			{/* Wrapper for the todo item */}
			<div className="todo">
				{/* Displaying the todo text */}
				<div className="text">{text}</div>
				{/* Icons for editing and deleting the todo item */}
				<div className="icons">
					{/* Edit icon with an onClick handler to trigger updateMode */}
					<BiEdit className="icon" onClick={updateMode} />
					{/* Delete icon with an onClick handler to trigger deleteToDo */}
					<MdDeleteForever className="icon" onClick={deleteToDo} />
				</div>
			</div>
		</div>
	);
};

// Exporting the ToDo component for use in other parts of the application
export default ToDo;
