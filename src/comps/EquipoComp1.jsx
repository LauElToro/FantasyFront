import React, { useState } from 'react';

function EquipoComp1({ equiposArqueros }) {
    const [equipoSeleccionado, setEquipoSeleccionado] = useState(new Array(13).fill(null));

    // Función para manejar la selección de equipo
    const handleEquipoSelect = (equipo, index) => {
        const newEquipoSeleccionado = [...equipoSeleccionado];
        newEquipoSeleccionado[index] = equipo;
        setEquipoSeleccionado(newEquipoSeleccionado);
    };

    return (
        <div className="CanchaDatos">
            <div className="CanchaButtons">
                {Array.from({ length: 13 }, (_, index) => (
                    <div className="CanchaButtonsDiv" key={index}>
                        <button onClick={() => handleEquipoSelect(equiposArqueros[index], index)}>
                            {equipoSeleccionado[index] && equipoSeleccionado[index] === equiposArqueros[index] ? (
                                <div className='SelecJugadoresCard'>
                                    <div className='SelecJugImg'>
                                        <img src={`${import.meta.env.VITE_REACT_APP_IMAGES_PATH}${equipoSeleccionado[index].img}`} style={{ maxWidth: '100px' }} alt={equipoSeleccionado[index].pais} />
                                    </div>
                                    <div className='SelecPais'>
                                        <p><strong>{equipoSeleccionado[index].pais}</strong></p>
                                    </div>
                                    <div className='SelecValor'>
                                        <p>Precio: {equipoSeleccionado[index].valor}</p>
                                    </div>
                                </div>
                            ) : (
                                <div>Selecciona un equipo</div>
                            )}
                        </button>
                    </div>
                ))}
            </div>

            {/* Otros elementos del componente */}
            <div className='CanchaButtonsSubmit'>
                <input type="submit" value="Guardar Equipo" />
            </div>
            <div className='canchaInfoSup'>
                <h4>SUPLENTES</h4>
            </div>
            <div className='canchaInfoDt'>
                <h4>TECNICO</h4>
            </div>
        </div>
    );
}

export default EquipoComp1;
