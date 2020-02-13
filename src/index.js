import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

function shoot() {
  alert("Great Shot!")
}

const thing = (
  <button onClick={shoot}>Shoot</button>
)

ReactDOM.render(thing, document.getElementById("root"));
