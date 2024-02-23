import React, { useState } from 'react';
import "./Css/ArmarEquipo.css";
import Cancha from "../public/Cancha.png";
import Linea from "../public/Linea19.png"
import EquipoCard from "./comps/EquipoCard";
import EquipoComp1 from "./comps/EquipoComp1";
import EquipoComp2 from "./comps/EquipoComp2";
import EquipoComp3 from "./comps/EquipoComp3";



function ArmarEquipos() {

    let Dinero = (2000)

    const [componenteActual, setComponenteActual] = useState(null);

    const mostrarComponente1 = () => {
        setComponenteActual(<EquipoComp1 />);
    };

    const mostrarComponente2 = () => {
        setComponenteActual(<EquipoComp2 />);
    };

    const mostrarComponente3 = () => {
        setComponenteActual(<EquipoComp3 />);
    };


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
                        <div className='DivEquiposButton'>
                            <div className='EquiposInputDiv'>
                                <div className='EquiposButtonInp'>
                                    <input type="button" value="Equipo 1" onClick={mostrarComponente1} />
                                </div>
                                <div className='EquiposButtonInp'>
                                    <input type="button" value="Equipo 2" onClick={mostrarComponente2} />
                                </div>
                                <div className='EquiposButtonInp'>
                                    <input type="button" value="Equipo 3" onClick={mostrarComponente3} />
                                </div>
                                <div style={{ minHeight: "100px" }}>
                                    {componenteActual}
                                </div>
                            </div>
                        </div>
                        <img className="Canchaimg" src={Cancha} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <EquipoCard></EquipoCard>
            </div>
        </section>
    );
}

export default ArmarEquipos