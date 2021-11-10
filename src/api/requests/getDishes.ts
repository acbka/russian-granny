import { child, get } from "firebase/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { dbRef } from "api/firebase/firebase";

export const getDishes = createAsyncThunk("dishes/dishes", async () => {
  const response = await get(child(dbRef, "dishes"));
  return response.val();
});
