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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML = 
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML = 
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
ReactDOM.render(<Header favcol="Green"/>, document.getElementById('root'));
