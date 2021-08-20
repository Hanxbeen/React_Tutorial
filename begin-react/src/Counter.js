import { useState } from "react";
import React from "react";

function Counter() {
  const [number, setnumber] = useState(0);
  const onIncrease = () => {
    console.log("+");
    // setnumber(number + 1);
    setnumber((plusNumber) => plusNumber + 1);
  };
  const onDecrease = () => {
    console.log("-");
    // setnumber(number - 1);
    setnumber((minusNumber) => minusNumber - 1);
  };
  return (
    <div>
      <h1 id="root">{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
