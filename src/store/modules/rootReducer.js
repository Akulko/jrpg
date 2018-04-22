import { combineReducers } from "redux";
//import battleReducer from "./jrpg/reducers/battleReducer";
import mineReducer from "./jrpg/reducers/mineReducer";
import libraryReducer from "./jrpg/reducers/libraryReducer";
import heroReducer from "./jrpg/reducers/heroReducer";
import monsterReducer from "./jrpg/reducers/monsterReducer";
import logReducer from "./jrpg/reducers/logReducer";
//import homeReducer from "./jrpg/reducers/homeReducer";

export default combineReducers({
  hero: heroReducer,
  monster: monsterReducer,
  entries: logReducer,
  mine: mineReducer,
  library: libraryReducer
});
