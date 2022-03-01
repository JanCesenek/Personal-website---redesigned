import React, { useEffect, useState } from "react";
import classes from "./Page.module.scss";
import Bubble from "../Bubble/Bubble";
import { Link } from "react-router-dom";

const Page = (props) => {
  const [animation, setAnimation] = useState(true);
  /* Checking whether the page has five or six <Bubble /> components */
  const defaultPageCheck = props.type === "Five";
  const animationCheck = props.type === "Five" && animation;
  const five = `${classes.AllBubbles} ${classes.AllBubbles__Five}`;
  const six = `${classes.AllBubbles} ${classes.AllBubbles__Six}`;

  const pageNo = props.pageNumber;

  const firstPageMatch = pageNo === "One";
  const secondPageMatch = pageNo === "Two";
  const thirdPageMatch = pageNo === "Three";

  /* Hide the 6th bubble if there's supposed to be only five or them, otherwise display it */
  const dynamicBubble = defaultPageCheck
    ? classes.Hidden
    : `${classes.AllBubbles__6thBubble} ${classes.AllBubbles__SingleBubble}`;

  /* Controling the state of a hovered bubble - if hovered, it gains in size and the others disappear */
  const [hidden, setHidden] = useState(false);

  const hideBubble = () => {
    setHidden(true);
  };

  const showBubble = () => {
    setHidden(false);
  };

  /* Conditionally setting the URL of the page */
  const [url, setUrl] = useState("/");

  const leftArrowRule = () => {
    if (firstPageMatch) {
      setUrl("/apps");
    } else if (secondPageMatch) {
      setUrl("/");
    } else if (thirdPageMatch) {
      setUrl("/designs");
    }
  };

  const rightArrowRule = () => {
    if (firstPageMatch) {
      setUrl("/designs");
    } else if (secondPageMatch) {
      setUrl("/apps");
    } else if (thirdPageMatch) {
      setUrl("/");
    }
  };

  useEffect(() => {
    return;
  });

  return (
    <div className={classes.Page}>
      {/* Title */}
      <div className={`${classes.Title} ${animationCheck && classes.AllBubbles__CenterAnimation}`}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.ArrowContainer}>
        <div className={classes.ArrowContainer__Left}>
          <Link
            className={classes.Link}
            to={url}
            onMouseEnter={leftArrowRule}
            onClick={() => setAnimation(false)}>
            &#10094;
          </Link>
        </div>
        <div className={classes.ArrowContainer__Right}>
          <Link
            className={classes.Link}
            to={url}
            onMouseEnter={rightArrowRule}
            onClick={() => setAnimation(false)}>
            &#10095;
          </Link>
        </div>
      </div>
      <div className={defaultPageCheck ? five : six}>
        {/* 1st bubble */}
        <div
          className={`${classes.AllBubbles__1stBubble} ${classes.AllBubbles__SingleBubble} ${
            animationCheck && classes.AllBubbles__LeftAnimation
          }`}>
          <Bubble
            title={props.firstBubbleTitle}
            content={props.firstBubbleContent}
            link={props.firstLink}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        {/* 2nd bubble */}
        <div
          className={`${classes.AllBubbles__2ndBubble} ${classes.AllBubbles__SingleBubble} ${
            animationCheck && classes.AllBubbles__RightAnimation
          }`}>
          <Bubble
            title={props.secondBubbleTitle}
            content={props.secondBubbleContent}
            link={props.secondLink}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        {/* 3rd bubble */}
        <div
          className={`${classes.AllBubbles__3rdBubble} ${classes.AllBubbles__SingleBubble} ${
            animationCheck && classes.AllBubbles__CenterAnimation
          }`}>
          <Bubble
            title={props.thirdBubbleTitle}
            contact={props.contact}
            content={props.thirdBubbleContent}
            link={props.thirdLink}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        {/* 4th bubble */}
        <div
          className={`${classes.AllBubbles__4thBubble} ${classes.AllBubbles__SingleBubble} ${
            animationCheck && classes.AllBubbles__LeftAnimation
          }`}>
          <Bubble
            title={props.fourthBubbleTitle}
            content={props.fourthBubbleContent}
            link={props.fourthLink}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        {/* 5th bubble */}
        <div
          className={`${classes.AllBubbles__5thBubble} ${classes.AllBubbles__SingleBubble} ${
            animationCheck && classes.AllBubbles__RightAnimation
          }`}>
          <Bubble
            title={props.fifthBubbleTitle}
            content={props.fifthBubbleContent}
            link={props.fifthLink}
            visibilityStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
          />
        </div>
        {/* 6th bubble */}
        <div className={dynamicBubble}>
          <Bubble
            title={props.sixthBubbleTitle}
            content={props.sixthBubbleContent}
            link={props.sixthLink}
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
