import React from "react";

const App = () => {
  // let name = "vikas";
  // const btn = document.querySelector("#btn");
  // console.log(btn);
  // btn.addEventListener("click", () => {
  //   console.log("btn clicked");
  // });
  const handleClick = () => {
    console.log("btn clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default App;
