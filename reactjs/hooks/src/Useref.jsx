import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

const Useref = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const ref1 = useRef();
  // console.log(ref.current);

  //   let value = 0;

  function handleClick() {
    setCount(count + 1);
    // value = value + 1;
    // console.log(value);
    // ref.current = ref.current + 1;
    // console.log(ref.current);
  }
  useEffect(() => {
    ref.current.style.backgroundColor = "red";
    // ref.current.style.backgroundColor = "yellow";
    ref1.current.style.color = "green";
  }, []);
  return (
    <div>
      <h1 ref={ref1}>{count}</h1>
      <button ref={ref} onClick={handleClick}>
        Change
      </button>
    </div>
  );
};

export default Useref;
