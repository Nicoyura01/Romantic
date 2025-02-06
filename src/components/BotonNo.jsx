import React from "react";

const BotonNo = ({ onClick, clicksNo }) => {
  return (
    <button
      className="btn-no"
      onClick={onClick}
      style={{
        transform: `scale(${1 - clicksNo * 0.15})`, 
        opacity: Math.max(0, 1 - clicksNo * 0.15),
        pointerEvents: clicksNo >= 7 ? "none" : "auto", 
      }}
    >
      No, gracias
    </button>
  );
};

export default BotonNo;
