import React, { Component, PropTypes } from 'react';


export default class BerryLabel extends Component {
  render() {
    if (this.props.answerGiven) {
      return (
          <ul>
            <li>{this.props.berryName} ({this.props.berryNameInFinnish})</li>
            <li>Source:  <a target="_blank" rel="noopener noreferrer"
              href={this.props.wikiURL}>Wikipedia</a></li>
            <li>Author: {this.props.authorName}</li>
          </ul>
      );
    }
    return (null);
  }
}

BerryLabel.propTypes = {
  berryName: PropTypes.string.isRequired,
  berryNameInFinnish: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  wikiURL: PropTypes.string.isRequired,
  answerGiven: PropTypes.bool.isRequired,
};
