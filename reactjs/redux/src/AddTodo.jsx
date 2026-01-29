import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./redux/reducer/TodoSlice.js";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    dispatch(addTodo({ text: inputText }));
    setInputText("");
  };

  const handleRemoveAll = () => {
    dispatch(removeTodo());
  };

  return (
    <div className="flex justify-center items-center mt-10 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={inputText}
          placeholder="Enter a task"
          onChange={(e) => setInputText(e.target.value)}
          className="px-4 py-2 w-80 border border-r-0 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          type="submit"
          className="px-6 py-2 text-gray-800 font-semibold bg-yellow-400 rounded-r-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
        >
          Add Todo
        </button>
      </form>

      <button
        onClick={handleRemoveAll}
        className="ml-4 px-6 py-2 text-white font-semibold bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75"
      >
        Remove All
      </button>
    </div>
  );
};

export default AddTodo;
