import React from "react";
import LandingPage from "./components/LandingPage";
import { useEffect } from "react";

function App() {
  fetch('https://backend-repo-grk7.onrender.com/registrar-visita', { method: 'POST' });
  fetch('https://backend-repo-grk7.onrender.com/registrar-interesse', { method: 'POST' });
  return (
    <div>
      <LandingPage />;
    </div>
  );
}

export default App;
