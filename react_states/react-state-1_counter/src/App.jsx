import { useState } from "react";

import "./styles.css";

export default function App() {
  // let count = 0;

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            // console.log("🤔");
            console.log(count);
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            // console.log("🤔");
            console.log(count);
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
