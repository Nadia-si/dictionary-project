import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    //console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function search() {
    //Documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "c4b3dfaa8904f4of737ct5948a4098ce";
    let wordApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(wordApiUrl).then(handleDictionaryResponse);

    //Documentation: https://www.shecodes.io/learn/apis/images
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
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
              placeholder="Search for a word"
              class="form-control"
              autoComplete="off"
            />
          </form>
          <div className="hint">i.e. peace, coding, yoga...</div>
        </section>
        <Results result={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
