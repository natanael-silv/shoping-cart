import { createSlice } from "@reduxjs/toolkit";
import { productsState } from "./products";

const initialState: productsState[] = [];

const filteredItemsSlice = createSlice({
  name: "filteredItems",
  initialState,
  reducers: {
    addFilteredItems: (state, { payload }) => {
      return payload;
    },
  },
});

export const { addFilteredItems } = filteredItemsSlice.actions;
export default filteredItemsSlice.reducer;
