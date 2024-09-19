import { configureStore } from "@reduxjs/toolkit";
import { dogReducer } from "../Slices/DogSlice";

export const store = configureStore({
    reducer: {
      Dogs: dogReducer,
    }
  })
