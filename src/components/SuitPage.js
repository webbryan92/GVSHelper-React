import React, { Component } from "react";

//use grid-container to set the grid with css
export class SuitPage extends Component {
  render() {
    const match = this.props.match.params;
    const pilots = this.props.location.state.pilots;
    const shooting = this.props.location.state.shooting;
    const melee = this.props.location.state.melee;
    const special = this.props.location.state.special;

    return (
      <div>
        <h3>I am the suitpage for {match.suitName}</h3>

        {Object.keys(pilots).map(key => (
          <div key={key}>{pilots}</div>
        ))}
      </div>
    );
  }
}

export default SuitPage;
