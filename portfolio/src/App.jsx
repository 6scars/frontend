import "./App.css";
import { Mouse } from "./pages/Mouse.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="Mouse" element={<Mouse/>} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
