import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import PremierLogo from "../public/PremierLogo.png";
import "./Css/navs.css";
import Popup from "./comps/popup";

function Navbar() {
  const navRef = useRef();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  function showNavbar() {
    const navbar = navRef.current;
    const body = document.getElementById("bodyDi");
    const footer = document.getElementById("FooterDi");
    const acerca = document.getElementById("acercaId");
    const login = document.getElementById("loginId");

    navbar.classList.toggle("responsive_nav");

    if (navbar.classList.contains("responsive_nav")) {
      body.style.display = "none";
      footer.style.display = "none";
      acerca.style.display = "none";
      login.style.display = "none";
    } else {
      body.style.display = "initial";
      footer.style.display = "initial";
      acerca.style.display = "initial";
      login.style.display = "initial";
    }
  }

  return (
    <header>
      <div className="logo">
        <img src={PremierLogo} alt="" />
      </div>
      <nav ref={navRef}>
        <NavLink to="/" onClick={showNavbar} className="NavLink">
          Inicio
        </NavLink>
        <NavLink to="/Eventos" onClick={showNavbar} className="NavLink">
          Eventos
        </NavLink>
        <NavLink to="/acerca" onClick={showNavbar} className="NavLink">
          Informacion
        </NavLink>
        <NavLink to="/Noticias" onClick={showNavbar} className="NavLink">
          Noticias 
        </NavLink>
        
        <div>
          <div>
            <button className="btnav" onClick={openPopup}>
              Register
            </button>
            {isPopupOpen && <Popup onClose={closePopup} />}
          </div>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;