import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car color="Purple" wheels='4'/>
      </div>
    );
  }
}

const myfirstelement = <h1>Hello React!</h1>
const mysecondelement = <h1>Hello React... AGAIN!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(<Garage />, document.getElementById('root3'));
