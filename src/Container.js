import React from "react";

const Container = props =>
  <div className={`container col-md-12`}>
    {props.children}
  </div>;

export default Container;
