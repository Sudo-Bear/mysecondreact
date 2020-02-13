import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor() {
    super()
    this.state = {
      wheels: 4
    }
  }
  render() {
    return (
      <div>
        <h2>Hi, I am a Car!</h2>
        <h3>and I have {this.state.wheels} wheels</h3>
      </div>
    )
  }
}

function Vehicle() {
  return <h2>Hi, I am also a Vehicle!</h2>
}

const myfirstelement = <h1>Hello React!</h1>
const mysecondelement = <h1>Hello React... AGAIN!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(Vehicle(), document.getElementById('root2'));
ReactDOM.render(<Car />, document.getElementById('root3'));
