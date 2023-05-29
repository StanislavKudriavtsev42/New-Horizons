import "./SubmitButton.css";

function SubmitButton({ buttonText, fontSize }) {
  const buttonStyles = {
    fontSize: fontSize,
  };
  return (
    <div className="submit-button-wrapper">
      <button className="submit-button" style={buttonStyles}>
        {buttonText}
      </button>
    </div>
  );
}

export default SubmitButton;
