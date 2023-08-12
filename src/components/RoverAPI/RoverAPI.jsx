import Banner from "../Static/Banner/Banner";
import CardSelect from "../Inputs/CardSelect/CardSelect";
import CardForm from "../Forms/CardForm/CardForm";
import LabeledForm from "../Forms/LabeledForm/LabeledForm";
import CheckboxInput from "../Inputs/CheckboxInput/CheckboxInput";
import DateInput from "../Inputs/DateInput/DateInput";
import SubmitButton from "../Inputs/SubmitButton/SubmitButton";
import { useState } from "react";

function RoverAPI() {
  const [selectedCardIds, setSelectedCardId] = useState([]);

  function handleSelect(id) {
    if (selectedCardIds.includes(id))
      setSelectedCardId(selectedCardIds.filter((element) => element != id));
    else setSelectedCardId([...selectedCardIds, id]);
  }

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
          id={"spirit"}
          cardClass={"card-left"}
          source={"public/images/spirit.jpg"}
          cardLabel="Spirit"
          handleSelect={handleSelect}
        />
        <CardSelect
          id={"opportunity"}
          cardClass={"card-right"}
          source={"public/images/opportunity.jpg"}
          cardLabel="Opportunity"
          handleSelect={handleSelect}
        />
        <CardSelect
          id={"curiosity"}
          cardClass={"card-left"}
          source={"public/images/curiosity.jpg"}
          cardLabel="Curiosity"
          handleSelect={handleSelect}
        />
        <CardSelect
          id={"perseverance"}
          cardClass={"card-right"}
          source={"public/images/preseverance.jpg"}
          cardLabel="Perseverance"
          handleSelect={handleSelect}
        />
      </CardForm>
      <LabeledForm labelText={"Instruments"}>
        {selectedCardIds.length === 0 && (
          <div className="form-subtext">
            Select one of the missions to see available instruments
          </div>
        )}
        {selectedCardIds.length > 0 && (
          <>
            {selectedCardIds.some((item) =>
              item.match(/spirit|opportunity|curiosity/)
            ) && (
              <>
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
              </>
            )}
            {selectedCardIds.includes("perseverance") && (
              <>
                <CheckboxInput text={"Rover Up-Look Camera"} />
                <CheckboxInput text={"Rover Down-Look Camera"} />
                <CheckboxInput text={"Descent Stage Down-Look Camera"} />
                <CheckboxInput text={"Parachute Up-Look Camera A"} />
                <CheckboxInput text={"Parachute Up-Look Camera B"} />
                <CheckboxInput text={"Navigation Camera - Left"} />
                <CheckboxInput text={"Navigation Camera - Right"} />
                <CheckboxInput text={"Mast Camera Zoom - Right"} />
                <CheckboxInput text={"Mast Camera Zoom - Left"} />
                <CheckboxInput text={"Front Hazard Avoidance Camera - Left"} />
                <CheckboxInput text={"Front Hazard Avoidance Camera - Right"} />
                <CheckboxInput text={"Rear Hazard Avoidance Camera - Left"} />
                <CheckboxInput text={"Rear Hazard Avoidance Camera - Right"} />
                <CheckboxInput text={"MEDA Skycam"} />
                <CheckboxInput text={"SHERLOC WATSON Camera"} />
              </>
            )}
          </>
        )}
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
