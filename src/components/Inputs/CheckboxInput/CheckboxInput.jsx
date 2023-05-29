import "./CheckboxInput.css";

function CheckboxInput({ text }) {
  return (
    <div className="checkbox-input-wrapper">
      <input className="checkbox-input" type="checkbox"></input>
      <p className="checkbox-text">{text}</p>
    </div>
  );
}

export default CheckboxInput;
