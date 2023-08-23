import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { changeCart, decreaseQuantity } from "../../store/reducers/cart";

import Plus from "../../styles/svg/Plus.svg";
import Minus from "../../styles/svg/Minus.svg";

type cardProps = {
  price: string;
  title: string;
  img: string;
  desc: string;
  id: number;
};
const Card = ({ price, title, img, desc, id }: cardProps) => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeCart(id));
  };

  const quantity = cartItems.find((el) => el.id === id)?.quantity || 0;

  return (
    <div className="w-[280px] mb-2 bg-white rounded-[10px] overflow-hidden ">
      <div className="h-36 flex items-center justify-center">
        <img src={img} alt="" className="" />
      </div>
      <div className="h-full bg-[#E4DBF9] px-6 py-3">
        <div className="">
          <h2 className="font-bold text-violet-500">{title}</h2>
          <p>{desc}</p>
          <span className="font-bold">{price}</span>
          <div className="flex  justify-between gap-3 mt-2 mb-3">
            <div className="bg-white  rounded-md flex items-center justify-between">
              <button
                className="px-3 py-3"
                onClick={() => dispatch(decreaseQuantity(id))}
              >
                <img src={Minus} alt="" />
              </button>
              <span className="font-bold">{quantity}</span>
              <button className="px-3 " onClick={handleClick}>
                <img src={Plus} alt="" />
              </button>
            </div>

            <button
              className="bg-violet-500 rounded-md px-6 py-1 font-bold text-sm text-white"
              onClick={handleClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
