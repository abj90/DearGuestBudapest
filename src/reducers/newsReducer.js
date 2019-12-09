export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TOP_HEADLINES":
      return action.payload.map((state, index) => {
        return { ...state, id: index };
      });
    default:
      return state;
  }
};
