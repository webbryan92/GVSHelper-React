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
        <h2>I am the suitpage for {match.suitName}</h2>

        <h3> Pilots </h3>
        <Pilots pilots={pilots} />

        <h3> Ranged Attacks </h3>
        <Shooting shooting={shooting} />
      </div>
    );
  }
}

const Pilots = ({ pilots }) => (
  <div>
    {Object.keys(pilots).map(key => (
      <div key={key}>{pilots[key]}</div>
    ))}
  </div>
);
const Shooting = ({ shooting }) => (
  <div>
    {Object.keys(shooting).map(key => (
      <div key={key}>{shooting[key].name}</div>
    ))}
  </div>
);

export default SuitPage;
