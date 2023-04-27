import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get } from "firebase/database";
import { dbRef } from "../firebase/firebase";

export const getDishes = createAsyncThunk("dishes/dishes", async () => {
  const response = await get(child(dbRef, "dishes"));
  return response.val();
});
