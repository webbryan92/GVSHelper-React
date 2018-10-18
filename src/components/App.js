import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "./Context";

import Header from "./Header";
import Home from "./Home";
import TierPage from "./TierPage";
import SuitPage from "./SuitPage";

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/suits/:cost" component={TierPage} />
              <Route path="/suits/:cost/:suitName" component={SuitPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

//look into async await
