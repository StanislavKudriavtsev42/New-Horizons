import Banner from "../Static/Banner/Banner";
import CardSelect from "../Inputs/CardSelect/CardSelect";
import CardForm from "../Forms/CardForm/CardForm";
import LabeledForm from "../Forms/LabeledForm/LabeledForm";
import CheckboxInput from "../Inputs/CheckboxInput/CheckboxInput";
import DateInput from "../Inputs/DateInput/DateInput";
import SubmitButton from "../Inputs/SubmitButton/SubmitButton";

function RoverAPI() {
  return (
    <>
      <Banner
        imageSource={"public/images/mars.png"}
        headerText={"Mars Rover Photo API"}
        subheaderText={
          "Discover the fascinating world of Mars through rover photos from prominent NASA missions"
        }
      />
      <CardForm className="card-form" labelText="Select mission">
        <CardSelect
          cardClass={"card-left"}
          source={"public/images/spirit.jpg"}
          cardLabel="Spirit"
        />
        <CardSelect
          cardClass={"card-right"}
          source={"public/images/opportunity.jpg"}
          cardLabel="Opportunity"
        />
        <CardSelect
          cardClass={"card-left"}
          source={"public/images/curiosity.jpg"}
          cardLabel="Curiosity"
        />
        <CardSelect
          cardClass={"card-right"}
          source={"public/images/preseverance.jpg"}
          cardLabel="Preseverance"
        />
      </CardForm>
      <LabeledForm labelText={"Instruments"}>
        <CheckboxInput text={"Front Hazard Avoidance Camera"} />
        <CheckboxInput text={"Rear Hazard Avoidance Camera"} />
        <CheckboxInput text={"Chemistry and Camera Complex"} />
        <CheckboxInput text={"Mars Hand Lens Imager"} />
        <CheckboxInput text={"Mars Descent Imager"} />
        <CheckboxInput text={"Navigation Camera"} />
        <CheckboxInput text={"Panoramic Camera"} />
        <CheckboxInput text={"Mast Camera"} />
        <CheckboxInput
          text={"Miniature Thermal Emission Spectrometer (Mini-TES)"}
        />
      </LabeledForm>
      <LabeledForm labelText={"Photo date"}>
        <DateInput labelText="Martian Sol" />
        <DateInput labelText="Earth Date" />
      </LabeledForm>
      <SubmitButton buttonText={"Search"} />
      <div style={{ height: 100 }}></div>
      {/* TODO: remove div*/}
    </>
  );
}

export default RoverAPI;
