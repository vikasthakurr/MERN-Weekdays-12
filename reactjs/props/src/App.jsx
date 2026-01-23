import React, {useState } from "react";
import Child from "./Child";
// import Card from "./Card";

const App = () => {
  // let name="vikas"
  const [name, setName] = useState("");
  return (
    <div>
      {/* <Card fullname="vikas" age="25" salary="12345" say={say} />
      <Card fullname="rajit" age="20" /> */}
      <Child name={name} setName={setName} />
      <p>the value that is coming from child is :{name}</p>
    </div>
  );
};

export default App;
