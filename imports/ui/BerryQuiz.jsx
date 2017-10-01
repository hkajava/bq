import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';


export default class BerryQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = { imageURL: '' };
    // this.state.imageURL = this.getimage();
  }

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    this.hello = 'hello';
    Meteor.call('getBerry', (error, result) => {
      if (error) {
        console.log(error.reason);
        return;
      } else {
        console.log('getBerry returned result: ', result);
        if(result != undefined) {
          // console.log('JEEJEE');
          this.setState({
            imageURL: result
          });
        }
      }
    });
  }

  getBerriesInClient() {
    this.hello = 'hello';
    Meteor.call('getBerriesToArray', (error, result) => {
      if (error) {
        console.log(error.reason);
        return;
      } else {
        console.log('getBerriesToArray returned result: ', result);
        if(result != undefined) {
          // console.log('JEEJEE');
          this.setState({
            berryArray: result
          });
        }
      }
    });
  }

/*
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getimage() {
    this.hello = 'hello';
    Meteor.call('getBerry', (error, result) => {
      if (error) {
        console.log(error.reason);
        return;
      } else {
        console.log('getBerry returned result: ', result);
        if(result != undefined) {
          // console.log('JEEJEE');
          this.setState({
            imageURL: result
          });
        }
      }
    });
  }

  tick() {
    this.getimage();
  }
  */


  render() {
    return (
      <div>
        <h1>BerryQuiz!</h1>
        <h2>imageURL: {this.state.imageURL} </h2>
        <img alt='some berry should be displayed here' src={this.state.imageURL} />
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
