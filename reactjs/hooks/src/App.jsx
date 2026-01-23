import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // console.log("hi");

  // useEffect(()=>{
  //   console.log("hi")
  // },[count,])
  // function fetchData(url) {
  //   try {
  //     fetch(url)
  //       .then((res) => {
  //         res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // fetchData("https://dummyjson.com/products");

  // useEffect(()=>fetchData(),[url])

  useEffect(() => {
    if (count == 1) {
      console.log("connected");
    }

    return () => {
      console.log("disconnected");
    };
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default App;
