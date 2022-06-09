import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="nav-item">
        Главная
      </Link>
      <Link to={"/post/create"} className="nav-item">
        Добавить пост
      </Link>
    </div>
  );
};

export default Header;
