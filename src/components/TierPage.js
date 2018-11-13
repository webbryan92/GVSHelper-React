import React, { Component } from "react";

import SuitListItem from "./SuitListItem";
import { db } from "../firebase";
import { Consumer } from "./Context";

//use grid-container to set the grid with css
export class TierPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suits: null
    };
  }

  componentDidMount() {
    db.onceGetTier(this.props.match.params.cost).then(snapshot =>
      this.setState({ suits: snapshot.val() })
    );
  }

  componentDidUpdate() {
    db.onceGetTier(this.props.match.params.cost).then(snapshot =>
      this.setState({ suits: snapshot.val() })
    );
  }

  render() {
    const match = this.props.match.params;
    const suits = this.state.suits;
    if (suits && suits.length) {
      return (
        <Consumer>
          {value => {
            //const { message, contacts } = value;
            //console.log(message);
            return (
              <div className="grid-container">
                <h2>I am the {match.cost} Cost tierpage</h2>

                {!!suits && <TierList suits={suits} />}
              </div>
            );
          }}
        </Consumer>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

const TierList = ({ suits }) => (
  <div>
    <h2>List of Suits</h2>
    <p>Imported from Firebase</p>
    {Object.keys(suits).map(key => (
      <div key={key}>
        <SuitListItem suit={suits[key]} />
        {suits[key].name}
      </div>
    ))}
  </div>
);

export default TierPage;

/*{contacts.map(contact => (
  <h3>{contact.name}</h3>
))}*/
