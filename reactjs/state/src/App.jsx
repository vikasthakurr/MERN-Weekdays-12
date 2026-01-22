import React from "react";
import { useState } from "react";
const App = () => {
  let [count, setCount] = useState(0);
  // console.log(useState(0));
  // let a = 10;
  const handleClick = () => {
    // count = count + 1;
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <h1>vikas</h1>
      <button onClick={handleClick}> Increment</button>
    </div>
  );
};

export default App;
