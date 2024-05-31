import { configureStore } from "@reduxjs/toolkit";
import mockDataReducer from "./controllers/mockDataController";

export default configureStore({
  reducer: {
    mockData: mockDataReducer,
  },
});
