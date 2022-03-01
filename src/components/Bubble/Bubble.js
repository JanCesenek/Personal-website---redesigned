import React, { useState } from "react";
import classes from "./Bubble.module.scss";
import Stargate from "../../imgs/Stargate.png";

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
      <p className={backPartRule}>
        {props?.content}
        <br />
        {props.contact && (
          <span>
            <i className="fas fa-envelope"></i>
            jan.cesenekCZ@gmail.com
            <br />
            <i className="fas fa-phone"></i>
            +420 773 140 855
          </span>
        )}
        {props.link && (
          <a href={process.env.PUBLIC_URL + props.link} target="_blank" rel="noreferrer">
            <img src={Stargate} alt="link" className={classes.Link} />
          </a>
        )}
      </p>
    </div>
  );
};

export default Bubble;
