import React from "react";
import "./Css/Eventos.css";
import  usdt from "../public/usdt.png"
import bgj from "../public/BGJ.png"
function Eventos() {
    return (
        <section style={{backgroundImage: `url(${bgj})`}}>
                    <img className="Top1Ban" src="" />
            <div>
                <div className="Fechas">
                    <h3>Fecha #1</h3>
                </div>
                <div className="Eventos">
                    <div>
                        <img className="TeamEve" src="###" alt="" /> <br />
                        <button className="ApuestaTeam1">Apuesta</button>
                    </div>
                    <div>
                        <h2>VS</h2>
                        <p className="score">0-0</p>
                        <p className="time">Comienza en: 10:00</p>
                        <img className="USDTCARD2" src={usdt} alt="" />
                    </div>
                    <div>
                        <img className="TeamRiv" src="#" alt="" /> <br />
                        <button className="ApuestaTeam2">Apuesta</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="Fechas mt-5">
                    <h3>Fecha #2</h3>
                </div>
                <div className="Eventos">
                    <div>
                        <img className="TeamEve" src="#" alt="" /> <br />
                        <button className="ApuestaTeam1">Apuesta</button>
                    </div>
                    <div>
                        <h2>VS</h2>
                        <p className="score">0-0</p>
                        <p className="time">Comienza en: 10:00</p>
                        <img className="USDTCARD2" src={usdt} alt="" />
                    </div>
                    <div>
                        <img className="TeamRiv" src="#" alt="" /> <br />
                        <button className="ApuestaTeam2">Apuesta</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="Fechas mt-5">
                    <h3>Fecha #3</h3>
                </div>
                <div className="Eventos">
                    <div>
                        <img className="TeamEve" src="#" alt="" /> <br />
                        <button className="ApuestaTeam1">Apuesta</button>
                    </div>
                    <div>
                        <h2>VS</h2>
                        <p className="score">0-0</p>
                        <p className="time">Comienza en: 10:00</p>
                        <img className="USDTCARD2" src={usdt} alt="" />
                    </div>
                    <div>
                        <img className="TeamRiv" src="#" alt="" /> <br />
                        <button className="ApuestaTeam2">Apuesta</button>
                    </div>
                </div>
            </div>
            <br />
        </section>
    );
}

export default Eventos;