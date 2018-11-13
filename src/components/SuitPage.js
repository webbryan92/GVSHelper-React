import React, { Component } from "react";
import Notes from "./Notes";

//use grid-container to set the grid with css
export class SuitPage extends Component {
  render() {
    const match = this.props.match.params;
    const suit = this.props.location.state;
    const pilots = suit.pilots;
    const shooting = suit.shooting;
    const melee = suit.melee;
    const special = suit.special;
    return (
      <React.Fragment>
        <h2>I am the suitpage for {match.suitName}</h2>
        <h3> Pilots </h3>
        <Pilots pilots={pilots} />
        <h3> Ranged Attacks </h3>
        <table>
          <Shooting shooting={shooting} />
        </table>
        <Notes name={suit.name} />
      </React.Fragment>
    );
  }
}

const Pilots = ({ pilots }) => (
  <React.Fragment>
    {Object.keys(pilots).map(key => (
      <div key={key}>{pilots[key]}</div>
    ))}
  </React.Fragment>
);
const Shooting = ({ shooting }) => (
  <tbody>
    <tr>
      <th />
      <th>Name</th>
      <th>Ammo</th>
      <th>Damage</th>
      <th>Cancels</th>
    </tr>
    {Object.keys(shooting).map(key => (
      <React.Fragment key={key}>
        <tr>
          <th>{shooting[key].type}</th>
          <td>{shooting[key].name}</td>
          <td>{shooting[key].ammo}</td>
          <td>{shooting[key].damage}</td>
          <td>{shooting[key].cancels}</td>
        </tr>
        <tr>
          <th colSpan="2">Cooldown</th>
          <td>{shooting[key].cooldown}</td>
          <th>Down Value</th>
          <td colSpan="2">{shooting[key]["down value"]}</td>
        </tr>
        <tr>
          <th colSpan="2" align-left>
            Notes
          </th>
          <td>*****</td>
          <td colSpan="3">{shooting[key].notes}</td>
        </tr>
      </React.Fragment>
    ))}
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
