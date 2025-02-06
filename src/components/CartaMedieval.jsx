import React, { useState } from "react";
import "./CartaMedieval.css";
import BotonSi from "./BotonSi";  // Asegúrate de importar correctamente el archivo
import BotonNo from "./BotonNo";  // Asegúrate de importar correctamente el archivo

const CartaMedieval = () => {
  const [clicksNo, setClicksNo] = useState(0);
  const [girar, setGirar] = useState(false);
  const [primerClick, setPrimerClick] = useState(false); // Estado para controlar el primer clic

  const handleSiClick = () => {
    if (!primerClick) {
      setGirar(true);
      setPrimerClick(true); // Se marca que ya se hizo el primer clic
    }
  };

  const handleNoClick = () => {
    if (clicksNo < 6) {
      setClicksNo(clicksNo + 1);
    } else {
      setClicksNo(7);
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
                <div className={`botones ${clicksNo >= 7 ? "centrado" : ""}`}>
                  <BotonSi onClick={handleSiClick} />
                  {clicksNo < 7 && (
                    <BotonNo onClick={handleNoClick} clicksNo={clicksNo} />
                  )}
                </div>
              </>
            ) : (
              <div className="mensaje-final">
                <h2>SERÁS LA MUJER MÁS AMADA DEL UNIVERSO</h2>
                <p>Avy Jorrāelan</p>
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
