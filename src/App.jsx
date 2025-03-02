// import { useState, useEffect } from "react";

import "./App.css";

import ChangeTitleBtns from "./components/ChangeTitleBtns/ChangeTitleBtns";
import ModalSection from "./components/ModalSection/ModalSection";

function App() {
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(`Interval - ${Date.now()}`);
  //   }, 2000);
  // }, []);

  return (
    <>
      <ChangeTitleBtns />

      {/* Comment */}

      <ModalSection />
    </>
  );
}

export default App;
