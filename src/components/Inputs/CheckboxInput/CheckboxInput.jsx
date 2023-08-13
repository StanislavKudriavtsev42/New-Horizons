import "./CheckboxInput.css";

function CheckboxInput({ id, text, handleChange }) {
  function instrumentChanged() {
    handleChange(id);
  }
  return (
    <div className="checkbox-input-wrapper">
      <input
        className="checkbox-input"
        type="checkbox"
        onChange={instrumentChanged}
      ></input>
      <p className="checkbox-text">{text}</p>
    </div>
  );
}

export default CheckboxInput;
