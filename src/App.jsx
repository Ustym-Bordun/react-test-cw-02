// import { useState, useEffect } from "react";

import "./App.css";

import ChangeTitleBtn from "./components/Button/Button";
import ModalSection from "./components/ModalSection/ModalSection";

function App() {
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(`Interval - ${Date.now()}`);
  //   }, 2000);
  // }, []);

  return (
    <>
      <ChangeTitleBtn />

      {/* Comment */}

      <ModalSection />
    </>
  );
}

export default App;
