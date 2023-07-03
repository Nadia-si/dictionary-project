import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handelResponse(response) {
    //console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    //Documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "c4b3dfaa8904f4of737ct5948a4098ce";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handelResponse);
  }

  function handleSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleSearch} />
      </form>
      <Results result={results} />
    </div>
  );
}
