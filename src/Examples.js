import React from "react";

export default function Examples(props) {
  if (props.example) {
    return <em className="Examples text-muted mt-5">{props.example}</em>;
  } else {
    return null;
  }
}
