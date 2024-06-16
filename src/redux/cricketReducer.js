const initialCartState = {
  BATS: [],
};

export const cricketReducer = (state = initialCartState, action) => {
  console.log("cricket", action);
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        BATS: [...state.BATS, action.payload],
      };
    case "GET_USERS":
      return state;
    default:
      return state;
  }
};
