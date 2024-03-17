import React from 'react';

function EquipoComp1() {

    
    return (
        <div className="CanchaDatos">
            <div className="CanchaButtons">
                {Array.from({ length: 13 }, (_, index) => (
                    <div className="CanchaButtonsDiv" key={index}>
                        <input type="button" />
                    </div>
                ))}
            </div>
            <div>
            </div>
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
