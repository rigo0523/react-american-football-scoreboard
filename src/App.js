//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHome] = useState(32);
  const [awayScore, setAway] = useState(32);
  {/* HOME SCORE EVENTS FOR BUTTONS*/}
  let homeTouchDown = e => {
    setHome(homeScore + 7);
  }
  let homeFieldGoal = e => {
    setHome(homeScore + 3);
  }
  {/* AWAY SCORE EVENTS FOR BUTTONS */}
  let awayTouchDown = e => {
    setAway(awayScore + 7);
  }
  let awayFieldGoal = e => {
    setAway(awayScore + 3);
  }

  return (
    <div className="container">
        <section className="scoreboard">
            <div className="topRow">
                <div className="home">
                    <h2 className="home__name">Lions</h2>
                    {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
                    <div className="home__score">{homeScore}</div> {/* HOME SCORE */}
                </div>

                <div className="timer">00:03</div>

                <div className="away">
                  <h2 className="away__name">Tigers</h2>
                  <div className="away__score">{awayScore}</div> {/* AWAY SCORE */}
                </div>
            </div>
            <BottomRow />
        </section>

        <section className="buttons">
            <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button className="homeButtons__touchdown" onClick={homeTouchDown}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={awayTouchDown}>Away Touchdown Goal</button>
                <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
            </div>
        </section>
        {/*END OF CONTAINER*/}
    </div> 
  );
}

export default App;
