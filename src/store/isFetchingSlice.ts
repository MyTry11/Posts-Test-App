import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const isFetchingSlice = createSlice({
  name: "isFetching",
  initialState,
  reducers: {
    setIsFetching: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsFetching } = isFetchingSlice.actions;

export default isFetchingSlice.reducer;
