import React, { useState } from 'react';
import './App.css';
import GuessResult from './GuessResult';

class GuessResults extends React.Component {  
  constructor(props) {
    super(props);
  }  
  
  render () {
    return (
      this.props.submittedGuesses.length > 0 &&
      (
        <div className="submitted-guesses-container">
          <div className="submitted-guesses">
            {
              this.props.submittedGuesses.map(
                item => {
                  return (
                    <GuessResult
                      name={item.name}
                      alliance={item.alliance}
                      planet={item.planet}
                      species={item.species}
                      occupation={item.occupation}
                      solutionObject={this.props.solutionObject}
                      />
                  );
                }
              )
            }
            </div>
        </div>
      )
    );
  }
}

export default GuessResults;