import React from "react";
import BattleField from "../containers/BattleField";
import Home from "../containers/Home";
import Mine from "../containers/Mine";
//import Library from "../containersLibrary";
import StartScreen from "../containers/StartScreen";

const LookUp = {
  battle: <BattleField />,
  home: <Home />,
  mine: <Mine />,
  //library: <Library />,
  startscreen: <StartScreen />
};

const CurrentLocation = ({ location }) => {
  return LookUp[location];
};

export default CurrentLocation;
