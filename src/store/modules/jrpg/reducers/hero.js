const initialState = {
  name: "Alexander the Great",
  maxHp: 100,
  currentHp: 100,
  damage: 10,
  mana: 20,
  maxMana: 20,
  isDead: false,
  isWin: false,
  heroClass: "Mage",
  gold: 0,
  level: 1,
  strength: 3,
  agility: 3,
  intelligence: 5,
  lastDamageTaken: 0,
  location: "startscreen",
  shmotki: {
    head: "шлем",
    body: "кираса",
    legs: "брюки"
  }
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "HERO_CREATE":
      return { ...state, name: payload.name, heroClass: payload.heroClass, location: "home" };
    case "HERO_CHANGE_LOCATION":
      return { ...state, location: payload.location };
    case "HERO_SET_HP":
      return { ...state, currentHp: payload.hp };
    case "HERO_SET_DEAD":
      return { ...state, isDead: payload.dead };
    case "HERO_SET_WIN":
      return { ...state, isWin: payload.win };
    case "HERO_MINE":
      return { ...state, gold: state.gold + payload.gold };
    case "HERO_MANA_REGEN":
      return { ...state, mana: state.mana + payload.mana };
    case "HERO_SET_CLASS":
      return {
        ...state,
        heroClass: payload.heroClass,
        maxHp: payload.maxHp,
        damage: payload.damage,
        strength: payload.strength,
        agility: payload.agility,
        intelligence: payload.intelligence,
        mana: payload.mana
      };
    default:
      return state;
  }
}

export default reducer;
