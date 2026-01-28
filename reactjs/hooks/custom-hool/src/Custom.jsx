// import React from "react";
import { useEffect } from "react";
// import { useLayoutEffect } from "react";
import { useState } from "react";

const Custom = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);
  return [data];
};

export default Custom;


//todo
//make a hook for setting the data into local storage and getting the data from local storage