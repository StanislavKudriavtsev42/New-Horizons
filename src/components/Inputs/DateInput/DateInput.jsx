import "./DateInput.css";
import { useState } from "react";

function DateInput({ labelText, handleChange }) {
  const [inputValue, setInputValue] = useState("");
  const solChange = (event) => {
    let newValue = event.target.value;
    setInputValue(newValue);
    handleChange(newValue);
  };
  return (
    <div className="date-input-wrapper">
      <p className="date-input-label">{labelText}</p>
      <input className="date-input" type="text" onChange={solChange}></input>
    </div>
  );
}

export default DateInput;
