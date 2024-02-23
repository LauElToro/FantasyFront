import React from "react";
import Bg from "../public/BG.jpg";
import "./Css/Noticias.css";
import Fulbito from "../public/CITY1.png"
import Enzo from "../public/enzo-fernandez.png"
import Haaland from "../public/erling-haaland.png"
import United from "../public/MANCHESTER UNITED1.png"


function Noticias() {

    return (
        <section className="SectionNoticiasbg" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="SectionNoticias">
                <h2>PREMIER LEAGUE</h2>
                <div className="SectionNoticiasBox">
                    <img src={Fulbito} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa voluptates necessitatibus </p>
                    <img src={United} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa voluptates necessitatibus </p>
                
                    <img src={Fulbito} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa voluptates necessitatibus </p>
                    <img src={United} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa voluptates necessitatibus</p>
                </div>
                <h2>RESTO DEL MUNDO</h2>
                <div className="SectionNoticiasBox">
                    <img src={Fulbito} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa voluptates necessitatibus molestias quasi recusandae </p>
                    <img src={United} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa voluptates necessitatibus molestias quasi recusandae </p>
                    <img src={United} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa voluptates necessitatibus molestias quasi recusandae </p>
                    <img src={Fulbito} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa voluptates necessitatibus molestias quasi recusandae </p>
                </div>
            </div>
            <div className="SectionNoticias2">
                <h2>
                    ACERCA DE FANTASY
                </h2>
                <div className="SectionNoticiasBox2">
                    <img src={Enzo} /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iure facere perferendis ullam praesentium quod accusamus atque rerum eos. Tempore nobis libero possimus cupiditate autem voluptatem dicta? Consequatur, repellat dolorum.</p>
                    <img src={Haaland} /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iure facere perferendis ullam praesentium quod accusamus atque rerum eos. Tempore nobis libero possimus cupiditate autem voluptatem dicta? Consequatur, repellat dolorum.</p>
                </div>

            </div>

        </section>


    )











}

export default Noticias;