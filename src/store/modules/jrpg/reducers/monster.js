const initialState = {
  name: "Onotole",
  maxHp: 100,
  currentHp: 100,
  damage: 5,
  lastDamageTaken: 0
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "MONSTER_SET_HP":
      return { ...state, currentHp: payload.hp };
    default:
      return state;
  }
}

export default reducer;
