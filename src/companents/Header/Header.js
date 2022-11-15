import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Dictionary</h1>
      <div className="header__search">
        <input className="search__input" placeholder="Search" />
        <button type="submit" className="search__btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
