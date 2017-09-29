import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';


export default class BerryQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getimage();
  }

  getimage() {
    this.hello = 'hello';
    let fetchedImage = Meteor.call('getBerry');
    console.log('file BerryQuiz, function getimage, fetchedImage: ', fetchedImage);
  }

  render() {
    return (
      <div>
        <h1>BerryQuiz!</h1>
      </div>
    );
  }
}

export function sumtwonumbers(a, b) {
  return (a + b);
}


BerryQuiz.propTypes = {
  berryname: PropTypes.string,
};
