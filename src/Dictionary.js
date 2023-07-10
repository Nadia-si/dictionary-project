import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handelResponse(response) {
    setResults(response.data);
  }

  function search() {
    //Documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "c4b3dfaa8904f4of737ct5948a4098ce";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearch(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleSearch}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested word: love, peace, harmony, sunrise, yoga, wine...
          </div>
        </section>
        <Results result={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
