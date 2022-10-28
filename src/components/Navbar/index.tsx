import {MagnifyingGlass} from "phosphor-react";
import logo from "../../styles/svg/ShoppingBag.svg";
import cart from "../../styles/svg/Shoppingcart.svg"
export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="logo" className="nav__bag"/>
        <h1 className="nav__title">buyNow</h1>
      </div>
      <img src={cart} alt="" className="nav__cart"/>
      <div className="nav__inputWrapper">
        <MagnifyingGlass className="nav__icon" size={20} weight="bold" color="#ffff" />
        <input type="text" className="nav__input"placeholder="search for a product" />
      </div>
      <a href="" className="nav__link text-white underline">Página inicial</a>
      
    </nav>
  );
};
