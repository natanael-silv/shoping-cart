import { createSlice } from "@reduxjs/toolkit";
import {categories} from "../../data/categories";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: categories,
});

export default categoriesSlice.reducer;
