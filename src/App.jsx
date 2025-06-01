import React from "react";
import LandingPage from "./components/LandingPage";
import { useEffect } from "react";

function App() {
  fetch('https://backend-repo-grk7.onrender.com//register-visit', { method: 'POST' });
  return (
      <LandingPage />;
  );
}

export default App;
