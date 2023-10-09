import { useState } from "react";
import "./App.css";
import Toolbar from "./components/toolbar";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <Toolbar handleColorEvent={(bgColor) => setColor(bgColor)} />
      </div>
    </>
  );
}

export default App;
