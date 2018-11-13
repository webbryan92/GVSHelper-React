import React, { Component } from "react";

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

  render() {
    const isInvalid = this.noteToAdd === null || "";
    return (
      <div>
        <h3>Notes</h3>
        {this.state.notes != null && <NoteList notes={this.state.notes} />}

        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.noteToAdd}
            onChange={event =>
              this.setState(byPropKey("noteToAdd", event.target.value))
            }
            type="text"
            placeholder="Insert Notes Here"
          />
          <button disabled={isInvalid} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

// const NoteList = ({ notes, isEditing }) => (
//   <div>
//     {Object.keys(notes).map(key => (
//       <div key={key}>
//         <p>{notes[key].note}</p>
//         <button onClick={() => db.removeNote(key)}>x</button>
//       </div>
//     ))}
//   </div>
// );

//
