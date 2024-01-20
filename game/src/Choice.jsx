import React from 'react';

function Choice({ onUserChoice }) {
  const handleClick = (choice) => {
    onUserChoice(choice);
  };

  return (
    <div className='buttons'>
      <button className='rock' onClick={() => handleClick('rock')}>
        Rock
      </button>
      <button className='paper' onClick={() => handleClick('paper')}>
        Paper
      </button>
      <button className='scissors' onClick={() => handleClick('scissors')}>
        Scissors
      </button>
    </div>
  );
}

export default Choice;
