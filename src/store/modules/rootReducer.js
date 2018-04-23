import { combineReducers } from "redux";
import heroReducer from "./jrpg/reducers/hero";
import monsterReducer from "./jrpg/reducers/monster";
import logReducer from "./jrpg/reducers/log";

export default combineReducers({
  hero: heroReducer,
  monster: monsterReducer,
  entries: logReducer
});
