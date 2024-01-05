import React, { useState} from 'react';
import Choice from './Choice';

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
      <div className="computerChoice">Computer's Choice: {computerChoice}</div>
      <div className="userChoice">User's Choice: {userChoice || 'Waiting for user'}</div>
      </div>

      <div className="button">
      <Choice onUserChoice={handleUserChoice} />
      </div>
    </div>
  );
}

export default App;
