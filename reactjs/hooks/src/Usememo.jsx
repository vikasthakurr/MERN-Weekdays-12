import React, { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import Child from "./Child";

const Usememo = () => {
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  // function handleClick2() {
  //   setCount2(count2 + 1);
  // }
  function handleClick() {
    setCount(count + 1);
  }

  function sum() {
    console.log("heavy function called");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum = sum + i;
    }
    return sum;
  }
  const res = useMemo(() => sum(), []);
  //   console.log(res);
  function sayHi() {
    console.log("hi");
  }

  const memoizedSayHi = useCallback(() => sayHi, []);

  return (
    <div>
      <h1>the result of sum :{res}</h1>
      <h1>count:{count}</h1>
      <button onClick={handleClick}>Change</button>

      <br />
      <br></br>
      {/* <button onClick={handleClick2}>Change2</button> */}
      <Child sayHi={memoizedSayHi} />
    </div>
  );
};

export default Usememo;
