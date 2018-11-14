import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Notes from "./Notes";

//use grid-container to set the grid with css
export class SuitPage extends Component {
  render() {
    //grab the properties from the URL
    const match = this.props.match.params;
    //grab the props from the link that sent the suit data
    //to this page
    const suit = this.props.location.state;
    const pilots = suit.pilots;
    const shooting = suit.shooting;
    const melee = suit.melee;
    const special = suit.special;
    //Display the Suit, pilots, and movelist tables and notes
    return (
      <React.Fragment>
        <h1>{match.suitName}</h1>
        <h3> Pilots </h3>
        <Pilots pilots={pilots} />
        <h3> Ranged Attacks </h3>
        <Table striped="true" bordered="true" responsive="true">
          <Shooting shooting={shooting} />
        </Table>
        <Notes name={suit.name} />
      </React.Fragment>
    );
  }
}
//Import the list of pilots for display
const Pilots = ({ pilots }) => (
  <React.Fragment>
    {Object.keys(pilots).map(key => (
      <div key={key}>{pilots[key]}</div>
    ))}
  </React.Fragment>
);
//import and format the ranged attack data into a table
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
//TODO: import and format the ranged attack data into a table
const Melee = ({ melee }) => (
  <tbody>
    {Object.keys(melee).map(key => (
      <div key={key}>{melee[key].name}</div>
    ))}
  </tbody>
);
//TODO: import and format the ranged attack data into a table
const Special = ({ special }) => (
  <div>
    {Object.keys(special).map(key => (
      <div key={key}>{special[key].name}</div>
    ))}
  </div>
);

export default SuitPage;
