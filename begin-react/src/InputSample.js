import React, { useState } from "react";
function InputSample() {
  //   const [Name, setName] = useState("");
  //   const [Nick, setNick] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  //   새로운 객체를 만들어 그 객체에 변화를 주고 이를 상태로 사용해야한다.
  //   이것이 "불변성을 지킨다"고 할 수 있다.
  const { name, nickname } = inputs;

  //   const onChange = (e) => {
  //     const { value, name } = e.target;
  //     // 처음 들어온 값이 이름이니 이름이 name에 추출되고
  //     // value 객체 자체가 넘어온다
  //     console.log('name: '+ name);
  //     console.log('value: '+ value);

  //     setinputs({
  //       ...inputs,
  //       [name]: value,
  //     });
  //   };
  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    console.log(value);
    console.log(name);

    // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />

      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          이름(닉네임): {name} {nickname ? "(" + nickname + ")" : null}
        </b>
      </div>
    </div>
  );
}

export default InputSample;
