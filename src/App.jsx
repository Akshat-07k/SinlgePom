import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InputFile } from "./InputFile";
import DisplayPage from "./DisplayPage"; // Assuming you have a DisplayPage component
import { Compare } from "./Compare";
import { CompareDisplay } from "./CompareDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<InputFile />} />
        <Route path={`/display`} element={<DisplayPage />} />
        <Route path={`/compare`} element={<Compare />} />
        <Route path={`/compareDisplay`} element={<CompareDisplay/>}/>
      </Routes>
    </Router>
  );
}

export default App;
