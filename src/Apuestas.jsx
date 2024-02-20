import React from "react";
import "./Css/Block2.css"
import SearchBar from "./comps/Busqueda";
import CardsEventos from "./comps/cards";
function Apuestas() {
    return(
<section>
   <div className="Divbusqueda mt-3">
    <h2 className="ml-5 mr-5 mt-5">MIS APUESTAS</h2>
    <SearchBar></SearchBar>
   </div>    <hr className="hr" />
<div className="divTerminados">
   <CardsEventos/>
   <CardsEventos/>
   <CardsEventos/>
   <CardsEventos/>
   </div>
   <div className="divTerminados2">
   <CardsEventos/>
   <CardsEventos/>
   <CardsEventos/>
   <CardsEventos/>
   </div>
   <button className="btnMasApuestas mb-5">Más apuestas</button>
   <hr className="hr"/>
</section>
    );
};

export default Apuestas