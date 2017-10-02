import React, { Component, PropTypes } from 'react';


export default class Berry extends Component {
  constructor(props) {
    super(props);
    this.state =
    { selected: false };
    // this.state.imageURL = this.getimage();
  }

  render() {
    return (
      <img alt={this.props.berryname} src={this.props.berryURL} />
    );
  }
}

Berry.propTypes = {
  berryname: PropTypes.string.isRequired,
  berryURL: PropTypes.string.isRequired,
};
