import { useState, useEffect } from "react";
import '../src/Css/Block2.css';
import horablu from "../public/horablu.png"
import trofeoblu from "../public/trofeoblu.png"
import comunidad from "../public/comunidad.png"
import fecha from "../public/fecha.png"
import TLuzTop from "../public/LuzvioletaTop.png";
import LuzBot from "../public/LuzvioletaBot.png";
import Carrusel from "./carrusel";
import bgj2 from "../public/LuzvioletaBot.png"
import GroupImg from "../public/GroupImg.png"
import Hallan from "../public/HaalandNoticia.png"
import copa from "../public/CopaNoticia.png"

const Blockdiv = () => {

//style={{backgroundImage: `url(${bgj})`}}

const divStyle = {
    backgroundImage: `url(${TLuzTop})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '75vh',
    
  };
  const divStyleBack = {
    backgroundImage: `url(${LuzBot})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '120vh',
  };
  const imagenes = [
    {
      src: `${Hallan}`,
      captionTitle: 'Mejor jugador',
      captionText: 'Descripción.',
    },
    {
      src: `${copa}`,
      captionTitle: 'Copa premier league',
      captionText: 'Descripción.',
    },
    {
      src: `${Hallan}`,
      captionTitle: 'Más goles',
      captionText: 'Descripción.',
    },
    {
      src: `${copa}`,
      captionTitle: '¿Quien se llevará la copa?',
      captionText: 'Descripción.',
    },
    {
      src: `${Hallan}`,
      captionTitle: 'Mejor jugada',
      captionText: 'Descripción.',
    },
    // Añade más objetos para cada imagen del carrusel
  ];
    return (

        <section>
            <div style={{backgroundImage: `url(${bgj2})`}}>
                <Carrusel images={imagenes} />
            </div>
              <div style={divStyle}>
            <h1 className="h1 mb5 mt-5 p-3">FORMAS DE JUEGO</h1>
            <div className="columnas">
                <ul className="fonincon">
                    <li><img className="iconos-medal" src={horablu} alt="" /><p>Lorem ipsum imus q accusantium facili perspiciatis deserunt</p></li>
                    <li><img className="iconos-trofeo" src={trofeoblu} alt="" /><p>Lorem ipsum vel perspiciatis deserunt delectnio ut inio ut s?</p> </li>
                </ul>
                <ul className="fonincon">
                    <li><img className="iconos-com" src={comunidad} alt="" /><p>Lorem ipsum dolor sit amet consectetur aicing elit. Beatae, cupiditate</p> </li>
                    <li><img className="iconos-joy" src={fecha} alt="" /> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omno ut ipsa!</p></li>
                </ul>
            </div>
            </div>
            <main className="main" style={divStyleBack}>
                <div className="sports">
                    <h3 className="sportsh3">COMPITE CON TUS CONOCIMIENTOS <br /> DE TU DEPORTE FAVORITO.</h3>
                    <h3 className="sports2h3">JUEGA OPEN FANTASY</h3>           
                    <button className="btn-p">EMPEZAR YA</button>
                        <div>
                            <img className="GroupImg" src={GroupImg}/>
                        </div>                                      
                </div>
            </main>
            

        </section>
    );
}

export default Blockdiv;