import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // * BrowserRouter 불러오기
import "./index.css";
import App from "./App";
import 'bootstrap/dis/css/bootstrap.min.css';
//import * as serviceWorker from './serviceWorker';

// IE9의 경우
// import 'react-app-polyfill/ie9';
// import 'react-app-polyfill/stable';

// IE11의 경우
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// * App 을 BrowserRouter 로 감싸기
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//serviceWorker.unregister();
