import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Results.css";

export default function Results(props) {
  //console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <section>
          <h2>{props.result.word}</h2>
          <p className="Phonetic">{props.result.phonetic}</p>
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>
                {meaning.definition}
                <br />
                <Examples example={meaning.example} />
                <br />
                <Synonyms synonyms={meaning.synonyms} />
              </p>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
