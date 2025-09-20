import { Mouse } from "./pages/Mouse.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const MiniSpotify = lazy(() => import("../projects/mini-spotify/src/App.jsx"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="Mouse" element={<Mouse />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/mini-spotify"
            element={
              <Suspense fallback={'<div>xd</div>'}>
                <MiniSpotify />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
