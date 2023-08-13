import { useState } from "react";
import "./CardSelect.css";

function CardSelect({ id, source, cardLabel, cardClass, handleSelect }) {
  let [selected, setSelected] = useState(false);

  function onSelect() {
    setSelected(!selected);
    handleSelect(id);
  }

  return (
    <div className={cardClass} onClick={onSelect}>
      <img
        className={`card-image ${selected ? "selected" : ""}`}
        src={source}
      />
      <p className="card-label">{cardLabel}</p>
    </div>
  );
}

export default CardSelect;
