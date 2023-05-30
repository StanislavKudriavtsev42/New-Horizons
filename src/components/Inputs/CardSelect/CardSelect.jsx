import "./CardSelect.css";

function CardSelect({ source, cardLabel, cardClass }) {
  return (
    <div className={cardClass}>
      <img className="card-image" src={source} />
      <p class="card-label">{cardLabel}</p>
    </div>
  );
}

export default CardSelect;
