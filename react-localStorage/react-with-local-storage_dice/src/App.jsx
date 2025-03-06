import useLocalStorageState from "use-local-storage-state";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import { getD6Roll } from "./utils";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  const handleRoll = () => {
    console.log("Rolled");
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls[0];

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue?.value} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

// export default function App() {
//   const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

//   const handleRoll = () => {
//     setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
//   };

//   const latestRoll = rolls[0];

//   return (
//     <div className="app">
//       <main className="app__main">
//         <D6Button value={latestRoll?.value} onRoll={handleRoll} />
//       </main>
//       <aside className="app__aside">
//         <History rolls={rolls} />
//       </aside>
//     </div>
//   );
// }
