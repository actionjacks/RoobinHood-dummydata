import React from "react";
import Logo from "./logo__robinhood.png";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} alt="robinhood logo" width={45} />
      </div>
      <div className="header__search">
        <SearchIcon />
        <div className="header__searchContainer">
          <input
            placeholder="Search"
            type="text"
            className="searchContainer__input"
          />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="#">Free Stock</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
