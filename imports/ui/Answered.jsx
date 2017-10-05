import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';


export default class Answered extends Component {
  createResponse() {
    if (this.props.answered) {
      if (this.props.correctlyAnswered) {
        return 'Correct! You truly nailed that one!';
      }
      return 'Nooo... keep studying those berry images a bit more.';
    }
    // quiz question has not yet been answered
    return '';
  }

  quizEndResponse() {
    if (this.props.quizFinished) {
      // add restart game feature
      // return 'Quiz Finished. Press restart to play again!';
      return 'Quiz Finished.';
    }
    return '';
  }


  render() {
    const answeredClassName = classnames({
      correctAnswer: this.props.correctlyAnswered,
    });

    return (
      <h2
        className={answeredClassName}
      >{this.createResponse()}
        <br /><br />{this.quizEndResponse()}
      </h2>
    );
  }
}

Answered.propTypes = {
  answered: PropTypes.bool.isRequired,
  correctlyAnswered: PropTypes.bool.isRequired,
  quizFinished: PropTypes.bool.isRequired,
};
