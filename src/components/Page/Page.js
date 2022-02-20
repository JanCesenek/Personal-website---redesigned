import React, { useState } from "react";
import classes from "./Page.module.scss";
import Bubble from "../Bubble/Bubble";

const Page = (props) => {
  const five = `${classes.AllBubbles} ${classes.AllBubbles__Five}`;
  const six = `${classes.AllBubbles} ${classes.AllBubbles__Six}`;

  const pageIdentifier0 = props.pageNumber === "Two" ? props.secondPage : props.thirdPage;
  const pageIdentifier = props.pageNumber === "One" ? props.firstPage : pageIdentifier0;

  const pageClasses = `${classes.Page} ${!pageIdentifier && classes.Hidden}`;

  const dynamicBubble =
    props.type === "Five"
      ? classes.Hidden
      : `${classes.AllBubbles__6thBubble} ${classes.AllBubbles__SingleBubble} ${classes.AllBubbles__RightAnimation}`;

  const [hidden, setHidden] = useState(false);

  const hideBubble = () => {
    setHidden(true);
  };

  const showBubble = () => {
    setHidden(false);
  };

  const leftArrowRule = () => {
    if (props.pageNumber === "One") {
      props.changeFirstPage();
      props.changeThirdPage();
    } else if (props.pageNumber === "Two") {
      props.changeSecondPage();
      props.changeFirstPage();
    } else if (props.pageNumber === "Three") {
      props.changeThirdPage();
      props.changeSecondPage();
    }
  };

  const rightArrowRule = () => {
    if (props.pageNumber === "One") {
      props.changeFirstPage();
      props.changeSecondPage();
    } else if (props.pageNumber === "Two") {
      props.changeSecondPage();
      props.changeThirdPage();
    } else if (props.pageNumber === "Three") {
      props.changeThirdPage();
      props.changeFirstPage();
    }
  };

  return (
    <div className={pageClasses}>
      <div className={`${classes.Title} ${classes.AllBubbles__CenterAnimation}`}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.ArrowContainer}>
        <div className={classes.ArrowContainer__Left} onClick={leftArrowRule}>
          &#10094;
        </div>
        <div className={classes.ArrowContainer__Right} onClick={rightArrowRule}>
          &#10095;
        </div>
      </div>
      <div className={props.type === "Five" ? five : six}>
        <div
          className={`${classes.AllBubbles__1stBubble} ${classes.AllBubbles__SingleBubble} ${classes.AllBubbles__LeftAnimation}`}>
          <Bubble
            title={props.firstBubbleTitle}
            content={props.firstBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        <div
          className={`${classes.AllBubbles__2ndBubble} ${classes.AllBubbles__SingleBubble} ${classes.AllBubbles__RightAnimation}`}>
          <Bubble
            title={props.secondBubbleTitle}
            content={props.secondBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        <div
          className={`${classes.AllBubbles__3rdBubble} ${classes.AllBubbles__SingleBubble} ${
            props.type === "Five"
              ? classes.AllBubbles__CenterAnimation
              : classes.AllBubbles__LeftAnimation
          }`}>
          <Bubble
            title={props.thirdBubbleTitle}
            content={props.thirdBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        <div
          className={`${classes.AllBubbles__4thBubble} ${classes.AllBubbles__SingleBubble} ${
            props.type === "Five"
              ? classes.AllBubbles__LeftAnimation
              : classes.AllBubbles__RightAnimation
          }`}>
          <Bubble
            title={props.fourthBubbleTitle}
            content={props.fourthBubbleContent}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        <div
          className={`${classes.AllBubbles__5thBubble} ${classes.AllBubbles__SingleBubble} ${
            props.type === "Five"
              ? classes.AllBubbles__RightAnimation
              : classes.AllBubbles__LeftAnimation
          }`}>
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
