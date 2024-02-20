import React, { useEffect, useState } from 'react';

function cargarJSON(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching JSON:', error);
            return [];
        });
}

function EquipoCard() {
    const [equipos, setEquipos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarJSON('../../public/Jugadores/mundial.json')
            .then(data => {
                setEquipos(data.equipos || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div id="equiposContainer">
            {equipos.map(equipo => (
                <div key={equipo.País}>
                    <h2>{equipo.País}</h2>
                    {equipo.jugadores.map(jugador => (
                        <div key={jugador.nombre}>
                            <img src={`${import.meta.env.VITE_REACT_APP_IMAGES_PATH}${jugador.img}`} style={{ maxWidth: '100px' }} />
                            <p><strong>{jugador.nombre}</strong></p>
                            <p>Precio: {jugador.precio}</p>
                            <p>Posicion: {jugador.posicion}</p>
                            <p>Numero: {jugador.numero}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default EquipoCard;
