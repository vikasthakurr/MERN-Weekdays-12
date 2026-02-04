/*
=========================================================
useRef Hook Example & Notes
=========================================================

What is useRef?
---------------
- `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument.
- The returned object will persist for the full lifetime of the component.
- Updating a reducer DOES NOT trigger a re-render.

Key Use Cases:
--------------
1. Accessing DOM elements directly (similar to document.getElementById).
2. Storing mutable values that logic depends on but rendering doesn't (checking previous state, intervals, etc.).

Syntax:
-------
const myRef = useRef(initialValue);
console.log(myRef.current); // initialValue

Difference from useState:
-------------------------
- useState: Changing value -> Triggers Re-render -> Updates UI
- useRef: Changing value -> NO Re-render -> Value persists between renders

*/

import React, { useRef, useState, useEffect } from "react";

const UseRefExample = () => {
  // -----------------------------------------------------
  // Example 1: Accessing DOM Elements
  // -----------------------------------------------------
  const inputRef = useRef(null);

  const focusInput = () => {
    // Access the DOM node directly using .current
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#f0f0f0";
  };

  // -----------------------------------------------------
  // Example 2: Mutable Variable (No Re-render)
  // -----------------------------------------------------
  const countRef = useRef(0);
  const [dummyState, setDummyState] = useState(0); // Just to force re-render

  const incrementRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`Ref Count: ${countRef.current}`);
    // Note: The UI for 'Ref Count' won't update until something else triggers a re-render
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
      <h2>useRef Example</h2>

      {/* DOM Access Section */}
      <div style={{ marginBottom: "20px" }}>
        <h3>1. Accessing DOM</h3>
        <input ref={inputRef} type="text" placeholder="I will get focus..." />
        <button onClick={focusInput} style={{ marginLeft: "10px" }}>
          Focus Input
        </button>
      </div>

      <hr />

      {/* Mutable Value Section */}
      <div>
        <h3>2. Mutable Value (Persists without re-render)</h3>
        <p>Ref Count (See Console): {countRef.current}</p>
        <button onClick={incrementRef}>Increment Ref</button>

        <p style={{ marginTop: "10px", fontSize: "0.9em", color: "#888" }}>
          Clicking "Increment Ref" changes the value but doesn't update the UI.
          <br />
          Click "Force Re-render" to see the updated Ref value.
        </p>
        <button onClick={() => setDummyState(dummyState + 1)}>
          Force Re-render
        </button>
      </div>
    </div>
  );
};

export default UseRefExample;
