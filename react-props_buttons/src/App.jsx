import RenderButton from "./components/RenderButton.jsx";

export default function App() {
  return (
    <RenderButton
      color=" #ec33ff "
      style={{ backgroundColor: "red", border: "1px solid green" }}
      isDisabled={false}
      text="Steht auf dem Knopf drauf!"
    />
  );
}
