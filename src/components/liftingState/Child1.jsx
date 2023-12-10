import React, { useState } from "react";

export default function Child1(props) {
  const [input, setInput] = useState("");

  function onChange(e) {
    // console.log(`%c Child 1`, 'color: #2196f3')
    setInput(e.target.value)
    props.passValue(input)
  }

  return (
    <div className="child1-container child">
      <h3>Child 1</h3>
      <input type="text" onChange={(e) => onChange(e)} />
      {/* <button onClick={() => sendInputValue()}>SEND INPUT TO CHILD 2</button> */}
    </div>
  );
}
