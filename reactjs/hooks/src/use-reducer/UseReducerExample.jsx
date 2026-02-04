/*
=========================================================
useReducer Hook Example & Notes
=========================================================

What is useReducer?
-------------------
- An alternative to `useState` for managing complex state logic.
- Based on the Redux pattern (State + Action = New State).
- Good when:
  1. The next state depends on the previous one.
  2. State logic is complex (nested objects).
  3. You want to centralize state update logic.

Syntax:
-------
const [state, dispatch] = useReducer(reducer, initialState);

- `reducer`: Function(state, action) => newState
- `initialState`: The starting value.
- `dispatch`: Function to send actions to the reducer.

Reducer Function:
-----------------
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
*/

import React, { useReducer } from "react";

// 1. Define the Initial State
const initialState = { count: 0, showText: true };

// 2. Define the Reducer Function
// Pure function: takes current state and action, returns NEW state.
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "TOGGLE_TEXT":
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>useReducer Example</h2>

      <h3>Count: {state.count}</h3>

      <div style={{ marginBottom: "20px" }}>
        {/* Dispatch actions with a 'type' */}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </div>

      <hr />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => dispatch({ type: "TOGGLE_TEXT" })}>
          Toggle Text
        </button>

        {state.showText && (
          <p>This text is controlled by the same reducer state!</p>
        )}
      </div>
    </div>
  );
};

export default UseReducerExample;
