import React, { Component } from "react";
import { Link } from "react-router-dom";

//use grid-container to set the grid with css
export class SuitListItem extends Component {
  render() {
    const props = this.props;
    const newTo = {
      pathname: `/suits/${props.suit.cost}/${props.suit.name}`,
      state: props.suit
    };
    return (
      <div>
        <Link to={newTo}>I am the Suititem</Link>
      </div>
    );
  }
}

export default SuitListItem;
