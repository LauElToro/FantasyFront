import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Css/App.css';
import Body from './body';
import Acerca from "./acerca";
import Navbar from "./nav";
import Apuestas from "./Apuestas";
import Eventos from "./Eventos";
import Perfil from "./Perfil";
import Dashboard from "./Dashboard/dashboard";
import CardsEventos from "./comps/CardsEventos";
import EventosNuevos from "./EventosNuevos";
import CreadorDeEventos from "./Dashboard/CreadorDeEventos";
import Trafico from "./Dashboard/Trafico";
import EventosDashboard from "./Dashboard/EventosDashboard";
import ErrorPage from "./Error";
import Noticias from "./Noticias";
import ArmarEquipo from "./ArmarEquipo";
import EquipoComp1 from "./comps/EquipoComp1";
import EquipoComp2 from "./comps/EquipoComp2";
import EquipoComp3 from "./comps/EquipoComp3";
import EquipoCardArqueros from "./comps/EquipoCardArqueros";
import EquipoCardDefensores from "./comps/EquipoCardDefensores";
import EquipoCardMediocampistas from "./comps/EquipoCardMediocampistas";
import EquipoCardDelanteros from "./comps/EquipoCardDelanteros";
import EquipoCardSuplentes from "./comps/EquipoCardSuplentes";
import EquipoCardTecnicos from "./comps/EquipoCardTecnicos";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/eventos" element={<EventosNuevos />} />
        <Route path="/eventosterminados" element={<Apuestas />} />
        <Route path="/apuestas" element={<Eventos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/compos" element={<CardsEventos />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Noticias" element={<Noticias/>} />
        <Route path="/ArmarEquipo" element={<ArmarEquipo/>} />
        <Route path="/prueba" element={<EquipoComp1/>} />
        <Route path="/prueba" element={<EquipoComp2/>} />
        <Route path="/prueba" element={<EquipoComp3/>} />
        <Route path="/prueba" element={<EquipoCardArqueros/>} />
        <Route path="/prueba" element={<EquipoCardDefensores/>} />
        <Route path="/prueba" element={<EquipoCardMediocampistas/>} />
        <Route path="/prueba" element={<EquipoCardDelanteros/>} />
        <Route path="/prueba" element={<EquipoCardSuplentes/>} />
        <Route path="/prueba" element={<EquipoCardTecnicos/>} />
      </Routes>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/CrearEvento" element={<CreadorDeEventos />} />
        <Route path="/Dashboard/Evento" element={<EventosDashboard />} />
        <Route path="/Dashboard/Trafico" element={<Trafico />} />  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
