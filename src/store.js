import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/userReducer";
import { cricketReducer } from "./redux/cricketReducer";

export default configureStore({
  reducer: {
    users: userReducer,
    cricket: cricketReducer,
  },
});
