import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get } from "firebase/database";
import { dbRef } from "../firebase/firebase";

export const getSets = createAsyncThunk("sets/sets", async () => {
  const response = await get(child(dbRef, "sets"));
  return response.val();
});
