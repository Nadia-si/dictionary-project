import dictionary from "./dictionary.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={dictionary}
            className="App-image img-fluid"
            alt="dictionary"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Nadia Simbi</small>
        </footer>
      </div>
    </div>
  );
}
