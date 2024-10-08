import React, { useState } from "react";

import NavBar from "./components/NavBar";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  const [isView, setIsView] = useState(false);
  return (
    <div>
      <NavBar isView={isView} setIsView={setIsView} />
      <Hero isView={isView} />
    </div>
  );
}

export default App;
