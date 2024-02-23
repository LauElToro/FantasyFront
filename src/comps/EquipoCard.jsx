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
        <div id="equiposContainer" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', maxHeight: '700px', overflowY: 'auto' }}>
    {equipos.map(equipo => (
        <div className='SelecJugadoresCont' key={equipo.País} style={{ width: '' }}>
            {equipo.jugadores.map(jugador => (
                <div className='SelecJugadores' key={jugador.nombre} style={{ width: '100%', marginBottom: '20px' }}>
                    <div className='SelecJugadoresCard' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        <div className='SelecJugImg'>
                        <img src={`${import.meta.env.VITE_REACT_APP_IMAGES_PATH}${jugador.img}`} style={{ background: '#000'}} />
                        </div>
                        <div style={{ width: '100%' }}>
                            <p><strong>{jugador.nombre}</strong></p>
                            <p>Precio: {jugador.precio}</p>
                            <p>Posicion: {jugador.posicion}</p>
                            <p>Numero: {jugador.numero}</p>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ))}
</div>

    



    );
}

export default EquipoCard;
