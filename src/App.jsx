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
import EquipoCard from "./comps/EquipoCard";
import EquipoComp1 from "./comps/EquipoComp1";
import EquipoComp2 from "./comps/EquipoComp2";
import EquipoComp3 from "./comps/EquipoComp3";


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
        <Route path="/prueba" element={<EquipoCard/>} />
        <Route path="/prueba" element={<EquipoComp1/>} />
        <Route path="/prueba" element={<EquipoComp2/>} />
        <Route path="/prueba" element={<EquipoComp3/>} />
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
