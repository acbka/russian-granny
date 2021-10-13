import { createSlice } from "@reduxjs/toolkit";
import { setType } from "common/types";

type initialStateType = {
  sets: setType[];
};

const initialState: initialStateType = {
  sets: [],
};

const setsSlice = createSlice({
  name: "sets",
  initialState,
  reducers: {
    setSets: (state, { payload }) => {
      state.sets = payload;
    },
  },
});

export const { setSets } = setsSlice.actions;

export default setsSlice.reducer;
