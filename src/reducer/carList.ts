import { createSlice } from "@reduxjs/toolkit";
import { CarInfo } from "../types";
// import { dummyData } from "../constants";

interface CarListState {
  carList: CarInfo[];
}

const initialState: CarListState = {
  carList: [],
};

const carListSlice = createSlice({
  name: "carList",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.carList.push(action.payload);
    },
    updateCar: (state, action) => {
      const updateRecordId = state.carList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.carList[updateRecordId] = action.payload;
    },
  },
});

export const { addCar, updateCar } = carListSlice.actions;

export default carListSlice.reducer;
