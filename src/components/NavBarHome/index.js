import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/images/icon.png";

import "./style.css";

export default function NavBar() {
  return (
    <>
      <div className="nav-container">
        <img src={icon} alt="" />
        <Link to="/login">Entrar</Link>
      </div>
    </>
  );
}
