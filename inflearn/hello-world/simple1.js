function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  //useState함수는 컴포넌트에 상태값을 추가할 때 사용한다.
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    //react 요소를 반환한다
    //ui를 표현하는 가장 작은 단위가 react요소
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(LikeButton), domContainer);
