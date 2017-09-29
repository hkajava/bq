import React, { Component, PropTypes } from 'react';


export default class WeekDay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Weekday: {this.props.weekdayname}</h1>
      </div>
    );
  }
}

export function sumtwonumbers(a, b) {
  return (a + b);
}


WeekDay.propTypes = {
  weekdayname: PropTypes.string.isRequired,
};
