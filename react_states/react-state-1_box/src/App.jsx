import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setActivated] = useState(false);

  // let isActive = false;

  function handleClick() {
    setActivated(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
