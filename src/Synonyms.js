import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <p className="Similar">
        Similar:
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </p>
    );
  } else {
    return null;
  }
}
