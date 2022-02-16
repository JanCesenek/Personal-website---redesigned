import React, { useState } from "react";
import classes from "./Bubble.module.scss";

const Bubble = (props) => {
  const [hovered, setHovered] = useState(false);

  const frontPartRule = hovered ? classes.BackPart : classes.FrontPart;
  const backPartRule = hovered ? classes.FrontPart : classes.BackPart;

  const containerRule =
    !hovered && props.visibilityStatus
      ? `${classes.Container} ${classes.Hidden}`
      : classes.Container;

  const enterAnimation = () => {
    setHovered(true);
    props.hideBubble();
  };

  const exitAnimation = () => {
    setHovered(false);
    props.showBubble();
  };

  return (
    <div className={containerRule} onMouseEnter={enterAnimation} onMouseLeave={exitAnimation}>
      <h1 className={frontPartRule}>{props.title}</h1>
      <p className={backPartRule}>{props.content}</p>
    </div>
  );
};

export default Bubble;
