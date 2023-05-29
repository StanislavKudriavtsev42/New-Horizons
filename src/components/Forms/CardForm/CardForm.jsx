import React from "react";
import "./CardForm.css";
import Label from "../../Static/Label/Label";

function CardForm(props) {
  return (
    <>
      <div className="card-form-label">
        <Label labelText={props.labelText} />
      </div>
      <div className="card-form">{props.children}</div>
    </>
  );
}

export default CardForm;
