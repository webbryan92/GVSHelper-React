import React, { Component } from "react";

const Context = React.createContext();

//Context API class(currently unused at this stage of development)
export class Provider extends Component {
  state = {
    message: "hi",
    suit: {}
  };
  async componentDidMount() {
    try {
      //dummy data
      //add a dispatcher to my state and reducer
      /*const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      this.setState({ contacts: response.data });*/
      //console.log(this.state.contacts);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

//rcc
