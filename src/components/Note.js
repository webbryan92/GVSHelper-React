import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import { db } from "../firebase";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      noteEdit: ""
    };
  }
  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing });
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
      this.toggleEditing();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        {this.state.isEditing ? (
          <form onSubmit={this.onSubmit}>
            <FormControl
              value={this.state.noteEdit}
              onChange={event =>
                this.setState(byPropKey("noteEdit", event.target.value))
              }
              type="text"
              placeholder={this.props.note}
            />
            <Button type="submit">Update</Button>
          </form>
        ) : (
          <React.Fragment>
            <p>{this.props.note}</p>
            <Button onClick={() => db.removeNote(this.props.keyID)}>
              Delete
            </Button>
            <Button onClick={() => this.toggleEditing()}>Update</Button>
          </React.Fragment>
        )}
      </div>
    );
  }
}
