import React, { Component } from "react";

import SuitListItem from "./SuitListItem";
import { Consumer } from "./Context";

//use grid-container to set the grid with css
export class TierPage extends Component {
  render() {
    const match = this.props.match.params;
    return (
      <Consumer>
        {value => {
          const { message, contacts } = value;
          console.log(message);
          return (
            <div className="grid-container">
              <h2>I am the {match.cost} Cost tierpage</h2>
              <SuitListItem cost={match.cost} />
              <h3>I am the message: {message} </h3>

              {contacts.map(contact => (
                <h3>{contact.name}</h3>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default TierPage;
