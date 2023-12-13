import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfmobiles: 50,
};

const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    orderMobile: (state, action) => {
      state.numberOfmobiles--;
    },
    restockMobile: (state, action) => {
      state.numberOfmobiles = state.numberOfmobiles + parseInt(action.payload);
    },
  },
});

export default mobileSlice.reducer;

export const { orderMobile, restockMobile } = mobileSlice.actions;
