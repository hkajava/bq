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

  render() {
    const answeredClassName = classnames({
      correctAnswer: this.props.correctlyAnswered,
    });

    return (
      <p
        className={answeredClassName}
      >{this.createResponse()}
      </p>
    );
  }
}

Answered.propTypes = {
  answered: PropTypes.bool.isRequired,
  correctlyAnswered: PropTypes.bool.isRequired,
};
