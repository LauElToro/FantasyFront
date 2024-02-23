import React from "react";
import './Css/App.css';
import Banner from "./block";
import Blockdiv from "./Block2";
import "./Css/navs.css"

function Body(){ 
    return (
        <div id="bodyDi">
           <Banner></Banner>
             <Blockdiv></Blockdiv>
        </div>
    );
  }
  
  export default Body;