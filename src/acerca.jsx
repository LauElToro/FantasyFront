import React from "react";
import { useState } from 'react';
import './Css/Acercade.css';
import rectangle from "../public/Rectangle.png"
import vec from "../public/Vector.png";
import soldier from "../public/enzo-fernandez.png"

const Acerca = () => {

  const [displayTextTop, setDisplayTextTop] = useState('');
  const [isVisibleTop, setIsVisibleTop] = useState(false);
  
  const [displayTextBack, setDisplayTextBack] = useState('');
  const [isVisibleBack, setIsVisibleBack] = useState(false);
  
  function handleClickTop() {
    if (isVisibleTop) {
      setIsVisibleTop(false);
      setDisplayTextTop('');
    } else {
      setIsVisibleTop(true);
      setDisplayTextTop('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque perferendis sit molestiae architecto quibusdam saepe provident ut praesentium sequi eum at nesciunt dolorem voluptatibus, iusto cumque doloribus ipsa eligendi ab!');
    }
  }
  
  function handleClickBack() {
    if (isVisibleBack) {
      setIsVisibleBack(false);
      setDisplayTextBack('');
    } else {
      setIsVisibleBack(true);
      setDisplayTextBack('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque perferendis sit molestiae architecto quibusdam saepe provident ut praesentium sequi eum at nesciunt dolorem voluptatibus, iusto cumque doloribus ipsa eligendi ab!');
    }
  }
  
  return (
    <>
    <section className="six" id="acercaId">
      <div className="presentacion">
        <img className="AcercaDeLogo" src="###" alt="" />
      </div>
      <div className="preguntasPrimera">
      <img className="soldier" src={soldier} alt="" />
      <div>
        <h1 className="h1-A" > <img className="rectangulo" src={rectangle} alt="" /> ¿Qué es <strong className="SquadSIX"></strong> ?<img className="rectangulo" src={rectangle} alt="" /></h1>
        <div className="contenctVec">
          {isVisibleTop ? (
            <>
              <p>{displayTextTop}</p>
            </>
          ) : (
            <img className="vec" src={vec} alt="vec" onClick={handleClickTop} />
          )}</div>
        </div>
      </div>

      <div className="preguntas">
        <h1 className="h1-A"><img className="rectangulo" src={rectangle} alt="" /> ¿Funciones de <strong className="SquadSIX"></strong>?<img className="rectangulo" src={rectangle} alt="" /></h1>
        <div className="contenctVec">
          {isVisibleBack ? (
            <>
              <p>{displayTextBack}</p>
            </>
          ) : (
            <img className="vec" src={vec} alt="vec" onClick={handleClickBack} />
          )}
        </div>
      </div>
      <div className="mainMap">
        <div className="roadmap">
          <h1 className="h1-A">Roadmap</h1>
          <div className="carga">
            <div className="sall">
              <p className="s1">S1 2023</p>
              <p className="s2">S2 2023</p>
              <p className="s3">S3 2023</p>
              <p className="s4">S4 2023</p>
            </div>
          </div>
          <div className="columnas">
            <ul className="fon">
              <li>Formar un equipo solido</li>
              <li>Empezar el desarrollo</li>
              <li>Creacion de Pagina web</li>
            </ul>
            <ul className="fon2">
              <li>Darnos a conocer</li>
              <li>Torneos en la pagina</li>
              <li>Mostrar nuestra marca</li>
            </ul>
            <ul className="fon2">
              <li>Implementar nuevos juegos</li>
              <li>Torneos de comunidad</li>
              <li>Torneos de alto nivel competitivo</li>

            </ul>
            <ul className="fon2">
              <li>Lanzar nuestro Token</li>
              <li>Lanzamiento en Binance</li>
              <li>Expandir a nuevas fronteras</li>
            </ul>
          </div>
          <button className="btnSemana">Whitepaper</button>
        </div>
      </div>
    </section>
    </>
  );
}

export default Acerca;
