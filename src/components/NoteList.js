import React, { Component } from "react";

import Note from "./Note";

export default class NoteList extends Component {
  render() {
    const notes = this.props.notes;
    return (
      <div>
        {Object.keys(notes).map(key => (
          <div key={key}>
            <Note keyID={key} note={notes[key].note} />
          </div>
        ))}
      </div>
    );
  }
}
