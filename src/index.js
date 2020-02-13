import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>
  }
}

const myfirstelement = <h1>Hello React!</h1>
const mysecondelement = <h1>Hello React... AGAIN!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(mysecondelement, document.getElementById('root2'));
ReactDOM.render(<Car />, document.getElementById('root3'));
