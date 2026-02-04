/*
=========================================================
useEffect Hook Example & Notes
=========================================================

What is useEffect?
------------------
- `useEffect` lets you perform "side effects" in function components.
- Side effects include: fetching data, directly updating the DOM, timers, logging, etc.
- It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes.

Syntax:
-------
useEffect(() => {
  // Your side effect code here
  
  return () => {
    // Cleanup code (optional)
  }
}, [dependencies]);

The Dependency Array ([]):
--------------------------
1. No dependency array passed:
   useEffect(() => { ... }) 
   -> Runs after every render.

2. Empty array ([]):
   useEffect(() => { ... }, []) 
   -> Runs only ONCE after the initial render (like componentDidMount).

3. Array with variables ([prop, state]):
   useEffect(() => { ... }, [prop, state]) 
   -> Runs on mount AND whenever any dependency changes.

Cleanup Function:
-----------------
- If you return a function from your effect, React will call it when:
  a) The component unmounts.
  b) Before running the effect again (due to dependency change).
- Useful for cleaning up timers, event listeners, or subscriptions.

*/

import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  // -----------------------------------------------------
  // Example 1: Run on every render (no dependency array)
  // -----------------------------------------------------
  // Monitor console to see this run frequently
  useEffect(() => {
    console.log("I run on every render");
  });

  // -----------------------------------------------------
  // Example 2: Run only on Mount AND when resourceType changes
  // -----------------------------------------------------
  useEffect(() => {
    console.log(`Resources type changed to: ${resourceType}`);

    // Simulating data fetch
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json.slice(0, 5))); // storing first 5 items

    // Cleanup function example
    return () => {
      console.log("Cleanup: This runs before the next effect or on unmount");
    };
  }, [resourceType]); // Dependency array contains resourceType

  // -----------------------------------------------------
  // Example 3: Event Listeners (Run once on mount)
  // -----------------------------------------------------
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // CLEANUP IS CRUCIAL FOR EVENT LISTENERS
    // If not removed, it can cause memory leaks because the listener stays attached
    // even after component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array -> Runs once on mount

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>useEffect Example</h2>

      {/* Window Resize Example */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Window Width: {width}px</h3>
        <p>
          <small>(Resize your browser window to see this update)</small>
        </p>
      </div>

      <hr />

      {/* Data Fetching Example */}
      <div>
        <h3>Data Fetching & Dependencies</h3>
        <div style={{ marginBottom: "10px" }}>
          <button
            onClick={() => setResourceType("posts")}
            style={{
              backgroundColor: resourceType === "posts" ? "#646cff" : "",
            }}
          >
            Posts
          </button>
          <button
            onClick={() => setResourceType("users")}
            style={{
              marginLeft: "10px",
              backgroundColor: resourceType === "users" ? "#646cff" : "",
            }}
          >
            Users
          </button>
          <button
            onClick={() => setResourceType("comments")}
            style={{
              marginLeft: "10px",
              backgroundColor: resourceType === "comments" ? "#646cff" : "",
            }}
          >
            Comments
          </button>
        </div>

        <h4>Displaying: {resourceType}</h4>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ textAlign: "left" }}>
              {JSON.stringify(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseEffectExample;
