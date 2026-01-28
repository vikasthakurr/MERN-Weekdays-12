import React, { createContext } from "react";
import Parent from "./Parent";

// eslint-disable-next-line react-refresh/only-export-components
export const postman = createContext();
const App = () => {
  let data = {
    fname: "vikas",
  };
  return (
    <div>
      <postman.Provider value={data}>
        <Parent />
      </postman.Provider>
    </div>
  );
};

export default App;
