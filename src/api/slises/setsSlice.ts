import { createSlice } from "@reduxjs/toolkit";
import { Set } from "common/types";

type initialStateType = {
  sets: Set[];
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
    updateSets: (state, { payload }) => {
      const index = state.sets.findIndex((item) => item.name === payload.name);
      state.sets.splice(index, 1, payload);
    },
  },
});

export const { setSets, updateSets } = setsSlice.actions;

export default setsSlice.reducer;
