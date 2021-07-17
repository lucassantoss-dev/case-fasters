import React from "react";
import "./style.css";

function CardRepeat({ children, title, description }) {
  return (
    <div className="repeat-container">
      {children}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CardRepeat;
