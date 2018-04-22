import { heroHitLogs, endBattleLogs } from "../logs/heroHitLogs";
import { monsterHitLogs } from "../logs/monsterHitLogs";
import { monsters } from "../monsters";

const initialState = {
  isNewMonsterAvailable: false,
  entries: []
};

function getNewMonster(monsters) {
  const MonsterNumber = Math.floor(Math.random() * monsters.length);
  const Monster = monsters[MonsterNumber];
  return Monster;
}

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ATTACK":
      return attack(state);

    case "CLEAR_LOG":
      return { ...state, entries: [] };
    case "ENTER_LOCATION":
      return { ...state, location: payload.location };
    case "NEW_MONSTER":
      return { ...state, hero: { ...state.hero, isWin: false }, monster: getNewMonster(monsters) };
    default:
      return state;
  }
}

export default reducer;
