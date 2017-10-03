import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';


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
      <button onClick={this.toggleImageClicked}>
        <img
          className={berryClassName}
          alt={this.props.berryName}
          src={this.props.berryURL}
        />
      </button>
    );
  }
}

Berry.propTypes = {
  berryName: PropTypes.string.isRequired,
  berryURL: PropTypes.string.isRequired,
  berryIndex: PropTypes.number.isRequired,
  imageClicked: PropTypes.bool.isRequired,
  cb: PropTypes.func.isRequired,
};
