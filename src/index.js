import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h3>Who lives in my Garage?</h3>
        <ol>
          <li><Car color="Purple" wheels='4' brand="Chevy"/></li>
          <p></p>
          <li><Car color="Blue" wheels='4' brand="Ford"/></li>
        </ol>
      </div>
    );
  }
}

const myelement = <Car brand="Ford" />;

ReactDOM.render(<Garage />, document.getElementById('root'));
