import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products.json";

const productsSlice = createSlice({
  name: "products",
  initialState: products,
});

export default productsSlice.reducer;
