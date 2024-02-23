import { useState, useEffect } from "react";
import './Css/block.css';
import { Container, Row, Col } from "react-bootstrap"
import PremierLogo2 from "../public/PremierLogo2.png"
import Rectangulo from "../public/Rectangle125.png"
import bg from "../public/BG.jpg"//{} ``
import Arsenal from "../public/ARSENAL1.png"
import United from "../public/MANCHESTER UNITED1.png"
import City from "../public/CITY1.png"
import Liverpool from "../public/LIVERPOOL1.png"
import Tottenham from "../public/TOTTENHAM1.png"
import Chelsea from "../public/CHELSEA1.png"

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Juega", "Compite", "Gana"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

 useEffect(() => {
  let ticker = setInterval(()=> {
tick();
  }, delta)

  return() =>{clearInterval(ticker)}
 }, {text});

 const tick = () =>{
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if(isDeleting){
   setDelta(oervDelta => prevDelta /2)
  }
  if(!isDeleting && updatedText === fullText){
    setIsDeleting(true);
    setDelta(period);
   } else if(isDeleting && updatedText === ''){
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setDelta(500);
   }
 }

    return (
       <section className="banner" id="home" style={{backgroundImage: `url(${bg})`}}>
           <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <h1>{`Juega, compite y gana`} <span className="wrap"></span> </h1>
                <div className="nav-item">
                <a className="nav-item btn" href=""> <button> COMENZAR </button> </a>
                </div>
              </Col>
              <div className="PremierLogo">
                <img src={Rectangulo} />
              </div>
              <div className="PremierLogo2">
                <img src={PremierLogo2} alt="Header" />
              </div>
              <div className="EquiposPremier">
                <div>
                  <img src={Arsenal}/>
                </div>
                <div>
                  <img src={United}/>
                </div>
                <div>
                  <img src={City}/>
                </div>
                <div>
                  <img src={Liverpool}/>
                </div>
                <div>
                  <img src={Tottenham}/>
                </div>
                <div>
                  <img src={Chelsea}/>
                </div>
              </div>
              <Col xs={12} md={6} xl={5}></Col>
              
            </Row>
           </Container>
       </section>
    );
  }
  
  export default Banner;