import dictionary from "./dictionary.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading text-center">
            <em>Dictionary</em>
          </h1>
          <img
            src={dictionary}
            className="App-image img-fluid"
            alt="dictionary"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Nadia Simbi and is open-sourced on{" "}
            <a
              href="https://github.com/Nadia-si/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://chipper-genie-2b71d0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
