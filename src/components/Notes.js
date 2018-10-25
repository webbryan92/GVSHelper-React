import React, { Component } from "react";

export default class Notes extends Component {
  render() {
    const { note } = this.state;
    return (
      <div>
        <h3>Notes</h3>
        <p>insert notes here</p>

        <form>
          <input
            value={this.state.note}
            onChange={event =>
              this.setState(byPropKey("note", event.target.value))
            }
            type="text"
            placeholder="Insert Notes Here"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
