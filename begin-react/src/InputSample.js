import React, { useState } from "react";
function InputSample() {
  const [Name, setName] = useState("");
  const [Nick, setNick] = useState("");
  const resetBtn = () => {
    console.log("초기화");
    document.getElementById("name").textContent = "";
    setName("");
    setNick("");
  };
  const nameChange = (e) => {
    console.log("이름 변경");
    setName(e.target.value);
  };
  const nickChange = (e) => {
    console.log("닉네임 변경");
    setNick(e.target.value);
  };
  return (
    <div>
      <input id="name" placeholder="이름" onChange={nameChange} value={Name} />
      <input
        id="nick"
        placeholder="닉네임"
        onChange={nickChange}
        value={Nick}
      />

      <button onClick={resetBtn}>초기화</button>
      <div>
        <b>
          이름(닉네임): {Name} {Nick ? "(" + Nick + ")" : null}
        </b>
      </div>
    </div>
  );
}

export default InputSample;
