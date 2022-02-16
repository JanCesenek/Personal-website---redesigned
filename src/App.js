import "./App.scss";
import Page from "./components/Page/Page";
import React, { useState } from "react";

function App() {
  const [shown, setShown] = useState(null);

  const hidePage = () => {
    setShown(false);
  };

  const showPage = () => {
    setShown(true);
  };

  return (
    <div className="App">
      <div className="Align">
        <Page
          type="Five"
          shown={shown}
          pageNumber="One"
          title="Johnny Garlic - royal quality websites"
          firstBubbleTitle="What do I do for living?"
          firstBubbleContent="I make modern, responsive website suited exactly for your needs."
          secondBubbleTitle="Why should you choose me?"
          secondBubbleContent="Lorem ipsum."
          thirdBubbleTitle="How can you contact me?"
          thirdBubbleContent="Lorem ipsum."
          fourthBubbleTitle="What makes me more affordable than the competition on the market?"
          fourthBubbleContent="Lorem ipsum."
          fifthBubbleTitle="How can you be sure I am flexible and will make you any website that you need?"
          fifthBubbleContent="Lorem ipsum."
          showPage={showPage}
          hidePage={hidePage}
        />
        <Page
          type="Six"
          shown={shown === null ? false : shown}
          pageNumber="Two"
          title="My web designs"
          firstBubbleTitle="Design 1"
          firstBubbleContent="Answer 1"
          secondBubbleTitle="Design 2"
          secondBubbleContent="Answer 2"
          thirdBubbleTitle="Design 3"
          thirdBubbleContent="Answer 3"
          fourthBubbleTitle="Design 4"
          fourthBubbleContent="Answer 4"
          fifthBubbleTitle="Design 5"
          fifthBubbleContent="Answer 5"
          sixthBubbleTitle="Design 6"
          sixthBubbleContent="Answer 6"
          showPage={showPage}
          hidePage={hidePage}
        />
        <Page
          type="Six"
          shown={shown === null ? false : shown}
          pageNumber="Three"
          title="My applications"
          firstBubbleTitle="Application 1"
          firstBubbleContent="Answer 1"
          secondBubbleTitle="Application 2"
          secondBubbleContent="Answer 2"
          thirdBubbleTitle="Application 3"
          thirdBubbleContent="Answer 3"
          fourthBubbleTitle="Application 4"
          fourthBubbleContent="Answer 4"
          fifthBubbleTitle="Application 5"
          fifthBubbleContent="Answer 5"
          sixthBubbleTitle="Application 6"
          sixthBubbleContent="Answer 6"
          showPage={showPage}
          hidePage={hidePage}
        />
      </div>
    </div>
  );
}

export default App;
