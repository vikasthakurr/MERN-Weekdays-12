/*
=========================================================
useState Hook Example & Notes
=========================================================

What is useState?
-----------------
- `useState` is a Hook that allows you to add React state to function components.
- Before Hooks, state could only be used in class components.
- It returns an array with two elements:
  1. The current state value.
  2. A function that lets you update it.

Syntax:
-------
const [state, setState] = useState(initialValue);

- `state`: The variable that holds the current state value.
- `setState`: The function used to update the state.
- `initialValue`: The initial value of the state (can be number, string, object, array, boolean, etc.)

Rules of Hooks:
---------------
1. Only call Hooks at the top level of your component. Don't call them inside loops, conditions, or nested functions.
2. Only call Hooks from React function components or custom Hooks.

*/

import React, { useState } from "react";

const UseStateExample = () => {
  // -----------------------------------------------------
  // Example 1: Basic Counter (Number State)
  // -----------------------------------------------------
  // count: current value (initially 0)
  // setCount: function to update count
  const [count, setCount] = useState(0);

  // -----------------------------------------------------
  // Example 2: Managing Object State
  // -----------------------------------------------------
  // NOTE: unLink class components' this.setState, the useState hook's updater function
  // DOES NOT automatically merge objects. You have to do it manually using spread operator (...).
  const [user, setUser] = useState({
    name: "John Doe",
    age: 25,
    email: "john@example.com",
  });

  // Function to increment counter
  const increment = () => {
    // Standard way: using the current value
    // setCount(count + 1);

    // Best Practice: Functional update
    // Use this when the new state depends on the previous state
    setCount((prevCount) => prevCount + 1);
  };

  // Function to update object state
  const updateName = () => {
    setUser((prevUser) => ({
      ...prevUser, // Spread previous user properties to keep age and email
      name: "Jane Smith", // Overwrite name
    }));
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>useState Example</h2>

      {/* Counter Section */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Counter: {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>

      <hr />

      {/* Object State Section */}
      <div>
        <h3>User Profile (Object State)</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <button onClick={updateName}>Change Name</button>
      </div>
    </div>
  );
};

export default UseStateExample;
