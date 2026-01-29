import React, { useEffect, useState } from "react";
import Skelton from "./Skelton";
import Card from "./Card";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  return <div>{loading ? <Skelton /> : <Card />}</div>;
};

export default App;
