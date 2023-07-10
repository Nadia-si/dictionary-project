import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <em>
        <strong>Example: </strong>
        {props.example}
      </em>
    );
  } else {
    return null;
  }
}
