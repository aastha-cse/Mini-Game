import React, { useState} from 'react';
import Choice from './Choice';
import './App.css';
import user_rock from './assets/user_rock.png';
import user_paper from './assets/user_paper.png';
import user_scissors from './assets/user_scissors.png';
import computer_paper from './assets/computer_paper.png';

function App() {
  const [computerChoice, setComputerChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null);

  const handleComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(choice);
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    handleComputerChoice();
  };

  const getUserChoiceImage = () => {
    switch (userChoice) {
      case 'rock':
        return user_rock;
      case 'paper':
        return user_paper;
      case 'scissors':
        return user_scissors;
      default:
        return null;
    }
  };

  const getComputerChoiceImage = () => {
    switch (computerChoice) {
      case 'rock':
        return computer_paper;
      case 'paper':
        return computer_paper;
      case 'scissors':
        return computer_paper;
      default:
        return null;
    }
  };

  const calculateResult = () => {
    if (userChoice !== null && computerChoice !== null) {
      if (userChoice === computerChoice) {
        return "It's a Draw!";
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'Congratulations! you win';
      } else {
        return 'Sorry! you lose';
      }
    }
    return null; 
  };

  return (
    <div className='game'>
      {userChoice !== null && (
        <div className="result">
          {calculateResult()}
        </div>
      )}

      <div className="choices">
      <div className="computerChoice">Computer's Choice: {computerChoice}
      <br></br>
      <img src={getComputerChoiceImage()} alt='' className='userGesture'></img></div>
      <span>vs</span>
      <div className="userChoice">User's Choice: {userChoice || 'Waiting for user'}
      <br></br>
      <img src={getUserChoiceImage()} alt='' className='userGesture'></img></div>
      </div>

      <div className="button">
      <Choice onUserChoice={handleUserChoice} />
      </div>
    </div>
  );
}

export default App;
