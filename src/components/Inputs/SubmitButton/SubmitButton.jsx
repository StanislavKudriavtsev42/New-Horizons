import "./SubmitButton.css";

function SubmitButton({ buttonText }) {
  return (
    <div className="submit-button-wrapper">
      <button className="submit-button">
        {buttonText}
      </button>
    </div>
  );
}

export default SubmitButton;
