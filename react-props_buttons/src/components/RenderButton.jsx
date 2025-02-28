export default function RenderButton({ color, isDisabled, text, style }) {
  return (
    <button disabled={isDisabled} style={style}>
      {text}
    </button>
  );
}
