import React, { useEffect, useState } from 'react';
import "../Css/EquipoCard.css";

function cargarJSON(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching JSON:', error);
            return {};
        });
}

function EquipoCardArqueros({ onEquipoSelect }) {
    const [equipos, setEquipos] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedEquipo, setSelectedEquipo] = useState(null);

    useEffect(() => {
        cargarJSON('../../public/Jugadores/Grupos.json')
            .then(data => {
                setEquipos(data.delanteros.grupos || {});
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleEquipoClick = (equipo) => {
        // Si el mismo equipo es seleccionado nuevamente, lo deseleccionamos
        if (selectedEquipo === equipo) {
            setSelectedEquipo(null);
        } else {
            // Llama a la función de selección de equipo del padre
            onEquipoSelect(equipo);
            setSelectedEquipo(equipo); // Establece el equipo seleccionado
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div id="equiposContainer">
            {Object.keys(equipos).map((grupo, index) => (
                <div className='SelecJugadoresCont' key={index}>
                    <h2>{grupo}</h2>
                    <div className="botonesJugadoresContainer">
                        {equipos[grupo].map((equipo, i) => (
                            <button
                                key={i}
                                className={selectedEquipo === equipo ? 'SelecJugadores selected' : 'SelecJugadores'}
                                onClick={() => handleEquipoClick(equipo)}
                            >
                                <div className='SelecJugadoresCard'>
                                    <div className='SelecJugImg'>
                                        <img src={`${import.meta.env.VITE_REACT_APP_IMAGES_PATH}${equipo.img}`} style={{ maxWidth: '100px' }} alt={equipo.pais} />
                                    </div>
                                    <div className='SelecPais'>
                                        <p><strong>{equipo.pais}</strong></p>
                                    </div>
                                    <div className='SelecValor'>
                                        <p>Precio: {equipo.valor}</p>
                                    </div>                                    
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EquipoCardArqueros;
