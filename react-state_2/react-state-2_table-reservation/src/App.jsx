import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAdding() {
    setPeople(people + 1);
  }

  function handleSubtraction() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        people={people}
        onAdding={handleAdding}
        onSubtraction={handleSubtraction}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
