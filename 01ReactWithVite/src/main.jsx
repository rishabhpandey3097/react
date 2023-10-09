// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// const customReactElmenent = React.createElement(
//   "a",
//   {
//     href: "https://www.google.com",
//     target: "_black",
//   },
//   "Click to me visit google",
//   / * variable injections goes here */
// );

root.render(<App />);
