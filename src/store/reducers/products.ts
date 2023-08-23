import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products.json";

export interface productsState {
  name: string;
  id: number;
  img: string;
  description: string;
  price: string;
  favorites?: boolean;
  categorie: string;
}
const initialState: productsState[] = products;

const dummyReducer = (state: productsState[]) => state;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {
  /* dummy action creators */
} = productsSlice.actions;

export default productsSlice.reducer;
