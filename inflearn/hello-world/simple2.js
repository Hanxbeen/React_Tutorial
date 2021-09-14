function helloText() {
  const text = "hello world";
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "그냥 그렇다고.."),
    React.createElement("p", null, text)
  );
}

const domContainer2 = document.getElementById("root2");
ReactDOM.render(React.createElement(helloText), domContainer2);
