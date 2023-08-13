import Banner from "../Static/Banner/Banner";
import CardSelect from "../Inputs/CardSelect/CardSelect";
import CardForm from "../Forms/CardForm/CardForm";
import LabeledForm from "../Forms/LabeledForm/LabeledForm";
import CheckboxInput from "../Inputs/CheckboxInput/CheckboxInput";
import DateInput from "../Inputs/DateInput/DateInput";
import SubmitButton from "../Inputs/SubmitButton/SubmitButton";
import ImageContainer from "../Inputs/Presentation/ImageContainer";

function RoverAPIView({
  ids,
  handleRoverSelect,
  handleInstrumentSelect,
  handleRequest,
  images,
  handleSolChange,
}) {
  return (
    <>
      <Banner
        imageSource={"public/images/mars.png"}
        headerText={"Mars Rover Photo API"}
        subheaderText={
          "Discover the fascinating world of Mars through rover photos from prominent NASA missions"
        }
      />
      <CardForm className="card-form" labelText="Select missions">
        <CardSelect
          id={"spirit"}
          cardClass={"card-left"}
          source={"public/images/spirit.jpg"}
          cardLabel="Spirit"
          handleSelect={handleRoverSelect}
        />
        <CardSelect
          id={"opportunity"}
          cardClass={"card-right"}
          source={"public/images/opportunity.jpg"}
          cardLabel="Opportunity"
          handleSelect={handleRoverSelect}
        />
        <CardSelect
          id={"curiosity"}
          cardClass={"card-left"}
          source={"public/images/curiosity.jpg"}
          cardLabel="Curiosity"
          handleSelect={handleRoverSelect}
        />
        <CardSelect
          id={"perseverance"}
          cardClass={"card-right"}
          source={"public/images/preseverance.jpg"}
          cardLabel="Perseverance"
          handleSelect={handleRoverSelect}
        />
      </CardForm>
      <LabeledForm labelText={"Instruments"}>
        {ids.length === 0 && (
          <div className="form-subtext">
            Select at least one mission to see available instruments
          </div>
        )}

        {ids.some((item) => item.match(/spirit|opportunity|curiosity/)) && (
          <>
            <CheckboxInput
              id={"fhaz"}
              text={"Front Hazard Avoidance Camera"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"rhaz"}
              text={"Rear Hazard Avoidance Camera"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"chemcam"}
              text={"Chemistry and Camera Complex"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"mahli"}
              text={"Mars Hand Lens Imager"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"mardi"}
              text={"Mars Descent Imager"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"navcam"}
              text={"Navigation Camera"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"pancam"}
              text={"Panoramic Camera"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"mast"}
              text={"Mast Camera"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"minites"}
              text={"Miniature Thermal Emission Spectrometer (Mini-TES)"}
              handleChange={handleInstrumentSelect}
            />
          </>
        )}
        {ids.includes("perseverance") && (
          <>
            <CheckboxInput
              id={"edl_rucam"}
              text={"Rover Up-Look Camera"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"edl_rdcam"}
              text={"Rover Down-Look Camera"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"edl_ddcam"}
              text={"Descent Stage Down-Look Camera"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"edl_pucam1"}
              text={"Parachute Up-Look Camera A"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"edl_pucam2"}
              text={"Parachute Up-Look Camera B"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"navcam_left"}
              text={"Navigation Camera - Left"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"navcam_right"}
              text={"Navigation Camera - Right"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"mcz_right"}
              text={"Mast Camera Zoom - Right"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"mcz_left"}
              text={"Mast Camera Zoom - Left"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"front_hazcam_left_a"}
              text={"Front Hazard Avoidance Camera - Left"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"front_hazcam_left_b"}
              text={"Front Hazard Avoidance Camera - Right"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"rear_hazcam_left"}
              text={"Rear Hazard Avoidance Camera - Left"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"rear_hazcam_right"}
              text={"Rear Hazard Avoidance Camera - Right"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"skycam"}
              text={"MEDA Skycam"}
              handleChange={handleInstrumentSelect}
            />
            <CheckboxInput
              id={"sherloc_watson"}
              text={"SHERLOC WATSON Camera"}
              handleChange={handleInstrumentSelect}
            />
          </>
        )}
      </LabeledForm>
      <LabeledForm labelText={"Photo date"}>
        <DateInput labelText="Martian Sol" handleChange={handleSolChange} />
        {/*TODO: <DateInput labelText="Earth Date" />*/}
      </LabeledForm>
      <SubmitButton buttonText={"Search"} clickHandler={handleRequest} />
      <div style={{ height: 100 }}></div>
      {/* TODO: remove div*/}
      <ImageContainer images={images}></ImageContainer>
    </>
  );
}

export default RoverAPIView;
