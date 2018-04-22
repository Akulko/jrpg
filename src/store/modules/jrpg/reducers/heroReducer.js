const initialState = {
  name: "Alexander the Great",
  maxHp: 100,
  currentHp: 100,
  damage: 10,
  isDead: false,
  isWin: false,
  lastDamageTaken: 0,
  location: "battle",
  shmotki: {
    head: "шлем",
    body: "кираса",
    legs: "брюки"
  }
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "HERO_SET_HP":
      return { ...state, currentHp: payload.hp };
    case "HERO_SET_DEAD":
      return { ...state, isDead: payload.dead };
    case "HERO_SET_WIN":
      return { ...state, isWin: payload.win };
    default:
      return state;
  }
}

export default reducer;
