import React, { useState } from "react";
import Choice from "./Choice";
import "./App.css";
import user_rock from "./assets/user_rock.png";
import user_paper from "./assets/user_paper.png";
import user_scissors from "./assets/user_scissors.png";
import user from "./assets/user.png";
import computer_rock from "./assets/computer_rock.png";
import computer_paper from "./assets/computer_paper.png";
import computer_scissors from "./assets/computer_scissors.png";
import computer from "./assets/computer.png";

function App() {
  const [computerChoice, setComputerChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null);

  const handleComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(choice);
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    handleComputerChoice();
  };

  const getUserChoiceImage = () => {
    switch (userChoice) {
      case "rock":
        return user_rock;
      case "paper":
        return user_paper;
      case "scissors":
        return user_scissors;
      default:
        return user;
    }
  };

  const getComputerChoiceImage = () => {
    switch (computerChoice) {
      case "rock":
        return computer_rock;
      case "paper":
        return computer_paper;
      case "scissors":
        return computer_scissors;
      default:
        return computer;
    }
  };

  const calculateResult = () => {
    if (userChoice !== null && computerChoice !== null) {
      if (userChoice === computerChoice) {
        return "It's a Draw!";
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        return "Congratulations! you win";
      } else {
        return "Sorry! you lose";
      }
    }
    return null;
  };

  return (
    <div className="game">
      <div className="result">{userChoice ? calculateResult() : "Make a choice..."}</div>

      <div className="choices">
        <div className="choice">
          <img src={getComputerChoiceImage()} alt="" className="gesture"></img>
        </div>
        <div className="vs">vs</div>
        <div className="choice">
          <img src={getUserChoiceImage()} alt="" className="gesture"></img>
        </div>
      </div>

      <div className="buttons">
        <Choice onUserChoice={handleUserChoice} />
      </div>
    </div>
  );
}

export default App;
