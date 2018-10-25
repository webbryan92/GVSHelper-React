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
  <tbody>
    <tr>
      <th />
      <th />
      <th>Name</th>
      <th>Ammo</th>
      <th>Damage</th>
      <th>Cancels</th>
    </tr>
    <div>
      {Object.keys(shooting).map(key => (
        <div key={key}>
          <tr>
            <th>{shooting[key].type}</th>
            <td>{shooting[key].name}</td>
            <td>{shooting[key].ammo}</td>
            <td>{shooting[key].damage}</td>
            <td>{shooting[key].cancels}</td>
          </tr>
          <tr>
            <th colspan="2">Cooldown</th>
            <td>{shooting[key].cooldown}</td>
            <th>Down Value</th>
            <td colspan="2">{shooting[key]["down value"]}</td>
          </tr>
          <tr>
            <th colspan="2" align-left>
              Notes
            </th>
            <td>*****</td>
            <td colspan="3">{shooting[key].notes}</td>
          </tr>
        </div>
      ))}
    </div>
  </tbody>
);
const Melee = ({ melee }) => (
  <div>
    {Object.keys(melee).map(key => (
      <div key={key}>{melee[key].name}</div>
    ))}
  </div>
);
const Special = ({ special }) => (
  <div>
    {Object.keys(special).map(key => (
      <div key={key}>{special[key].name}</div>
    ))}
  </div>
);

export default SuitPage;
