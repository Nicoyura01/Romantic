import React, { useState } from 'react';
import './CartaMedieval.css';

const CartaMedieval = () => {
  const [mostrandoCarta, setMostrandoCarta] = useState(true); // Estado para controlar si la carta está visible

  const handleAceptar = () => {
    setMostrandoCarta(false); // Ocultar la carta cuando se hace clic en el botón
  };

  return (
    <div className="carta-container">
      <div className={`carta ${!mostrandoCarta ? 'girada' : ''}`}>
        <div className="carta-frontal">
          {mostrandoCarta ? (
            <>
              <h2>¿Quieres ser mi San Valentín?</h2>
              <p>Te invito a un viaje a través del tiempo y el amor, en esta carta que te traigo desde épocas medievales.</p>
              <div className="botones">
                <button className="btn-aceptar" onClick={handleAceptar}>¡Claro que sí!</button>
                <button className="btn-aceptar" onClick={handleAceptar}>Obvio que sí!</button>
              </div>
            </>
          ) : (
            <>
              <h2>¡YAY!</h2>
              <p>¡Me alegra que quieras ser mi San Valentín! 💖</p>
              <img src="https://i.imgur.com/W6z0yY1.png" alt="Corazón" className="imagen-animada" />
            </>
          )}
        </div>

        <div className="carta-trasera">
          <p>¡Gracias por decir que sí!</p>
        </div>
      </div>
    </div>
  );
};

export default CartaMedieval;
