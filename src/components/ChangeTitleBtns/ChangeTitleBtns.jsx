import { useState, useEffect } from "react";

import css from "./ChangeTitleBtns.module.css";

const ChangeTitleBtns = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(localStorage.getItem("saved clicks"));

    // console.log(savedClicks);
    if (savedClicks !== null) {
      return Number(savedClicks);
    }
    return 0;
  });

  // Оголошуємо ефект
  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  }, [clicks]);

  useEffect(() => {
    // console.log(`Clicks changed - ${clicks}`);
    localStorage.setItem("saved clicks", JSON.stringify(clicks));
  }, [clicks]);

  // useEffect(() => {
  //   console.log("You can see me only once!");
  // }, []);

  return (
    <div className={css.buttonsWrapper}>
      <button className={css.button} onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>

      <button className={css.button} onClick={() => setClicks(0)}>
        Reset clicks
      </button>
    </div>
  );
};

export default ChangeTitleBtns;
