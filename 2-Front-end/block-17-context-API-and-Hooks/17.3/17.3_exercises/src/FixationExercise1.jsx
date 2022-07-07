import React, { useEffect, useState } from 'react';

// const Explanation = () => (
//   <span style={ { fontSize: '16px' } }>
//     <h1>Exercise 1</h1>
//     <ul>
//       <li>Every 10 seconds a timer generate a random number from 1 to 100</li>
//       <li>If the number is multiple of 3 or 5, a message is shown on screen</li>
//       <li>The message is removed from the screen after 4 seconds</li>
//       <li>The timer is removed when the component unmounts</li>
//     </ul>
//   </span>
// );

function FixationExercise1() {
  const [randomCounter, setRandomCounter] = useState(1);
  const [messageCounter, setMessageCounter] = useState(0);
  const [timerID, setTimerID] = useState(null);
  const [randomNumber, setRandomNumber] = useState({ lastGenerated: undefined, number: undefined });

  useEffect(() => {
    const ONE_SECOND = 1000;

    const newTimerID = setInterval(() => {
      setRandomCounter((prevCounter) => {
        return prevCounter + 1 > 10 ? 1 : prevCounter + 1;
      });
      setMessageCounter((prevCounter) => prevCounter + 1);
    }, ONE_SECOND);
    setTimerID(newTimerID);    
  }, []);

  useEffect(() => {
    if (randomCounter === 10) setRandomNumber(
      { lastGenerated: messageCounter, number: Math.floor(Math.random() * 100) + 1 }
    );
  }, [randomCounter, messageCounter]);

  useEffect(() => () => clearInterval(timerID));

  const isMessageVisible = ({ lastGenerated, number }) => {
    let isDivisible = false;
    let passed4Seconds = false;

    if (number % 3 === 0 || number % 5 === 0) {
      isDivisible = true;
    }

    if (lastGenerated + 4 >= messageCounter) {
      passed4Seconds = true;
    }

    console.log(passed4Seconds, isDivisible);
    return passed4Seconds && isDivisible;
  }

  return (
    <div>
      {randomCounter}
      <br/>
      <br/>
      { randomNumber.number && `Random Number: ${randomNumber.number}`}
      <br/>
      <br/>
      { isMessageVisible(randomNumber) && "Acerto!" }
    </div>
  );
}

export default FixationExercise1;