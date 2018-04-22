function reducer(state = {}, action) {
  switch (action.type) {
    case "ENTER_LOCATION":
      return { ...state, location: action.payload.location };
    default:
      return state;
  }
}

export default reducer;
