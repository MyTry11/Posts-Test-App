import { createSlice } from "@reduxjs/toolkit";

interface InState {
  value: number;
}

const initialState: InState = {
  value: 1,
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage: (state: InState) => {
      state.value = state.value + 1;
    },
    randomActionCurrent: (state) => {
      console.log("randomActionCurrent");
    },
  },
});

export const { setCurrentPage, randomActionCurrent } = currentPageSlice.actions;

export default currentPageSlice.reducer;
