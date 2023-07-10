import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Results(props) {
  //console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>
                <strong>Definition: </strong>
                {meaning.definition}
                <br />
                <Examples example={meaning.example} />
                <br />
                <Synonyms synonyms={meaning.synonyms} />
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
