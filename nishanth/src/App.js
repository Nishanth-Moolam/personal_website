import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import AppHome from "./components/home/home";
import AppResume from "./components/resume/resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/resume" element={<AppResume />} />
        {/* <Route path="/contact" element={<div>contact</div>} /> */}

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
