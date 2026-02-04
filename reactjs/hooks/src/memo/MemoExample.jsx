/*
=========================================================
React.memo Example & Notes
=========================================================

What is React.memo?
-------------------
- React.memo is a Higher Order Component (HOC) for functional components.
- It prevents a functional component from re-rendering if its props have not changed.
- It's like `PureComponent` for class components.

When to use?
------------
- When a component renders often with the SAME props.
- When a component contains a lot of UI and re-rendering is expensive.

How it works:
-------------
- By default, whenever a parent re-renders, ALL its children re-render.
- Wrapped in `memo`, React checks if props changed.
  - If props are same -> Skip render (Success!).
  - If props changed -> Re-render.

Syntax:
-------
const MyComponent = React.memo((props) => {
  // component logic
});
*/

import React, { useState } from "react";

// -----------------------------------------------------
// Child Component (Normal)
// -----------------------------------------------------
// This will re-render EVERY TIME the parent renders
const NormalChild = ({ count }) => {
  console.log("NormalChild Rendered");
  return <p>Normal Child Count: {count}</p>;
};

// -----------------------------------------------------
// Child Component (Memoized)
// -----------------------------------------------------
// This will ONLY re-render if 'count' prop changes
const MemoizedChild = React.memo(({ count }) => {
  console.log("MemoizedChild Rendered");
  return (
    <p>Memoized Child Count: {count} (I don't re-render on text change!)</p>
  );
});

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>React.memo Example</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Parent Component</h3>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
          style={{ marginLeft: "10px" }}
        />
        <p>
          Typing in the input updates Parent state (text), causing Parent to
          re-render.
        </p>
      </div>

      <hr />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ border: "1px dashed red", padding: "10px" }}>
          <NormalChild count={count} />
          <small style={{ color: "red" }}>
            Check Console: I render on every keystroke!
          </small>
        </div>

        <div style={{ border: "1px dashed green", padding: "10px" }}>
          <MemoizedChild count={count} />
          <small style={{ color: "green" }}>
            Check Console: I only render when Count changes!
          </small>
        </div>
      </div>
    </div>
  );
};

export default MemoExample;
