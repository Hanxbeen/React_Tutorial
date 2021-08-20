import React, { useState } from "react";
function InputSample() {
  const [Value, setValue] = useState(0);
  const resetBtn = () => {
    console.log("초기화");
    document.getElementById("txt").textContent = 0;
    setValue(0);
  };
  const realtimeChange = (e) => {
    console.log("값 변동");
    setValue(e.target.value);
  };
  return (
    <div>
      <input id="txt" onChange={realtimeChange} value={Value} />
      <button onClick={resetBtn}>초기화</button>
      <div>
        <b>값: {Value}</b>
      </div>
    </div>
  );
}

export default InputSample;
