import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
  shoot = a => {
    alert(a)
  }
  render() {
    return (
      <button onClick={this.shoot.bind(this, "Goal!")}>Shoot!</button>
    )
  }
}

ReactDOM.render(<Football />, document.getElementById("root"));
