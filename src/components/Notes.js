import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";

import NoteList from "./NoteList";

import { db } from "../firebase";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

export default class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: null,
      noteToAdd: ""
    };
  }
  //Create a new note entry in the database
  onSubmit = event => {
    event.preventDefault();
    const { noteToAdd } = this.state;

    try {
      db.doAddNote(this.props.name, noteToAdd);
      this.setState({ noteToAdd: "" });
    } catch (error) {
      console.log(error);
    }
  };
  //Load the notes from the database on component load or update
  componentWillMount() {
    const name = this.props.name;
    try {
      db.onceGetNotes(name).then(snapshot =>
        this.setState({ notes: snapshot.val() })
      );
    } catch (error) {
      this.setState({ notes: null });
    }
  }
  componentWillUpdate() {
    const name = this.props.name;
    console.log("hello");
    try {
      db.onceGetNotes(name).then(snapshot =>
        this.setState({ notes: snapshot.val() })
      );
    } catch (error) {
      this.setState({ notes: null });
    }
  }
  //List the notes if there are any then display a form to add new notes
  render() {
    const isInvalid = this.noteToAdd === null || "";
    return (
      <div>
        <h3>Notes</h3>
        {this.state.notes != null && <NoteList notes={this.state.notes} />}

        <form onSubmit={this.onSubmit}>
          <FormControl
            value={this.state.noteToAdd}
            onChange={event =>
              this.setState(byPropKey("noteToAdd", event.target.value))
            }
            type="text"
            placeholder="Insert Notes Here"
          />
          <Button disabled={isInvalid} type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
