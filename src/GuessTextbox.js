import React, { useState } from 'react';
import './App.css';

class GuessTextbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleSubmission(event) {
    event.preventDefault();

    var formattedGuess = "";

    // If guess is empty, return and do not count submission
    if (this.props.guess.trim() === "") {
      return;
    }

    // Check if guess is in list of recognized characters
    let foundGuessCharacter = false;
    for (let i = 0; i < this.props.characters.length; i++) {
      if (this.props.characters[i].name.toLowerCase() === this.props.guess.trim().toLowerCase()) {
        foundGuessCharacter = true;
        formattedGuess = this.props.characters[i];
        break;
      }
    }

    if (foundGuessCharacter === false) {
      console.log ("Not a recognized Star Wars Character.")
      return;
    }

    let newSubmittedGuesses = this.props.submittedGuesses;
    newSubmittedGuesses.push(formattedGuess);
    this.props.setSubmittedGuesses(newSubmittedGuesses);

    this.props.setNumGuesses(this.props.numGuesses + 1);

    // Check whether guess is correct or incorrect
    if (this.props.guess.trim() === this.props.solutionName) {
      this.props.setGuessStatus(1);
      console.log("YAY!");
    } else {
      if (this.props.numGuesses + 1 === 8) {
        this.props.setGuessStatus(2);
      }
      console.log("oh no.");
    }

    // Clear guess textbox
    this.props.setGuess("");
  }

  render() {
    return (
        <div className={"guess-input"}>
          <form
          onSubmit={this.handleSubmission}>
          
            <label className={"guess-textbox-label"}>
              {/* Enter guess: {} */}
              <input
                  type="text"
                  onChange={x => this.props.setGuess(x.target.value)}
                  value={this.props.guess}
                  className={"guess-textbox"}
                  autoFocus
              />
            </label>

            <button
              className={"guess-submit-button"}
            >
              GO
            </button>
        </form>
      </div>
    );
  }
}

export default GuessTextbox;