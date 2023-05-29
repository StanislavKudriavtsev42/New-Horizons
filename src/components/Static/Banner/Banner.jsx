import "./Banner.css";

function Banner({
  bannerHeight,
  imageSource,
  headerFontSize,
  subheaderFontSize,
  headerText,
  subheaderText,
}) {
  const bannerStyles = {
    height: bannerHeight,
  };
  const headerStyles = {
    fontSize: headerFontSize,
  };
  const subheaderStyles = {
    fontSize: subheaderFontSize,
  };
  return (
    <div className="banner-wrapper" style={bannerStyles}>
      <img className="banner-image" src={imageSource} />
      <div className="text-wrapper">
        <h1 className="banner-header" style={headerStyles}>
          {headerText}
        </h1>
        <p className="banner-subheader" style={subheaderStyles}>
          {subheaderText}
        </p>
      </div>
    </div>
  );
}

export default Banner;
