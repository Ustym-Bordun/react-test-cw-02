import { useState, useEffect } from "react";

import css from "./Button.module.css";

const ChangeTitleBtn = () => {
  const [clicks, setClicks] = useState(0);

  // Оголошуємо ефект
  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  }, [clicks]);

  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  return (
    <button className={css.button} onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};

export default ChangeTitleBtn;
