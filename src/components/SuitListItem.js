import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//use grid-container to set the grid with css
export class SuitListItem extends Component {
  render() {
    const props = this.props;
    //Creates a link with properties to the individual suit pages
    const newTo = {
      pathname: `/suits/${props.suit.cost}/${props.suit.name}`,
      state: props.suit
    };
    return (
      <div>
        <Link to={newTo}>
          <Button>{props.suit.name}</Button>
        </Link>
      </div>
    );
  }
}

export default SuitListItem;
