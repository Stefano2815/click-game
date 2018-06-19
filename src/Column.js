import React from "react";

const Column = props => {
  return (
    <div className={`col-md-2`}>
      {props.children}
    </div>
  );
};

export default Column;
