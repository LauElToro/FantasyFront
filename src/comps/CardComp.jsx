import React from 'react';
import "../Css/Perfil.css"

const TorneoBox = ({ hora, nombre, descripcion, imgSrc }) => {
  return (
    <div className="bgcontainer2">
      <div className="box1">
        <img src="/public/Boxbg.png" alt="Fondo de la caja" />
        <div className="box1div">
          <img src="/public/Circulo.png" alt="Círculo" />
          <div className="box1divp">
            <p className='phora'>{hora}</p>
            <p className='pnombre'>{nombre}</p>
            <p className='pdescripcion'>{descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorneoBox;
