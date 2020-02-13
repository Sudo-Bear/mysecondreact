import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wheels: this.props.wheels,
      color: this.props.color
    }
  }
  render() {
    return (
      <ol>
        <li>Hi, I am a Car!</li>
        <li>I have {this.state.wheels} wheels</li>
        <li>I am painted {this.state.color}</li>
      </ol>
    )
  }
}

export default Car;