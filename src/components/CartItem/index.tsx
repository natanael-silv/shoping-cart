import React from "react";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/reducers/cart";

import remove from "../../assets/images/close_btn2.png";
import storeItems from "../../data/products.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  const dispatch = useDispatch();

  return (
    <div className="flex justify-between mb-4">
      <div className="flex items-center">
        <div className="w-[81px] h-[53px] bg-white flex items-center justify-center rounded-md mr-3">
          <img src={item.img} alt="" className="h-[44px]" />
        </div>
        <span>{`${quantity} x ${item.name}`}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-3">{item.price}</span>
        <button onClick={() => dispatch(removeFromCart(id))}>
          <img src={remove} alt="" className="p-2" />
        </button>
      </div>
    </div>
  );
}
