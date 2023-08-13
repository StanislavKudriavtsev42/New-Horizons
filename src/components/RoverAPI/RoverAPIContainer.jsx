import { useState } from "react";
import RoverAPIView from "./RoverAPIView";
import requestPhotos from "./services";

function RoverAPIContainer() {
  const [selectedRoverIds, setSelectedRoverId] = useState([]);
  const [selectedInstrumentIds, setSelectedInstrumentId] = useState([]);
  let [images, setImages] = useState([]);
  let [sol, setSol] = useState(0);

  function handleInstrumentSelect(id) {
    if (selectedInstrumentIds.includes(id))
      setSelectedInstrumentId(
        selectedInstrumentIds.filter((element) => element != id)
      );
    else setSelectedInstrumentId([...selectedInstrumentIds, id]);
    console.log(id);
  }

  function handleRoverSelect(id) {
    if (selectedRoverIds.includes(id))
      setSelectedRoverId(
        selectedInstrumentIds.filter((element) => element != id)
      );
    else setSelectedRoverId([...selectedRoverIds, id]);
  }

  async function sendRequest() {
    setImages(
      await requestPhotos(selectedRoverIds, selectedInstrumentIds, sol)
    );
  }

  function handleSolChange(newSol) {
    setSol(newSol);
  }

  return (
    <RoverAPIView
      ids={selectedRoverIds}
      handleRoverSelect={handleRoverSelect}
      handleInstrumentSelect={handleInstrumentSelect}
      handleRequest={sendRequest}
      images={images}
      handleSolChange={handleSolChange}
    />
  );
}

export default RoverAPIContainer;
