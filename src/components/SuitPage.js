import React, { Component } from "react";

//use grid-container to set the grid with css
export class SuitPage extends Component {
  render() {
    return (
      <div>
        <h3>I am the suitpage for {this.props.match.params.suit}</h3>
      </div>
    );
  }
}

export default SuitPage;
