import Label from "../../Static/Label/Label";
import "./LabeledForm.css";

function LabeledForm(props) {
  return (
    <div className="labeled-form">
      <div className="label-wrapper">
        <Label labelText={props.labelText} />
      </div>
      <div className="input-wrapper">{props.children}</div>
    </div>
  );
}

export default LabeledForm;
