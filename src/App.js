import React, { useState } from 'react';
import GuessTextbox from './GuessTextbox.js';
import GuessResults from './GuessResults.js';

import characters from './characters';

import './App.css';

// const characters_array = Array.from(characters);
const solutionIndex = Math.floor(Math.random() * characters.length);
const solutionName = characters[solutionIndex].name.toLowerCase();
const solutionObject = characters[solutionIndex];
console.log(solutionName);

function App() {
  const [guess, setGuess] = useState("");
  const [submittedGuesses, setSubmittedGuesses] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);

  /* 0 = still guessing, 1 = correctly guessed, 2 = out of guesses */
  const [guessStatus, setGuessStatus] = useState(0);
  
  console.log(numGuesses, guessStatus);
  return (
    <div className="App">
      <div className="App-header">
        Star Wars Character Guesser
      </div>
      <div className="App-container">
        {
          guessStatus === 0 &&
            <GuessTextbox
            guess={guess}
            setGuess={setGuess}
            solutionName={solutionName}
            submittedGuesses={submittedGuesses}
            setSubmittedGuesses={setSubmittedGuesses}
            characters={characters}
            numGuesses={numGuesses}
            setNumGuesses={setNumGuesses}
            guessStatus={guessStatus}
            setGuessStatus={setGuessStatus}
            />
        }
        
        {
          guessStatus === 0 ?
            <div className="guess-counter">
              Guesses: {numGuesses}/8
            </div>
          :
            guessStatus === 1 ?
              <div className="guess-counter">
                You win!
              </div>
            :
              <div className="guess-counter">
                You lose!
              </div>
        }

        <GuessResults
          submittedGuesses={submittedGuesses}
          setSubmittedGuesses={setSubmittedGuesses}
          solutionObject={solutionObject}
          />
      </div>
    </div>
  );
}

export default App;