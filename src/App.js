import "./App.scss";
import Page from "./components/Page/Page";
import React, { useState } from "react";

function App() {
  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);

  const setFirst = () => {
    setFirstPage(!firstPage);
  };

  const setSecond = () => {
    setSecondPage(!secondPage);
  };

  const setThird = () => {
    setThirdPage(!thirdPage);
  };

  return (
    <div className="App">
      <div className="Align">
        <Page
          type="Five"
          pageNumber="One"
          title="Johnny Garlic - modern websites suited for your needs"
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
          firstPage={firstPage}
          secondPage={secondPage}
          thirdPage={thirdPage}
          changeFirstPage={setFirst}
          changeSecondPage={setSecond}
          changeThirdPage={setThird}
        />
      </div>
      <div className="Align">
        <Page
          type="Six"
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
          firstPage={firstPage}
          secondPage={secondPage}
          thirdPage={thirdPage}
          changeFirstPage={setFirst}
          changeSecondPage={setSecond}
          changeThirdPage={setThird}
        />
      </div>
      <div className="Align">
        <Page
          type="Six"
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
          firstPage={firstPage}
          secondPage={secondPage}
          thirdPage={thirdPage}
          changeFirstPage={setFirst}
          changeSecondPage={setSecond}
          changeThirdPage={setThird}
        />
      </div>
    </div>
  );
}

export default App;
