import "./ImageContainer.css";

function ImageContainer({ images }) {
  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img className="rover-image" key={index} src={image.img_src} />
      ))}
    </div>
  );
}

export default ImageContainer;
