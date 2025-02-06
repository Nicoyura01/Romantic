import React, { useState } from "react";
import "./CartaMedieval.css";

const CartaMedieval = () => {
  const [clicksNo, setClicksNo] = useState(0); // Contador de clics en el botón "No"
  const [girar, setGirar] = useState(false); // Controla si la cámara gira

  // Función que maneja el clic en el botón "Sí"
  const handleSiClick = () => {
    setGirar(true); // Gira la cámara
  };

  // Función que maneja el clic en el botón "No"
  const handleNoClick = () => {
    if (clicksNo < 6) {
      setClicksNo(clicksNo + 1); // Incrementa los clics hasta el séptimo
    }
  };

  return (
    <div className="contenedor">
      <div className={`camara ${girar ? "girar" : ""}`}>
        <div className="cuerpo-camara">
          <div className="visor-reflex"></div>
          <div className="lente">
            {!girar ? (
              <>
                <h1>¿Ely, quieres ser mi San Valentín?</h1>
                <p>Quiero que seas el amor de mi vida y celebrar todos los siguientes a tu lado.</p>
                <div className="botones">
                  <button className="btn-si" onClick={handleSiClick}>
                    ¡Claro que sí!
                  </button>
                  {clicksNo < 7 && (
                    <button
                      className="btn-no"
                      onClick={handleNoClick}
                      style={{
                        transform: `scale(${1 - clicksNo * 0.14})`, // Reduce el tamaño
                        opacity: 1 - clicksNo * 0.14, // Hace que desaparezca poco a poco
                      }}
                    >
                      No, gracias
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="mensaje-final">
                <h2>Avy Jorrāelan</h2>
                <p>(Eres mi amor)</p>
              </div>
            )}
          </div>
          <div className="boton-disparo">
            <span>N & E</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartaMedieval;