import "./styles.css";

export default function App() {
  return <div>{HelloWorldArticle()}</div>;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World again!</h1>
      <p>Lorem Ipsum blablabla</p>
    </article>
  );
}
