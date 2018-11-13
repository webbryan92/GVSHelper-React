import React, { Component } from "react";

import Note from "./Note";

import { db } from "../firebase";

export default class NoteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  //toggle the editing state
  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  render() {
    const notes = this.props.notes;
    return (
      <div>
        {Object.keys(notes).map(key => (
          <div key={key}>
            {this.state.isEditing ? (
              <Note
                keyID={key}
                note={notes[key].note}
                toggleEdit={() => this.toggleEditing()}
              />
            ) : (
              <React.Fragment>
                <p>{notes[key].note}</p>
                <button onClick={() => db.removeNote(key)}>Delete</button>
                <button onClick={() => this.toggleEditing()}>Update</button>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    );
  }
}
