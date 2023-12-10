import React from "react";
import "./liftingState.css";

export default function Child2(props) {
  console.log(`%c Child 2`, "color: #2196f3");

  return (
    <div className="child1-container child">
      <h3>Child 2</h3>
      <p>{props.sendValue}</p>
     
    </div>
  );
}
