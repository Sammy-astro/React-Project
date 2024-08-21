const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return state.filter((transaction) => transaction.id !== action.payload);
    default:
      return state;
    case "ADD_TRANSACTION":
      return [action.payload, ...state];
  }
};

export default AppReducer;
