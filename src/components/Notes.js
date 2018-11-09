import React, { Component } from "react";

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

  onSubmit = async event => {
    event.preventDefault();
    const { noteToAdd } = this.state;

    try {
      await db.doAddNote(this.props.name, noteToAdd);
      this.setState({ noteToAdd: null });
    } catch (error) {
      console.log(error);
    }
    // db.doAddNote(this.props.name, noteToAdd)
    //   .then(() => {
    //     this.setState({ noteToAdd: null });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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
  render() {
    const note = this.state;
    const isInvalid = this.noteToAdd === null || "";
    return (
      <div>
        <h3>Notes</h3>

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
