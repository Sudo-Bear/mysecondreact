import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wheels: this.props.wheels,
      color: this.props.color,
      brand: this.props.brand
    }
  }
  changeColor = () => {
    this.setState({color: "Blue"})
  }
  render() {
    return (
      <div>
        <ul>
          <li>Hi, I am a Car!</li>
          <li>I have {this.state.wheels} wheels</li>
          <li>I am painted {this.state.color}</li>
          <li>Model: {this.state.brand}</li>
        </ul>
        <button 
        type="button"
        onClick={this.changeColor}
        >Make Blue</button>
      </div>
    )
  }
}

export default Car;