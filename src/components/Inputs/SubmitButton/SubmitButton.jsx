import "./SubmitButton.css";

function SubmitButton({ buttonText, clickHandler }) {
  return (
    <div className="submit-button-wrapper">
      <button className="submit-button" onClick={clickHandler}>
        {buttonText}
      </button>
    </div>
  );
}

export default SubmitButton;
