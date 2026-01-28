import React, { useContext } from "react";
import { postman } from "./App";

const Child2 = () => {
  const data = useContext(postman);
  console.log(data);
  return <div>Child2</div>;
};

export default Child2;
