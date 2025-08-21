// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const goToAmazon = ()=>{
    window.location.href = "/portfolio/amazon"
  };
  return (
      <div>
        <button
          onClick={goToAmazon}
        >go to amazon</button>

      </div>
  );
}

export default App;