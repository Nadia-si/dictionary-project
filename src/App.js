import dictionary from "./dictionary.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={dictionary}
          className="App-image img-fluid"
          alt="dictionary"
        />
      </header>
    </div>
  );
}
