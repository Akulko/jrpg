import React, { Component } from "react";
import store from "./store/createStore";
import { Provider } from "react-redux";
import "./App.css";
import LookUp from "./containers/LookUp";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LookUp location={this.props.location} />
      </Provider>
    );
  }
}

export default App;
