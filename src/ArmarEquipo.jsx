import React from "react";
import "./Css/ArmarEquipo.css";
import Cancha from "../public/Cancha.png";
import Linea from "../public/Linea19.png"
import EquipoCard from "./comps/EquipoCard";

let Dinero = (2000)

function ArmarEquipos() {
    return (

        <section>
            <div className="w-100 GradientViolt">
                <div className="EquiposCancha">
                    <div className="DivCancha">
                        <div className="DivCanchaDinero">
                            <div className="DivCanchaDineroInp">
                                <p>Dinero:
                                    <input type="text" value={Dinero} readOnly />
                                </p>
                            </div>
                        </div>
                        <div className="DivCanchaDatos">
                            <h2>EQUIPOS VIRTUALES</h2>
                            <img className='Linea' src={Linea} />
                            <h3>SUPLENTES</h3>
                        </div>
                        <div className="DivCanchaEquipos">
                            <div className="DivCanchaEquiposBtn">
                                <button>Equipo 1</button>
                            </div>
                            <div className="DivCanchaEquiposBtn">
                                <button>Equipo 2</button>
                            </div>
                            <div className="DivCanchaEquiposBtn">
                                <button>Equipo 3</button>
                            </div>
                        </div>
                        <div className="CanchaDatos">
                            <img className="Canchaimg" src={Cancha} alt="" />
                            <div className="CanchaButtons">
                                <div className="CanchaButtonsDiv">
                                    <button>Jugador</button>
                                </div>
                                <div className="CanchaButtonsDiv">
                                    <button>Jugador</button>
                                </div>
                                <div className="CanchaButtonsDiv">
                                    <button>Jugador</button>
                                </div>
                                <div className="CanchaButtonsDiv">
                                    <button>Jugador</button>
                                </div>
                                <div className="CanchaButtonsDiv">
                                    <button>Jugador</button>
                                </div>
                                <div className="CanchaButtonsDiv">
                                    <button>Jugador</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <EquipoCard></EquipoCard>
            </div>
        </section>
    );
};

export default ArmarEquipos