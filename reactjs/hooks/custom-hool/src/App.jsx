// import React from "react";
import Custom from "./Custom.jsx";

const App = () => {
  const [data] = Custom("https://dummyjson.com/products");
  console.log(data);
  return <div>App</div>;
};

export default App;
