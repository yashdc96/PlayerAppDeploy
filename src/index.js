import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <div>
  <React.StrictMode>
     <App />
  </React.StrictMode>
  </div>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// document.getElementById("my").innerHTML="HELLLLLLOOOO";
// var myNewParagraph = document.createElement("p");
// document.getElementById("he").innerHTML="<h1>MYALLLLLLL</h1>"
// myNewParagraph.innerHTML = "This is a paragraph";
reportWebVitals();
