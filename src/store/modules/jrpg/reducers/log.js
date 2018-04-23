const initialState = [];

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOG_ADD_ENTRY":
      return [...state, payload.log];
    case "LOG_CLEAR":
      return [];
    default:
      return state;
  }
}

export default reducer;
