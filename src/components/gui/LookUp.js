import React from "react";
import BattleField from "../../containers/locations/BattleField";
import Home from "../../containers/locations/Home";
import Mine from "../../containers/locations/Mine";
import Library from "../../containers/locations/Library";
import StartScreen from "../../containers/locations/StartScreen";

const LookUp = {
  battle: <BattleField />,
  home: <Home />,
  mine: <Mine />,
  library: <Library />,
  startscreen: <StartScreen />
};

const CurrentLocation = ({ location }) => {
  return LookUp[location];
};

export default CurrentLocation;
