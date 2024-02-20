import React, { useState } from 'react';
import '../Css/popup.css'; // Asegúrate de tener estilos CSS adecuados
import Line from "../../public/Line.png"

const Popup = ({ onClose }) => {
  const [currentPopup, setCurrentPopup] = useState(1);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showVerificationCodeInput, setShowVerificationCodeInput] = useState(false);
  const handleInputChange = (field) => (e) => {
    switch (field) {
      case 1:
        setInput1(e.target.value);
        break;
      case 2:
        setInput2(e.target.value);
        break;
      case 3:
        setInput3(e.target.value);
        break;
      case 4:
        setInput4(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('https://backendfantasy.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: input2,
          // También puedes incluir otros campos necesarios para el registro
        }),
      });
  
      const data = await response.json();
      console.log('Register Response:', data);
  
      if (response.ok) {
        // Registro exitoso, mostrar campo de verificación
        setShowVerificationCodeInput(true);
        setCurrentPopup(3); // Cambia al tercer popup después del registro exitoso
      } else {
        // Mostrar mensaje de error en caso de falla en el registro
        showAlert(`Error en el registro: ${data.message}`);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      showAlert('Error en la solicitud. Inténtalo nuevamente más tarde.');
    }
  };

  const handleVerificationSubmit = async () => {
    try {
      const response = await fetch('https://backendfantasy.onrender.com/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: input2,
          token: verificationCode,
        }),
      });

      const data = await response.json();
      console.log('Verification Response:', data);

      if (response.ok) {
        // Verificación exitosa, actualiza la sesión en el servidor
        await fetch('https://backendfantasy.onrender.com/verify_login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: input2,
            token: verificationCode,
          }),
        });

        // Redirige al usuario a la página /acerca
        window.location.href = "/Perfil";

        // Cierra el popup si es necesario
        onClose();
      } else {
        // Mostrar mensaje de error en caso de fallo en la verificación
        showAlert(`Error en la verificación: ${data.message}`);
      }
    } catch (error) {
      console.error('Error en la verificación:', error);
      showAlert('Error en la verificación. Inténtalo nuevamente más tarde.');
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://backendfantasy.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: input2,
        }),
      });
  
      const data = await response.json();
      console.log('Login Response:', data);
  
      if (response.ok) {
        // Show verification code input
        setShowVerificationCodeInput(true);
  
        // Switch to the verification popup
        setCurrentPopup(3);
      } else {
        // Mostrar mensaje de error en caso de fallo en el inicio de sesión
        showAlert(`Error en el inicio de sesión: ${data.message}`);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      showAlert('Error en la solicitud. Inténtalo nuevamente más tarde.');
    }
  };
  

  const handleClose = () => {
    onClose();
  };

  const handleToggleLogin = () => {
    setCurrentPopup(currentPopup === 1 ? 2 : 1); // Alternar entre 1 y 2
    setShowThirdPopup(true);  // <-- Remove this line
    setShowVerificationCodeInput(false);
    setInput1('');
    setInput2('');
    setInput3('');
    setInput4('');
    setVerificationCode('');
  };

  return (
    <>
      {currentPopup === 1 && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={handleClose}>&times;</button>
            <h2>REGISTRARSE</h2>
            <img className='popupline' src={Line} alt="line"></img>
            <input className='PopupRegister' type="text" value={input1} onChange={handleInputChange(1)} placeholder='INGRESA NOMBRE DE USUARIO' required />
            <input className='PopupRegister' type="email" value={input2} onChange={handleInputChange(2)} placeholder='E-MAIL' required />
            <input className='PopupRegister' type="password" value={input3} onChange={handleInputChange(3)} placeholder='CONTRASEÑA' required />
            <button className='EnviarBtn' onClick={handleRegister}>ENVIAR</button>
            <p className='loginp'>
              ¿YA TIENES UNA CUENTA?
              <a className='checkboxa' href="###" onClick={handleToggleLogin}> INICIA SESIÓN</a>
            </p>
          </div>
        </div>
      )}
      {currentPopup === 2 && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={handleClose}>&times;</button>
            <h2>INICIAR SESIÓN</h2>
            <img className='popupline' src={Line} alt="line"></img>
            <input className='PopupRegister' type="email" value={input2} onChange={handleInputChange(2)} placeholder='E-MAIL' required />
            <input className='PopupRegister' type="password" value={input3} onChange={handleInputChange(3)} placeholder='CONTRASEÑA' required />
            <button className='EnviarBtn' onClick={handleSubmit}>INICIAR SESIÓN</button>
            <p className='loginp'>
              ¿NO TIENES UNA CUENTA?
              <a className='checkboxa' href="###" onClick={handleToggleLogin}> REGISTRATE</a>
            </p>
          </div>
        </div>
      )}
      {currentPopup === 3 && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={handleClose}>&times;</button>
            <h2>Codigo de Verificacion!</h2>
            <img className='popupline' src={Line} alt="line"></img>
            <input
              className='VerificationCodeInput PopupRegister w-50'
              type="text"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              placeholder='CÓDIGO DE VERIFICACIÓN'
              required
            />
            <button className='EnviarBtn' onClick={handleVerificationSubmit}>VERIFICAR</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;