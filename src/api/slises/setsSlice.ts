import { createSlice } from "@reduxjs/toolkit";
import { getSets } from "api/requests/getSets";
import { SetType } from "common/types";

type initialStateType = {
  sets: SetType[];
};

const initialState: initialStateType = {
  sets: [],
};

const setsSlice = createSlice({
  name: "sets",
  initialState,
  reducers: {
    updateSets: (state, { payload }) => {
      const index = state.sets.findIndex((item) => item.name === payload.name);
      state.sets.splice(index, 1, payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSets.fulfilled, (state, { payload }) => {
      state.sets = payload;
    });
  },
});

export const { updateSets } = setsSlice.actions;
export default setsSlice.reducer;
