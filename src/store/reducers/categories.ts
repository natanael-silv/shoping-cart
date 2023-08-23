import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";

interface categoriesState {
  name: string;
  id: string;
  img: string;
}

const initialState: categoriesState[] = categories;

const dummyReducer = (state: categoriesState[]) => state;

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {

  }
});

export const { /* dummy action creators */ } = categoriesSlice.actions;
export default categoriesSlice.reducer;
