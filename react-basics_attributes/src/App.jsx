import "./styles.css";

export default function App() {
  return <>{CreateArticle()}</>;
}

function CreateArticle() {
  return (
    <article className="article">
      <h2 className="article__title">A text of my choice</h2>
      <label htmlFor="myInput">Input data here:</label>
      <input id="myInput"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Borussia_Dortmund"
      ></a>
    </article>
  );
}
