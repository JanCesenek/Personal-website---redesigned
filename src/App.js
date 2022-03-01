import "./App.scss";
import Page from "./components/Page/Page";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Align">
        <Routes>
          <Route
            path="/"
            element={
              <Page
                type="Five"
                pageNumber="One"
                title="Johnny Garlic - Unique websites tailored for your needs"
                firstBubbleTitle="What do I do for living?"
                firstBubbleContent="I make modern, responsive website suited exactly for your needs."
                secondBubbleTitle="Why should you choose me?"
                secondBubbleContent="Although I don't have an IT degree, I have started from scratch in August 2020
                learning online on my own without any prior knowledge and since then have made
                enormous progress. I had to make several times more effort than any web developer
                with a degree to get to this level so quickly. I spend several hours a day working
                on my projects as well as gaining additional knowledge through online courses."
                thirdBubbleTitle="How can you contact me?"
                fourthBubbleTitle="What makes me more affordable than the competition on the market?"
                fourthBubbleContent="I don't have a lot of experience, therefore don't charge too much money. I might
                take a little bit more time than more experienced competition, but I will do the
                same job for less money."
                fifthBubbleTitle="How can you be sure I am flexible and will make you any website that you need?"
                fifthBubbleContent="Why don't you just take a look? Just click on the next page to see some of my finished projects."
                contact
              />
            }
          />
          <Route
            path="/designs"
            element={
              <Page
                type="Six"
                pageNumber="Two"
                title="My projects - web designs"
                firstBubbleTitle="Travelling blog"
                firstBubbleContent="My first website ever. Simple blog about studying abroad, especially focused on
                  the UK. As it was previously aimed to be deployed, but eventually left unfinished,
                  this is the only website without lorem ipsum (randomly generated text).
                  Note: The only thing unfinished about the project is the content, which is not
                    important for design purposes, therefore some information is not verified!"
                secondBubbleTitle="Chulak junk shop"
                secondBubbleContent="A toy project - fictional junk shop based on my most favourite TV show Stargate.
                  Uninitiated will probably not understand the content, but it's the design that
                  matters, right?"
                thirdBubbleTitle="Plumbing services"
                thirdBubbleContent="Design made for any self-employed plumber."
                fourthBubbleTitle="Chess blog"
                fourthBubbleContent="A simple blog teaching visitors the basic principles of chess as well as providing
                  the latest news from the chess world."
                fifthBubbleTitle="Design 5"
                fifthBubbleContent="Answer 5"
                sixthBubbleTitle="Design 6"
                sixthBubbleContent="Answer 6"
                firstLink="/Project1/BlogEN.html"
                secondLink="/Project2/index.html"
                thirdLink="/Project3/index.html"
              />
            }
          />
          <Route
            path="/apps"
            element={
              <Page
                type="Six"
                pageNumber="Three"
                title="My projects - apps and games"
                firstBubbleTitle="Word chain game"
                firstBubbleContent="Simple word chain game - players keep adding words, the first letter of the new
                  word has to match the last letter of the previous word (e.g 'shark - kit')"
                secondBubbleTitle="Matrix banking"
                secondBubbleContent="Futuristic I-banking, I added some spice not to make it look too boring, but it
                  works almost the same way as a classic one."
                thirdBubbleTitle="Application 3"
                thirdBubbleContent="Answer 3"
                fourthBubbleTitle="Application 4"
                fourthBubbleContent="Answer 4"
                fifthBubbleTitle="Application 5"
                fifthBubbleContent="Answer 5"
                sixthBubbleTitle="Application 6"
                sixthBubbleContent="Answer 6"
                firstLink="/App1/index.html"
                secondLink="/App2/index.html"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
