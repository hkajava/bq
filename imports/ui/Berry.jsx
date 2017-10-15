import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import BerryLabel from './BerryLabel.jsx';


export default class Berry extends Component {
  constructor(props) {
    super(props);
    this.toggleImageClicked = this.toggleImageClicked.bind(this);
  }

  toggleImageClicked() {
    this.props.cb(this.props.berryIndex);
  }

  render() {
    const berryClassName = classnames({
      checked: this.props.imageClicked,
    });

    return (
      <button id={this.props.berryName} onClick={this.toggleImageClicked}>
        <img
          className={berryClassName}
          alt={this.props.berryName}
          src={this.props.berryURL}
        />
        <BerryLabel
          answerGiven={this.props.answerGiven}
          authorName={this.props.authorName}
          berryName={this.props.berryName}
          berryNameInFinnish={this.props.berryNameInFinnish}
          wikiURL={this.props.wikiURL}
        />
      </button>

    );
  }
}

Berry.propTypes = {
  berryName: PropTypes.string.isRequired,
  berryNameInFinnish: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  wikiURL: PropTypes.string.isRequired,
  berryURL: PropTypes.string.isRequired,
  berryIndex: PropTypes.number.isRequired,
  imageClicked: PropTypes.bool.isRequired,
  answerGiven: PropTypes.bool.isRequired,
  cb: PropTypes.func.isRequired,
};
