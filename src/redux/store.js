import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice"; //we can name our reducer here any name 

export const store = configureStore ({
  reducer: {
    filter,
  }, 
})