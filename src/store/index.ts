import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categories";
import productsSlice from "./reducers/products";
import cartSlice from "./reducers/cart";
import filteredItemsSlice from "./reducers/search";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
    filteredItems: filteredItemsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
