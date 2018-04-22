import React, { Component } from "react";
import store from "./store/createStore";
import { Provider } from "react-redux";
import "./App.css";
import BattleField from "./containers/BattleField";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BattleField />
      </Provider>
    );
  }
}

export default App;
