import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartState {
  id: number;
  quantity: number;
}
const initialState: cartState[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCart: (state, { payload }) => {
      if (state.find((item) => item.id === payload) == null) {
        return [...state, { id: payload, quantity: 1 }];
      } else {
        return state.map((item) => {
          if (item.id === payload) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    },
    decreaseQuantity: (state, { payload }) => {
      if (state.find((item) => item.id === payload)?.quantity === 1) {
        return state.filter((item) => item.id !== payload);
      } else {
        return state.map((item) => {
          if (item.id === payload) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<number>) => {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { changeCart, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
