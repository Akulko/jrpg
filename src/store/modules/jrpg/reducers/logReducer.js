const initialState = [];

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_LOG_ENTRY":
      return [...state, payload.log];
    case "CLEAR_LOG":
      return [];
    default:
      return state;
  }
}

export default reducer;
