import React, { useState, useEffect } from "react";

// Prosty, niezawodny spotlight (latarka) - działa od razu po wklejeniu
// Skopiuj ten plik do src/App.jsx lub zamień zawartość swojego App.jsx

export  function Mouse() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e) => {
      // clientX/clientY -> współrzędne względem viewportu (dla position: fixed)
      setPos({ x: e.clientX, y: e.clientY });
    };

    // Nasłuchujemy na window, żeby działało nawet poza konkretnym kontenerem
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
      {/* Treść aplikacji - możesz tu dodać cokolwiek */}
      <div style={{ color: "white", padding: 24 }}>Przykładowa treść pod latarką</div>

      {/* Spotlight - fixed względem viewportu */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: "translate(-50%, -50%)",
          width: 120,
          height: 120,
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 65%)",
            zIndex:"20"
        }}
      />

      <div style={{position:"relative", zIndex: "50", color:"black", backgroundColor:"transparent"}}>hello</div>
    </div>
  );
}
