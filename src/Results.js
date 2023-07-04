import React from "react";

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
                {meaning.definition}
                <br />
                <em>{meaning.example}</em>
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
