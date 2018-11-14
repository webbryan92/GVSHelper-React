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
  //import the suitlist on page load/update
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
//Iterate through the list of suits from firebase and create a suit
//list item for each.
const TierList = ({ suits }) => (
  <div>
    <h2>List of Suits</h2>
    {Object.keys(suits).map(key => (
      <div key={key}>
        <SuitListItem suit={suits[key]} />
      </div>
    ))}
  </div>
);

export default TierPage;
