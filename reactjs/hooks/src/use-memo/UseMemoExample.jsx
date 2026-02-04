/*
=========================================================
useMemo Hook Example & Notes
=========================================================

What is useMemo?
----------------
- `useMemo` returns a MEMOIZED VALUE.
- It only recomputes the memoized value when one of the dependencies has changed.
- This optimization helps to avoid expensive calculations on every render.
- "Memoization" = Caching a result so you don't have to recalculate it.

Syntax:
-------
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

When to use?
------------
1. When you have a slow synchronous function (heavy math, large array filtering).
2. To ensure reference equality for objects/arrays passed to child components (preventing unnecessary child re-renders).

Don't Overuse!
--------------
- useMemo has overhead (memory to store the result). 
- Only use it for actually expensive calculations.
*/

import React, { useState, useMemo } from 'react';

// A helper function to simulate a heavy calculation (blocking loop)
const slowFunction = (num) => {
  console.log('Calling Slow Function...');
  for (let i = 0; i <= 1000000000; i++) {} // Artificial delay
  return num * 2;
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // -----------------------------------------------------
  // Without useMemo:
  // -----------------------------------------------------
  // const doubleNumber = slowFunction(number); 
  // This would run on EVERY render, making the Theme Toggle slow too!

  // -----------------------------------------------------
  // With useMemo:
  // -----------------------------------------------------
  // Only runs slowFunction when 'number' changes.
  // Toggling the theme (dark state) will NOT cause this to run again.
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
    padding: '20px',
    margin: '20px', 
    borderRadius: '8px',
    border: '1px solid #ccc'
  };

  return (
    <div style={themeStyles}>
      <h2>useMemo Example</h2>
      
      <input 
        type="number" 
        value={number} 
        onChange={e => setNumber(parseInt(e.target.value))} 
        placeholder="Enter a number"
      />
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setDark(prevDark => !prevDark)}>
            Change Theme
        </button>
      </div>
      
      <h3>Double Number: {doubleNumber}</h3>
      
      <div style={{ marginTop: '20px', fontSize: '0.9em', color: dark ? '#ccc' : '#666' }}>
        <p>Instructions:</p>
        <ol style={{ textAlign: 'left' }}>
            <li>Open Console.</li>
            {/* <li>Change the number -> You will see "Calling Slow Function..." and a delay.</li> */}
            {/* <li>Toggle Theme -> Instant! (No "Calling Slow Function...") as the calculation is memoized.</li> */}
        </ol>
      </div>
    </div>
  );
};

export default UseMemoExample;
