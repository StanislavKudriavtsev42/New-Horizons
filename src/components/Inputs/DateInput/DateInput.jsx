import "./DateInput.css";

function DateInput({ labelText, inputWidth }) {
  const inputStyles = {
    width: inputWidth,
  };
  return (
    <div className="date-input-wrapper">
      <p className="date-input-label">{labelText}</p>
      <input className="date-input" style={inputStyles} type="text"></input>
    </div>
  );
}

export default DateInput;
