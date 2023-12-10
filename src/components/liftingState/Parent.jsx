import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import "./liftingState.css";

export default function Parent() {
  console.log(`%c Parent`, "color: #2196f3");

  const [child1Value, setChild1Value] = useState("");

  
 function inputName(text){
  setChild1Value(text)
 }

  return (
    <div className="parent-container">
      <h3>App.js</h3>
      <Child1 passValue={inputName} />
      <Child2 sendValue={555}/>
    </div>
  );
}
