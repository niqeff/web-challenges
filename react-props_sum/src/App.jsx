export default function App() {
  return <RenderSum valueA={11} valueB={33} />;
}

function RenderSum({ valueA, valueB }) {
  return (
    <div>
      Calculated: {valueA} + {valueB} = {valueA + valueB}
    </div>
  );
}
