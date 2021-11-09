import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getDatabase, ref } from "firebase/database";

export const app = initializeApp(firebaseConfig);
export const dbRef = ref(getDatabase(app));
