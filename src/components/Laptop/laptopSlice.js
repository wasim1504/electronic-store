import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOflaptops: 50,
};

const laptopSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {
    orderLaptop: (state, action) => {
      state.numberOflaptops--;
    },
    restockLaptop: (state, action) => {
      state.numberOflaptops = state.numberOflaptops + parseInt(action.payload);
    },
  },
});

export default laptopSlice.reducer;

export const { orderLaptop, restockLaptop } = laptopSlice.actions;
