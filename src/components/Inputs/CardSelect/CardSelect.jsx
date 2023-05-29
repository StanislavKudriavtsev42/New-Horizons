import "./CardSelect.css";

function CardSelect({ imageWidth, imageHeight, source, cardLabel, cardClass }) {
  const imageStyles = {
    width: imageWidth,
    height: imageHeight,
  };

  return (
    <div className={cardClass}>
      <img className="card-image" src={source} style={imageStyles} />
      <p class="card-label">{cardLabel}</p>
    </div>
  );
}

export default CardSelect;
