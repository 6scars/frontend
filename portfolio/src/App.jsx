import { Mouse } from "./pages/Mouse.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import  MiniSpotify  from "../projects/mini-spotify/src/App.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="Mouse" element={<Mouse />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/mini-spotify" element ={<MiniSpotify />}
          />
        </Routes>
      </Router>

    </>
  );
}

export default App;
