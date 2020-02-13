import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

class Football extends React.Component {
  shoot() {
    alert("Great Shot!")
  }
  render() {
    return (
      <button onClick={this.shoot}>Shoot</button>
    )
  }
}

ReactDOM.render(<Football />, document.getElementById("root"));
