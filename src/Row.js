import React from "react";

const Row = props =>
  <div className={`row`}>
    {props.children}
  </div>;

export default Row;

  // <div className={`row${props.fluid ? "-fluid" : ""}`}>
