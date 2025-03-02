import { useEffect, useState } from "react";

// import clsx from "clsx";

import css from "./ModalSection.module.css";

const Modal = () => {
  const [secondsBefore, setSecondsBefore] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);

      setSecondsBefore(secondsBefore + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [secondsBefore]);

  return (
    <div className={css.modalBox}>
      <p className={css.modalWindowText}>Modal</p>

      <p>You opend this modal {secondsBefore} seconds before</p>
      <p>(counts every 1 seconds)</p>
    </div>
  );
};

const ModalSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.modalSection}>
      <button className={css.modalBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"} Modal
      </button>
      <div className={css.containerForModal}>
        <p className={css.modalBoxText}>Window for Modal</p>
        {isOpen && <Modal />}
      </div>
    </div>
  );
};

export default ModalSection;
