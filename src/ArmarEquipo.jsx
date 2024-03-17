import React, { useState } from 'react';
import "./Css/ArmarEquipo.css";
import Linea from "../public/Linea19.png"
import EquipoComp1 from "./comps/EquipoComp1";
import EquipoComp2 from "./comps/EquipoComp2";
import EquipoComp3 from "./comps/EquipoComp3";
import Cancha2 from "../public/Cancha2.png"
import EquipoCardArqueros from './comps/EquipoCardArqueros';
import EquipoCardDefensores from './comps/EquipoCardDefensores';
import EquipoCardMediocampistas from './comps/EquipoCardMediocampistas';
import EquipoCardDelanteros from './comps/EquipoCardDelanteros';
import EquipoCardSuplentes from './comps/EquipoCardSuplentes';
import EquipoCardTecnicos from './comps/EquipoCardTecnicos';

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

    const [componenteVisible, setComponenteVisible] = useState(null);

    const handleClick = (posicion) => {
        switch (posicion) {
            case 'Arquero':
                setComponenteVisible(<EquipoCardArqueros />);
                break;
            case 'Defensor':
                setComponenteVisible(<EquipoCardDefensores />);
                break;
            case 'Mediocampo':
                setComponenteVisible(<EquipoCardMediocampistas />);
                break;
            case 'Delantero':
                setComponenteVisible(<EquipoCardDelanteros />);
                break;
            case 'Suplente':
                setComponenteVisible(<EquipoCardSuplentes />);
                break;
            case 'Tecnico':
                setComponenteVisible(<EquipoCardTecnicos />);
                break;
            default:
                setComponenteVisible(<EquipoCardArqueros />);
        }
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
                        <img className="Canchaimg" src={Cancha2} alt="" />
                    </div>
                </div>  
                <div className='posicionesButtons'>
                    <div className='posicionesButtonsDiv'>
                        <input type="button" value="Arquero" onClick={() => handleClick('Arquero')} />
                    </div>
                    <div className='posicionesButtonsDiv'>
                        <input type="button" value="Defensor" onClick={() => handleClick('Defensor')} />
                    </div>
                    <div className='posicionesButtonsDiv'>
                        <input type="button" value="Mediocampo" onClick={() => handleClick('Mediocampo')} />
                    </div>
                    <div className='posicionesButtonsDiv'>
                        <input type="button" value="Delantero" onClick={() => handleClick('Delantero')} />
                    </div>
                    <div className='posicionesButtonsDiv'>
                        <input type="button" value="Suplente" onClick={() => handleClick('Suplente')} />
                    </div>
                    <div className='posicionesButtonsDiv'>
                        <input type="button" value="Tecnico" onClick={() => handleClick('Tecnico')} />
                    </div>
                </div>
            </div>
            <div>
                {componenteVisible}
            </div>
        </section>
    );
}

export default ArmarEquipos;
