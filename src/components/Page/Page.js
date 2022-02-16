import React, { useState } from "react";
import classes from "./Page.module.scss";
import Bubble from "../Bubble/Bubble";

const Page = (props) => {
  const five = `${classes.AllBubbles} ${classes.AllBubbles__Five}`;
  const six = `${classes.AllBubbles} ${classes.AllBubbles__Six}`;

  const dynamicBubble =
    props.type === "Five"
      ? classes.Hidden
      : `${classes.AllBubbles__6thBubble} ${classes.AllBubbles__SingleBubble}`;

  const [hidden, setHidden] = useState(false);

  const hideBubble = () => {
    setHidden(true);
  };

  const showBubble = () => {
    setHidden(false);
  };

  const leftArrowRule = () => {
    if (props.pageNumber === "One") {
      props.hidePage();
    }
  };

  return (
    <div className={props.shown === true || props.shown === null ? classes.Page : classes.Hidden}>
      <div className={classes.Title}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.ArrowContainer}>
        <div className={classes.ArrowContainer__Left} onClick={leftArrowRule}>
          &#10094;
        </div>
        <div className={classes.ArrowContainer__Right}>&#10095;</div>
      </div>
      <div className={props.type === "Five" ? five : six}>
        <div className={`${classes.AllBubbles__1stBubble} ${classes.AllBubbles__SingleBubble}`}>
          <Bubble
            title={props.firstBubbleTitle}
            content={props.firstBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        <div className={`${classes.AllBubbles__2ndBubble} ${classes.AllBubbles__SingleBubble}`}>
          <Bubble
            title={props.secondBubbleTitle}
            content={props.secondBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        <div className={`${classes.AllBubbles__3rdBubble} ${classes.AllBubbles__SingleBubble}`}>
          <Bubble
            title={props.thirdBubbleTitle}
            content={props.thirdBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        <div className={`${classes.AllBubbles__4thBubble} ${classes.AllBubbles__SingleBubble}`}>
          <Bubble
            title={props.fourthBubbleTitle}
            content={props.fourthBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        <div className={`${classes.AllBubbles__5thBubble} ${classes.AllBubbles__SingleBubble}`}>
          <Bubble
            title={props.fifthBubbleTitle}
            content={props.fifthBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        <div className={dynamicBubble}>
          <Bubble
            title={props.sixthBubbleTitle}
            content={props.sixthBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
