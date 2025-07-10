import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    // State to store all todo sections (each with a heading and associated lists)
    const [todos, setTodos] = useState([]);
    // State to manage the current heading input
    const [headingInput, setHeadingInput] = useState('');
    // State to manage each input field for the nested list items by heading index
    const [listInputs, setListInputs] = useState({});
    // Function to add a new todo heading (if input is not empty)
    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            // Append new todo with empty list array
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput(''); // Clear the input field
        }
    };
    // Function to delete a todo section based on index
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];       // Create a copy of current todos
        newTodos.splice(index, 1);         // Remove the selected heading
        setTodos(newTodos);                // Update state with modified list
    };
    //Function to mark each todo item as completed
    const handleDeleteTodolist = (todoIndex, listIndex) => {
        const updatedTodos = [...todos];
        updatedTodos[todoIndex].lists[listIndex].done = !updatedTodos[todoIndex].lists[listIndex].done; // ✅ Toggle done
        setTodos(updatedTodos);
    };
    // Function to add a new list item under a specific heading
    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];                        // Copy current todos
            newTodos[index].lists.push({ text: listInputs[index], done: false });      // Add list in an object format with two properties text and done
            setTodos(newTodos);                                 // Update state
            setListInputs({ ...listInputs, [index]: '' });      // Clear list input for that section
        }
    };
    // Function to handle change in list input field for a specific section
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value }); // Track input for each heading index
    };
    return (
        <>
            {/* Input section to add a new heading */}
            <div className="todo-container">
                <h1 className="title">My Todo List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        className="heading-input"
                        placeholder="Enter heading"
                        value={headingInput}
                        onChange={(e) => setHeadingInput(e.target.value)} // Update heading input value
                    />
                    <button className="add-list-button" onClick={handleAddTodo}>
                        Add Heading
                    </button>
                </div>
            </div>
            {/* Main section displaying all todos */}
            <div className="todo_main">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-card">
                        <div className="heading_todo">
                            <h3>{todo.heading}</h3> {/* Display heading */}
                            <button className="delete-button-heading"
                                onClick={() => handleDeleteTodo(index)}
                            >
                                Delete Heading
                            </button>
                        </div>
                        {/* Render all list items under this heading */}
                        <ul>
                            {/*
                            todo.lists.map((list, listIndex) => (
                                // Render each list item
                                <li key={listIndex} className='todo_inside_list'> //This displays eash list item in text format on which we can not use our complete button
                                <p>{list}</p>
                                </li>
                            ))
                            */}
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className='todo_inside_list'>
                                    <p
                                        style={{
                                            textDecoration: list.done ? "line-through" : "none" //strike throughs the item when clicked completed
                                        }}
                                    >
                                        {list.text}
                                    </p> 
                                    <button className='delete-button-list'
                                    onClick={() => handleDeleteTodolist(index, listIndex)}
                                    >
                                    {list.done ? "completed" : "not completed"}
                                    </button>
                                </li>
                                ))}
                        </ul>
                        {/* Input section to add list item under this heading */}
                        <div className='add_list'>
                            <input
                                type="text"
                                className="list-input"
                                placeholder="Add List"
                                value={listInputs[index] || ''} // Maintain controlled input
                                onChange={(e) => handleListInputChange(index, e.target.value)} // Update list input value
                            />
                            <button
                                className="add-list-button"
                                onClick={() => handleAddList(index)}
                            >
                                Add List
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TodoList;