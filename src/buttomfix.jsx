import React from 'react';
import "./Css/buttomfix.css";
import Asi from "../public/asistencia.png"
import discord from "../public/discord.png";
import Whatsapp from "../public/whatsapp.png";
import correo from "../public/coreo.png";
import facebook from "../public/Facebook.png";
import twiter from "../public/twitter.png";
import tiktok from "../public/tiktok.png";
import instagram from "../public/Instagram.png";
import stream from "../public/Twitch.png";
 //{} ``

const Fix = () => {

    return (
       <div>
        <div className="containerFix">
        <input type="checkbox" id="btn-masFix"/>
        <div class="redesFix">
          <a href="#"><img src={logo} alt="" /> <p className='pbtn'>¿Necesitas ayuda?</p></a>  
            <a href="#"><button className='btnshad'>Prefuntas frecuentes</button></a>
            <a href="#"><button className='btnshad'>E-mail <img className='COM' src={correo} alt="" /></button> <p className='pbtn2'>Contactanos por: </p> </a>
            <a href="#"><button className='btnshad'>Discord <img className='COM' src={discord} alt="" /></button></a>
            <a href="#"><button className='btnshad'>Whatsapp <img className='COM' src={Whatsapp} alt="" /></button></a>
            <a href="">Seguinos con tus redes<br /></a>
            <div className='divred'>
            <button className='btnred'> <img className='segred' src={facebook} alt="" /></button>
            <button className='btnred'><img className='segred' src={twiter} alt="" /></button>
            <button className='btnred'><img className='segred' src={instagram} alt="" /></button>
            <button className='btnred'><img className='segred' src={stream} alt="" /></button>
            <button className='btnred'><img className='segred' src={tiktok} alt="" /></button></div>
            </div>
        <div className="btn-masFix">
            <label for="btn-masFix" className="labesl"><img className='w-50' src={Asi} alt="" /></label>
        </div>
    </div>
       </div>
    );
  }
  
  export default Fix;