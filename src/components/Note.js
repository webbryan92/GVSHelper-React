import React, { Component } from "react";

import { db } from "../firebase";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteEdit: ""
    };
  }

  componentDidMount() {
    this.setState({ noteEdit: this.props.note });
  }
  onSubmit = event => {
    event.preventDefault();
    const { noteEdit } = this.state;

    try {
      db.doUpdateNote(this.props.keyID, noteEdit);
      this.setState({ noteEdit: "" });
      this.props.toggleEdit();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.noteEdit}
            onChange={event =>
              this.setState(byPropKey("noteEdit", event.target.value))
            }
            type="text"
            placeholder={this.props.note}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}
