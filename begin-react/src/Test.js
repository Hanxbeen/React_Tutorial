import React from "react";
function test() {
  let name;
  let arr = [(name = 10), "2", "3"];
  let value = ["조한빈", "조조"];
  let spread = { ...arr };
  [name] = value;
  const click = () => {
    console.log("/////////////////");
    console.log(arr);

    console.log(spread);
    console.log(name);
  };
  return (
    <div>
      <button onClick={click}>스프레드 사용법</button>
    </div>
  );
}

export default test;
