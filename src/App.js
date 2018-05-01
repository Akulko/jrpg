import React, { Component } from "react";
import store from "./store/createStore";
import { Provider } from "react-redux";
import LookUp from "./containers/locations/LookUp";
import BriefInfo from "./containers/BriefInfo";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <LookUp location={this.props.location} />
          <BriefInfo hero={this.props.hero} />
        </div>
      </Provider>
    );
  }
}

export default App;
