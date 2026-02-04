/*
=========================================================
useLayoutEffect Hook Example & Notes
=========================================================

What is useLayoutEffect?
------------------------
- Almost identical to `useEffect`, but it fires SYNCHRONOUSLY after all DOM mutations.
- Use it to read layout from the DOM and synchronously re-render.
- Updates scheduled inside `useLayoutEffect` will be flushed BEFORE the browser has a chance to paint.

Difference from useEffect:
--------------------------
- useEffect: Async (after render & paint). Good for API calls, subscriptions.
- useLayoutEffect: Sync (after render, BEFORE paint). Good for measuring DOM elements (width/height/position) to prevent visual flickering.

When to use?
------------
- When you need to measure an element and adjust the UI *before* the user sees it.
- If you see a flicker (content jumping) with useEffect, try useLayoutEffect.
*/

import React, { useState, useLayoutEffect, useEffect, useRef } from "react";

const UseLayoutEffectExample = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  // -----------------------------------------------------
  // Try changing this to useEffect and see if it flickers
  // -----------------------------------------------------
  useLayoutEffect(() => {
    if (elementRef.current) {
      // Measure the element
      const rect = elementRef.current.getBoundingClientRect();
      // Update state (which triggers a sync re-render before paint)
      setWidth(rect.width);
    }
  }, []); // Run once on mount

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>useLayoutEffect Example</h2>

      <p>
        This hook is used when you need to measure DOM elements before the
        browser paints.
      </p>

      <div
        ref={elementRef}
        style={{
          maxWidth: "400px",
          background: "#f9f9f9",
          padding: "10px",
          border: "2px solid blue",
          color: "#333",
        }}
      >
        I am a box. My measured width is: <strong>{width}px</strong>
      </div>

      <p style={{ fontSize: "0.9em", color: "#666", marginTop: "10px" }}>
        Note: With `useEffect`, you might see '0px' briefly before it updates to
        the real width. `useLayoutEffect` prevents this flicker.
      </p>
    </div>
  );
};

export default UseLayoutEffectExample;
