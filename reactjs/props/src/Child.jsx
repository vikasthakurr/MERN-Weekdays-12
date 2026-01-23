import React from "react";

const Child = (props) => {
  console.log(props);
  const handleChange = (e) => {
    // console.log(encodeURIComponent);
    props.setName(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="enter your name"
        type="text"
        onChange={handleChange}
      ></input>
      <p>the value i am tying chid is :{props.name}</p>
    </div>
  );
};

export default Child;
