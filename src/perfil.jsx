import React, { useState } from "react";
import PremierBanner from "../public/PREMIERBANNER1.png";
import "./Css/Perfil.css";
import Bg from "../public/BG.jpg";
import Boxbg from "../public/Boxbg.png";
import Box3bg from "../public/BGJ.png";
import TorneoBox from "./comps/CardComp";

const BlockRegister = () => {
  const [posiciones, setPosiciones] = useState({
    Arquero: null,
    Defensor: null,
    Centrocampista: null,
    Delantero: null,
    Suplente1: null,
    Suplente2: null,
    Suplente3: null,
    Suplente4: null,
  });

  const [posicionSeleccionada, setPosicionSeleccionada] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayerPopupOpen, setPlayerPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const handleOpenPlayerPopup = (position) => {
    setPosicionSeleccionada(position);
    setPlayerPopupOpen(true);
  };

  const handleClosePlayerPopup = () => {
    setPlayerPopupOpen(false);
  };

  const handleJugadorSelect = (jugador) => {
    const nuevaPosicion = { ...posiciones, [posicionSeleccionada]: jugador };
    setPosiciones(nuevaPosicion);
    handleClosePlayerPopup();
  };

  // Define the variable Nombredeusuario
  const Nombredeusuario = "USUARIO777";

  return (
    <section>
      <div className="w-100" style={{ backgroundImage: `url(${PremierBanner})` }}>
        <div className="bgcontainer">
          <div className="bg1">
            <h3 className="bg1h3">BIENVENIDO</h3>
            <h3 className="usern">{Nombredeusuario}</h3>
          </div>
          <div className="bg2">
              <a href="./ArmarEquipo">
            <button className="bg1btn">
              Armar Equipo
            </button>

              </a>
          </div>
        </div>
      </div>
            <div className="w-100" style={{ backgroundImage: `url(${Bg})`}}>
                <div className="bgcontainer2">
                    <TorneoBox
                        hora="MAÑANA, 20:00 HS"
                        nombre="Nombre del torneo"
                        descripcion="Global 4v4 X espacios"
                        imgSrc={Boxbg}  // Ajusta la ruta según tu estructura de archivos
                    />
                    <TorneoBox
                        hora="MAÑANA, 20:00 HS"
                        nombre="Nombre del torneo"
                        descripcion="Global 4v4 X espacios"
                        imgSrc={Boxbg}  // Ajusta la ruta según tu estructura de archivos
                    />
                    <TorneoBox
                        hora="MAÑANA, 20:00 HS"
                        nombre="Nombre del torneo"
                        descripcion="Global 4v4 X espacios"
                        imgSrc={Boxbg}  // Ajusta la ruta según tu estructura de archivos
                    />
                </div>
            </div>
            <div className="w-100 GradientViolt">
                <div className="bgcontainer3">
                    <div className="Bigboxcontainer">
                    <TorneoBox
                        hora="MAÑANA, 20:00 HS"
                        nombre="Nombre del torneo"
                        descripcion="Global 4v4 X espacios"
                        imgSrc={Boxbg}  // Ajusta la ruta según tu estructura de archivos
                    />
                    </div>
                </div>
                <div className="Groupboxcont3">
                <TorneoBox
                        hora="MAÑANA, 20:00 HS"
                        nombre="Nombre del torneo"
                        descripcion="Global 4v4 X espacios"
                        imgSrc={Boxbg}  // Ajusta la ruta según tu estructura de archivos
                    />
                    <TorneoBox
                    hora="MAÑANA, 20:00 HS"
                    nombre="Nombre del torneo"
                    descripcion="Global 4v4 X espacios"
                    imgSrc={Boxbg}  // Ajusta la ruta según tu estructura de archivos
                />
                </div>
            </div>
            <div className="w-100" style={{ backgroundImage: `url(${Box3bg})` }}>
                <div className="container4h1">
                <h1>Apoya a tu equipo favorito</h1>  
                </div>
                <div className="bgcontainer4">
                <TorneoBox
                        hora="MAÑANA, 20:00 HS"
                        nombre="Nombre del torneo"
                        descripcion="Global 4v4 X espacios"
                        imgSrc={Boxbg}  // Ajusta la ruta según tu estructura de archivos
                    />
                    <TorneoBox
                        hora="MAÑANA, 20:00 HS"
                        nombre="Nombre del torneo"
                        descripcion="Global 4v4 X espacios"
                        imgSrc={Boxbg}  // Ajusta la ruta según tu estructura de archivos
                    />
                    <TorneoBox
                        hora="MAÑANA, 20:00 HS"
                        nombre="Nombre del torneo"
                        descripcion="Global 4v4 X espacios"
                        imgSrc={Boxbg}  // Ajusta la ruta según tu estructura de archivos
                    />
                </div>
            </div>
        </section>
    )
}


export default BlockRegister;