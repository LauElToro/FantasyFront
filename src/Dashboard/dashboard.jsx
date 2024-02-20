import React from "react";
import { Link } from "react-router-dom";
import "./cssDashboard/dashboard.css"
import Uno from "./imgDhas/Tipitos.png"
import Moneda from "./imgDhas/MONEDA.png"
import Apuesta from "./imgDhas/APUESTA.png"
function Dashboard() {
let CantidadDeUsuarios = "xxxxxxxx"
let CantidadDeVolumen = "xxxxxxxx"
let CantidadDeApuestas = "xxxxxxxx"
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
                <div className="DivUsuario mb-2 mr-5 ml-3">
                    <img src={Uno} className="w-100 p-4" alt="" />
                    <h3 className="text-black">{CantidadDeUsuarios}</h3>
                    <h2 className="text-black mt-5">Usuarios</h2>
                    <button className="btnSemana">Semanal</button>
                    <button className="btnSemana">Mensual</button>
                </div>
                <div className="DivUsuario mb-2 mr-5 ml-5">
                    <img src={Moneda} className="w-100 p-4" alt="" />
                    <h3 className="text-black">{CantidadDeVolumen}</h3>
                    <h2 className="text-black mt-5">Volumen</h2>
                    <button className="btnSemana">Semanal</button>
                    <button className="btnSemana">Mensual</button>
                </div>
                <div className="DivUsuario mb-2 ml-5">
                    <img src={Apuesta} className="w-100 p-4" alt="" />
                    <h3 className="text-black">{CantidadDeApuestas}</h3>
                    <h2 className="text-black mt-5">Apuetas</h2>
                    <button className="btnSemana">Semanal</button>
                    <button className="btnSemana">Mensual</button>
                </div>
            </div>
        </section>
    )
}

export default Dashboard