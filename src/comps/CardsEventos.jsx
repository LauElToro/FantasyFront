import React from "react";
import "../Css/Eventos.css";
import usdt from "./imgcomps/usdt.png"
function CardEventos(prop) {

    let NombreDeEvento = "XXXXXX"
    let Juego = "XXXXXX"
    let fecha = "10/10/2024"
    let Monto = "$XXXX"

    return (
        <div>
            <div className="d-flex">
                <div className='CardNuevo ml-3 mr-5 mt-5 mb-5'>
                    <img className="imgCardsNuevo" src="$$$" />
                    <div className='cardSliderNuevo mr-3 ml-3'>
                        <div className='cardlNuevo'>
                            <ul className="listaCNuevo">
                                <li className='itemcardNuevo'>NOMBRE DEL EVENTO: <strong className="text-info"> {NombreDeEvento}</strong></li>
                                <li className='itemcardNuevo'>PARTIDO: <strong className="text-info">{Juego}</strong></li>
                                <li className='itemcardNuevo'>FECHA: <strong className="text-info">{fecha}</strong></li>
                                <li className='itemcardNuevo'>MONTO: <strong className="text-info">{Monto}</strong></li>
                                <li className="itemcardNuevo">MEDIO DE PAGO: <img className="USDTCARD" src={usdt} alt="usdt" /></li>
                                <button className="btnEstadoCardNuevo">Estado</button>
                                <button className="btnCardsNuevo">Ingresar</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardEventos