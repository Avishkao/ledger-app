const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_USER":
      console.log("action", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "GET_USERS":
      return state;
    default:
      return state;
  }
};
