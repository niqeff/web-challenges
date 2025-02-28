export default function App() {
  return <Smiley isHappy={false} />;
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? <span>😁</span> : <span>😒</span>}</h1>;
}
