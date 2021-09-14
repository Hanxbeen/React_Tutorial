function helloText() {
  const text = "hello world";
  return React.createElement("p", text);
}

const domContainer2 = document.getElementById("root2");
ReactDOM.render(React.createElement(helloText), domContainer2);
