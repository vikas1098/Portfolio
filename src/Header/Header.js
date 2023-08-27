import React from "react";
import "./Header.css";
import vikas from "../img/vikas.jpg";

const Header = () => {
  return (
    <header className="header">
      <section class="top-nav">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img src={vikas} className="header__logo-img"></img>
          </div>
          <span className="header__logo-sub">VIKAS KAUSHIK</span>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu">
          <li>
            <a href="./"> Home </a>
          </li>
          <li>
            <a href="./#about">About </a>
          </li>
          <li>
            <a href="./#projects">Projects</a>
          </li>
          <li>
            <a href="./#contact">Contact </a>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
