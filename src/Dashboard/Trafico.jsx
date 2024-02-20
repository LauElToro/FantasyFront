import React from "react";
import { Link } from "react-router-dom";
import "./cssDashboard/dashboard.css"
import Barras from "./imgDhas/barras.png"
import Grafico from "./imgDhas/grafica.png"
function Trafico() {

    return (
        <section>
            <div className="d-flex text-align-center justify-content-start bg-light">
                <div className="divVertical">
                    <ul>
                        <li><Link to="/Dashboard"><button className="btnDash">Dashboard</button> </Link></li>
                        <li><Link to="/Dashboard/CrearEvento"><button className="btnDash">Crear Evento</button></Link></li>
                        <li><Link to="/Dashboard/Evento"><button className="btnDash">Eventos</button></Link></li>
                        <li><Link to="/Dashboard/Trafico"><button className="btnDash">Trafico</button></Link></li>
                    </ul>
                </div>
                <div className="DivUsuario mb-5 mr-5 ml-3">
                    <img src={Barras} className=" p-4" alt="" />

                    <h2 className="text-black mt-5">Trafico registrado</h2>
                    <button className="btnSemana">Semanal</button>
                    <button className="btnSemana mb-3">Mensual</button>
                </div>
                <div className="DivUsuario mb-2 mr-5 ml-3">
                    <img src={Grafico} className=" p-3" alt="" />

                    <h5 className="text-black mt-5">Grafico con porcentaje de
                        visitas, por sección del sitio</h5>
                    <button className="btnSemana">Semanal</button>
                    <button className="btnSemana">Mensual</button>
                </div>
            </div>
        </section>
    )
}

export default Trafico