import React from "react";
import "./Examples.css";

export default function Examples(props) {
  if (props.example) {
    return <p className="Examples">{props.example}</p>;
  } else {
    return null;
  }
}
