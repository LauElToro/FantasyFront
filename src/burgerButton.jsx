import React from "react";
import "./Css/burgerButton.css"
import { useState } from "react";

function Burger(props) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
      <div  onClick={props.handleClick} 
            className={`icon nav-icon-6 ${props.clicked ? 'open' : ''}`}
      >
    <span></span>
    <span></span>
    <span></span>
  </div>
  );
}

export default Burger;