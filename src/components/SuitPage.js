import React, { Component } from "react";

//use grid-container to set the grid with css
export class SuitPage extends Component {
  render() {
    const match = this.props.match.params;
    return (
      <div>
        <h3>I am the suitpage for {match.suit}</h3>
      </div>
    );
  }
}

export default SuitPage;
