import React from 'react';
import btn1 from './assets/btn1.png';
import btn2 from './assets/btn2.png';
import btn3 from './assets/btn3.png';

function Choice({ onUserChoice }) {
  const handleClick = (choice) => {
    onUserChoice(choice);
  };

  return (
    <div className='choose'>
      <img src={btn1} alt='' className='button' onClick={() => handleClick('rock')}></img>
      <img src={btn2} alt='' className='button' onClick={() => handleClick('paper')}></img>
      <img src={btn3} alt='' className='button' onClick={() => handleClick('scissors')}></img>
    </div>
  );
}

export default Choice;
