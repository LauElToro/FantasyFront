import React from "react";
import "../Css/Eventos.css";
import lol from "./imgcomps/FondoLoL.png"
import usdt from "./imgcomps/usdt.png"
function cardsEventosTerminados(props) {

    let NombreDeEvento = "xxxxxx"
    let Juego = "xxxxx"
    let fecha = "10/10/2024"
    let Monto = "$xxxxx"

    return (
        <section>
            <div className='d-flex text-aling-center justify-contenct-start mt-5 mb-5'>

                <div className='cardSlider mr-3 ml-3'>
                    <img className="imgCards" src="$$$" />
                    <div className='cardl'>
                        <ul className="listaC">
                            <li className='itemcard'>Nombre del evento: <strong className="text-info"> {NombreDeEvento}</strong></li>
                            <li className='itemcard'>PARTIDO: <strong className="text-info">{Juego}</strong></li>
                            <li className='itemcard'>Fecha: <strong className="text-info">{fecha}</strong></li>
                            <li className='itemcard'>Monto: <strong className="text-info">{Monto}</strong></li>
                            <li className="itemcard">Medio de pago: <img className="USDTCARD" src={usdt} alt="usdt" /></li>
                            <button className="btnEstadoCard">Estado</button>
                        </ul>
                        <button className="btnCards">Cobrar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default cardsEventosTerminados