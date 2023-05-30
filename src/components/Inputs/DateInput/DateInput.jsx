import "./DateInput.css";

function DateInput({ labelText }) {
  return (
    <div className="date-input-wrapper">
      <p className="date-input-label">{labelText}</p>
      <input className="date-input" type="text"></input>
    </div>
  );
}

export default DateInput;
