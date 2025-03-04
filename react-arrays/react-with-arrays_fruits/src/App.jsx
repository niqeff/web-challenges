import Card from "./components/Card";

export default function App() {
  const fruits = [
    { name: "🍌 banana", id: crypto.randomUUID(), color: "yellow" },
    { name: "🥝 kiwi", id: crypto.randomUUID(), color: "green" },
    { name: "🍉 mellon", id: crypto.randomUUID(), color: "red" },
    { name: "🍎 apple", id: crypto.randomUUID(), color: "red" },
    { name: "🫐 blueberry", id: crypto.randomUUID(), color: "blue" },
  ];

  console.log(fruits);

  return (
    <div className="app">
      <ul>
        {fruits.map(({ id, name, color }) => (
          <Card key={id} name={name} color={color} />
        ))}
      </ul>
    </div>
  );
}
