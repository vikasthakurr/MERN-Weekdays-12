import React from "react";

const Card = (props) => {
  console.log(props);
  // let fullname="vikas";
  // let age=25
  return (
    <div>
      <h1>Name:{props.fullname}</h1>
      <h2>Age:{props.age}</h2>
      <p>{props.say()}</p>
    </div>
  );
};

export default Card;
