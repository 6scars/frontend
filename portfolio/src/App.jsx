import "./App.css";
import { Mouse } from "./pages/Mouse.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Footer } from "./pages/Footer.jsx"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="Mouse" element={<Mouse />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
