import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InputFile } from "./InputFile";
import DisplayPage from "./DisplayPage"; // Assuming you have a DisplayPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<InputFile />} />
        <Route path={`/display`} element={<DisplayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
