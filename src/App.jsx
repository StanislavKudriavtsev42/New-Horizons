import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts.css";
import RoverAPI from "./components/RoverAPI/RoverAPIContainer.jsx";

function App() {
  return (
    <>
      <Routes>
        {/*<Route path="/" element={<img />} />*/}
        <Route path="/" element={<RoverAPI></RoverAPI>} />
      </Routes>
      {/* <ul>
        <li>
          <Link to="/">Model</Link>
        </li>
        <li>
          <Link to="/rovers">Rovers</Link>
        </li>
      </ul> */}
    </>
  );
}

export default App;
