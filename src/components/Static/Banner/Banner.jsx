import "./Banner.css";

function Banner({ imageSource, headerText, subheaderText }) {
  return (
    <div className="banner-wrapper">
      <img className="banner-image" src={imageSource} />
      <div className="text-wrapper">
        <h1 className="banner-header">{headerText}</h1>
        <p className="banner-subheader">{subheaderText}</p>
      </div>
    </div>
  );
}

export default Banner;
