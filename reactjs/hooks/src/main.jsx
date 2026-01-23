import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Useref from "./Useref.jsx";
import Usememo from "./Usememo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Useref /> */}
    <Usememo />
  </StrictMode>,
);
