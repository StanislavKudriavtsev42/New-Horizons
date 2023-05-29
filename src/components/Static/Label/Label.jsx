import "./Label.css";

function Label({ labelText }) {
  return (
    <div className="label-background">
      <p className="label-text">{labelText}</p>
    </div>
  );
}

export default Label;
