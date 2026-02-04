/*
=========================================================
useCallback Hook Example & Notes
=========================================================

What is useCallback?
--------------------
- `useCallback` returns a MEMOIZED CALLBACK FUNCTION.
- It is primarily used to optimize performance by preventing the recreation of functions on every render.
- This is crucial when passing functions as props to memoized child components.

Rationale:
----------
1. In JavaScript, function() {} !== function() {}.
2. Every time a component re-renders, all functions inside it are recreated (new reference).
3. If you pass this "new" function to a `React.memo` child, the child sees a "new prop" and re-renders, breaking the memoization.
4. `useCallback` ensures the function reference STAYS THE SAME unless dependencies change.

Syntax:
-------
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

*/

import React, { useState, useCallback } from "react";

// -----------------------------------------------------
// Child Component needs to be memoized for useCallback to matter!
// -----------------------------------------------------
const List = React.memo(({ getItems }) => {
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    setItems(getItems());
    console.log("List Items Updated");
  }, [getItems]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item} style={{ textAlign: "left" }}>
          {item}
        </li>
      ))}
    </ul>
  );
});

const UseCallbackExample = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // -----------------------------------------------------
  // Without useCallback:
  // -----------------------------------------------------
  // const getItems = () => {
  //     return [number, number + 1, number + 2];
  // };
  // Problem: Toggling theme re-renders Parent -> getItems is recreated -> List sees new prop -> List re-renders.

  // -----------------------------------------------------
  // With useCallback:
  // -----------------------------------------------------
  // getItems is only recreated if 'number' changes.
  // Toggling theme does NOT recreate this function, so List DOES NOT re-render.
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
    padding: "20px",
    margin: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  };

  return (
    <div style={themeStyles}>
      <h2>useCallback Example</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button
        onClick={() => setDark((prevDark) => !prevDark)}
        style={{ marginLeft: "10px" }}
      >
        Toggle Theme
      </button>

      <div style={{ marginTop: "20px" }}>
        <p>List of numbers:</p>
        <List getItems={getItems} />
      </div>

      <div
        style={{
          marginTop: "20px",
          fontSize: "0.9em",
          color: dark ? "#ccc" : "#666",
        }}
      >
        <p>Instructions:</p>
        <ol style={{ textAlign: "left" }}>
          <li>Open Console.</li>
          <li>Toggle Theme &rarr; Check if "List Items Updated" prints.</li>
          <li>If it prints, unnecessary render happened.</li>
          <li>With `useCallback`, it should NOT print when toggling theme.</li>
        </ol>
      </div>
    </div>
  );
};

export default UseCallbackExample;
