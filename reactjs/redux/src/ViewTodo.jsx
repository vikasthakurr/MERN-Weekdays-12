import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./redux/reducer/TodoSlice.js"; // Assuming removeTodo can take an ID as a payload

const ViewTodo = () => {
  // Assuming the state shape is { todos: { todos: [...] } }
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    // Dispatching removeTodo with the id of the todo to be removed.
    // This assumes your `removeTodo` reducer is set up to handle a payload with the item's id.
    dispatch(removeTodo(id));
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Todo List
      </h2>
      {todos && todos.length > 0 ? (
        <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <span className="text-gray-900 dark:text-gray-200">{todo.text}</span>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No tasks yet. Add one above!
        </p>
      )}
    </div>
  );
};

export default ViewTodo;
