import { child, get } from "firebase/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { dbRef } from "api/firebase/firebase";

export const getSets = createAsyncThunk("sets/sets", async () => {
  const response = await get(child(dbRef, "sets"));
  return response.val();
});
