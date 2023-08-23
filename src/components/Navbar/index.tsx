import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addFilteredItems } from "../../store/reducers/search";

import CartItem from "../CartItem";
import storeItems from "../../data/products.json";

import { MagnifyingGlass } from "phosphor-react";
import logo from "../../styles/svg/ShoppingBag.svg";
import cart from "../../styles/svg/Shoppingcart.svg";
import close from "../../assets/images/close_btn.png";

export const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [search, setSearch] = useState("");

  const cartItems = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  /* const filterItems =
    search.length > 0
      ? storeItems.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  dispatch(addFilteredItems(filterItems));


 */

  useEffect(() => {
    const filterItems =
      search.length > 0
        ? storeItems.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
        : storeItems;

    dispatch(addFilteredItems(filterItems));
  }, [dispatch, search, storeItems]);

  return (
    <nav className="nav">
      <div
        className={`fixed text-white top-0 bg-[#202024] w-[40%] z-20 right-0 h-[100vh] p-6 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between mb-12">
          <h2 className="text-2xl font-semibold">Cart</h2>
          <button onClick={() => setIsopen(!isOpen)}>
            <img src={close} alt="" />
          </button>
        </div>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <p className="text-white">No items in cart</p>
        )}
      </div>
      <div className="nav__logo">
        <img src={logo} alt="logo" className="nav__bag" />
        <h1 className="nav__title">buyNow</h1>
      </div>
      <div className="nav__cart relative">
        <button onClick={() => setIsopen(!isOpen)}>
          <img src={cart} alt="" />
        </button>
        <span className="absolute px-3 py-[1px] bg-white text-indigo-600 rounded-xl bottom-6 left-4 text-sm">
          {cartItems.map((el) => el.quantity).reduce((acc, el) => acc + el, 0)}
        </span>
      </div>
      <div className="nav__inputWrapper">
        <MagnifyingGlass
          className="nav__icon"
          size={20}
          weight="bold"
          color="#ffff"
        />
        <input
          type="text"
          className="nav__input"
          placeholder="search for a product"
          onChange={handleChange}
          value={search}
        />
      </div>
      <a href="/" className="nav__link text-white underline">
        Página inicial
      </a>
    </nav>
  );
};
