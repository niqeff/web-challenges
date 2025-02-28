export default function App() {
  return <Greeting name="Roland" />;
}

function Greeting({ name }) {
  return <h1>Say hello to {name}</h1>;
}
