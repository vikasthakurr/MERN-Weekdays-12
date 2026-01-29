import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos)
  return <div>Test</div>;
};

export default Test;
