import React from "react";
import "./Css/Block2.css"
import SearchBar from "./comps/Busqueda";
import CardsEventos from "./comps/CardsEventos";
import bgEve from "/public/bgtipitos.jpg"
function EventosNuevos() {
    return(
<section style={{backgroundImage: `url(${bgEve})`}}>
<div className="Divbusqueda">
    <h2 className="mt-5 ml-5">Listado de eventos</h2>
    <SearchBar></SearchBar>
   </div>    <hr className="hr" />
    <div>
   <CardsEventos/>


   <CardsEventos/>
   <CardsEventos/>
   <CardsEventos/>
   </div>
   <button className="btnMasApuestas mb-5">Más apuestas</button>
   <hr className="hr"/>            
</section>
    )
}

export default EventosNuevos