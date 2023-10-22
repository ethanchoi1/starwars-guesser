import React, { useState } from 'react';
import './App.css';

import relations from './character_attribute_relations';

class GuessResult extends React.Component {  
  constructor(props) {
    super(props);
  }
  
  checkRelations(category, value1, value2) {
    let related = false;

    for (let i = 0; i < relations[category].length; i++) {
        if (relations[category][i].has(value1) && relations[category][i].has(value2)) {
        related = true;
        break;
      }
    }

    return related;
  }
  
  render () {
    return (
      <div className="submitted-guess">
        <div
          className={
            "submitted-guess-category submitted-guess-category-wide "
            + ((this.props.name === this.props.solutionObject.name) ? "correct-guess-category" : "")
          }
        >
          {this.props.name}
        </div>

        <div
          className={
            "submitted-guess-category submitted-guess-category-wide "
            + ((this.props.alliance === this.props.solutionObject.alliance) ? "correct-guess-category"
            : (this.checkRelations("alliance", this.props.alliance, this.props.solutionObject.alliance)) ? "similar-guess-category" : "")
          }
        >
          {this.props.alliance}
        </div>

        <div
          className={
            "submitted-guess-category submitted-guess-category-wide "
            + ((this.props.planet === this.props.solutionObject.planet) ? "correct-guess-category"
            : (this.checkRelations("planet", this.props.planet, this.props.solutionObject.planet)) ? "similar-guess-category" : "")
          }
        >
          {this.props.planet}
        </div>

        <div
          className={
            "submitted-guess-category submitted-guess-category-wide "
            + ((this.props.species === this.props.solutionObject.species) ? "correct-guess-category" 
            : (this.checkRelations("species", this.props.species, this.props.solutionObject.species)) ? "similar-guess-category" : "")
          }
        >
          {this.props.species}
        </div>

        <div
          className={
            "submitted-guess-category submitted-guess-category-wide "
            + ((this.props.occupation === this.props.solutionObject.occupation) ? "correct-guess-category"
            : (this.checkRelations("occupation", this.props.occupation, this.props.solutionObject.occupation)) ? "similar-guess-category" : "")
          }
        >
          {this.props.occupation}
        </div>
      </div>
    );
  }
}

export default GuessResult;