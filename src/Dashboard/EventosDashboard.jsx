import React from "react";
import { Link } from "react-router-dom";
import "./cssDashboard/dashboard.css"
function EventosDashboard() {
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
                   
                </div>
            </section>
        )
    }
    
    export default EventosDashboard