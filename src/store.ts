import { configureStore } from "@reduxjs/toolkit";
import carListReducer from "./reducer/carList";

const store = configureStore({
  reducer: {
    carList: carListReducer,
  },
});

export default store;
