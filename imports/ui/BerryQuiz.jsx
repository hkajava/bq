import React, { Component } from 'react';
// import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import Berry from './Berry.jsx';
import Answered from './Answered.jsx';
import { randomIntFromInterval } from './helper_funcs.js';

const QUIZ_LENGTH = 3;

export default class BerryQuiz extends Component {
  static getNextBerryIndexes(numberOfBerries) {
    const indexArray = [];
    // console.log('numberOfBerries: ', numberOfBerries);
    indexArray[0] = randomIntFromInterval(0, numberOfBerries - 1);
    // console.log('indexArray[0]: ', indexArray[0]);
    indexArray[1] = randomIntFromInterval(0, numberOfBerries - 1);
    while (indexArray[1] === indexArray[0]) {
      // console.log('duplicate indexArray[1] recalculated');
      indexArray[1] = randomIntFromInterval(0, numberOfBerries - 1);
    }
    // console.log('indexArray[1]: ', indexArray[1]);
    indexArray[2] = randomIntFromInterval(0, numberOfBerries - 1);
    while (indexArray[2] === indexArray[1] || indexArray[2] === indexArray[0]) {
      // console.log('duplicate indexArray[2] recalculated');
      indexArray[2] = randomIntFromInterval(0, numberOfBerries - 1);
    }
    return indexArray;
  }
  constructor(props) {
    super(props);
    this.state =
    { berryArray: '',
      correctBerryName: '',
      correctBerryIndex: '',
      answered: false,
      correctlyAnswered: false,
      berry1Index: '',
      berry2Index: '',
      berry3Index: '',
      berry1Checked: false,
      berry2Checked: false,
      berry3Checked: false,
      points: 0,
      nbr_questions: 0,
      quizFinished: false };
    this.handleBerryClick = this.handleBerryClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
  }

  componentDidMount() {
    this.getBerriesInClient();
  }

  getBerriesInClient() {
    Meteor.call('berries.getBerriesToArray', (error, result) => {
      if (error) {
        // console.log(error.reason);
      } else if (result) {
        // console.log('berries.getBerriesToArray returned result: ', result);
        if (result !== undefined && result !== null) {
          // console.log('JEEJEE');
          this.setState({
            berryArray: result,
          });
          const berryIndexArray = BerryQuiz.getNextBerryIndexes(this.state.berryArray.length);
          const chosenBerryIndex = berryIndexArray[randomIntFromInterval(0, 2)];
          const chosenBerryName = this.state.berryArray[chosenBerryIndex].berry_name;
          this.setState(
            { correctBerryIndex: chosenBerryIndex,
              correctBerryName: chosenBerryName,
              answered: false,
              correctlyAnswered: false,
              berry1Index: berryIndexArray[0],
              berry2Index: berryIndexArray[1],
              berry3Index: berryIndexArray[2],
              berry1Checked: false,
              berry2Checked: false,
              berry3Checked: false });
        }
      }
    });
  }

  setBerryCheckedStates(berryIndex) {
    // let's first reset checked state for all berries
    this.setState({
      berry1Checked: false,
      berry2Checked: false,
      berry3Checked: false,
    });

    if (this.state.berry1Index === berryIndex) {
      this.setState({
        berry1Checked: true,
      });
    } else if (this.state.berry2Index === berryIndex) {
      this.setState({
        berry2Checked: true,
      });
    } else if (this.state.berry3Index === berryIndex) {
      this.setState({
        berry3Checked: true,
      });
    }
  }

  updatePoints(berryIndex) {
    if (berryIndex === this.state.correctBerryIndex) {
      this.setState({
        points: this.state.points + 1,
        answered: true,
        correctlyAnswered: true,
        // nbr_questions: this.state.nbr_questions + 1,
      });
    } else {
      this.setState({
        answered: true,
        correctlyAnswered: false,
        // nbr_questions: this.state.nbr_questions + 1,
      });
    }
  }

  handleBerryClick(berryIndex) {
    if (!this.state.answered) {
      this.setBerryCheckedStates(berryIndex);
      this.updatePoints(berryIndex);

      if (this.state.nbr_questions + 1 >= QUIZ_LENGTH) {
        this.setState({ quizFinished: true });
      }
    }
    // if user has already answered then don't do anything
  }

  handleNextButtonClick() {
    if (this.state.nbr_questions + 1 < QUIZ_LENGTH) {
      this.getBerriesInClient();
      this.setState({ nbr_questions: this.state.nbr_questions + 1 });
    }
    // console.log('BerryQuiz, handleNextButtonClick()');
  }

  // TODO: get rid of unnecessary global variables
  renderthreeberries(allBerriesArray) {
    // console.log('hello from renderthreeberries function');
    // console.log(allBerriesArray);
    if (allBerriesArray === '' || allBerriesArray.length === 0 || this.state.correctBerryIndex === '') {
      return '';
    }

    const b1Index = this.state.berry1Index;
    const b2Index = this.state.berry2Index;
    const b3Index = this.state.berry3Index;

    if (this.state.berryArray !== '' && this.state.berryArray.length >= 3) {
      return (
        <li><table><tbody>
          <tr>
            <td>
              <Berry
                berryName={this.state.berryArray[b1Index].berry_name}
                berryURL={this.state.berryArray[b1Index].berryURL}
                berryIndex={b1Index}
                imageClicked={this.state.berry1Checked}
                cb={this.handleBerryClick}
              />
            </td>
            <td>
              <Berry
                berryName={this.state.berryArray[b2Index].berry_name}
                berryURL={this.state.berryArray[b2Index].berryURL}
                berryIndex={b2Index}
                imageClicked={this.state.berry2Checked}
                cb={this.handleBerryClick}
              />
            </td>
            <td>
              <Berry
                berryName={this.state.berryArray[b3Index].berry_name}
                berryURL={this.state.berryArray[b3Index].berryURL}
                berryIndex={b3Index}
                imageClicked={this.state.berry3Checked}
                cb={this.handleBerryClick}
              />
            </td>
          </tr>
        </tbody></table></li>);
    }
    return '';
  }


  render() {
    return (
      <div>
        <h1>BerryQuiz!</h1>
        <p> This is a simple quiz application to investigate the potential of
            Meteor/React web application technology and learn to recognize
            Finnish wild berries. The images have been taken from <br />
          <a target="_blank" rel="noopener noreferrer" href="http://www.luontoon.fi/marjastusjasienestys/marjastus">http://www.luontoon.fi/marjastusjasienestys/marjastus</a>
        </p>

        <h2>Which of these berries is {this.state.correctBerryName.toLowerCase()} ?</h2>
        <ul>
          { this.renderthreeberries(this.state.berryArray) }
        </ul>

        <Answered
          answered={this.state.answered}
          correctlyAnswered={this.state.correctlyAnswered}
          quizFinished={this.state.quizFinished}
        />

        <h2>Current points: {this.state.points}</h2>
        <h4>Question: {this.state.nbr_questions + 1} / {QUIZ_LENGTH} </h4>
        <p>
          <button
            className=".button"
            // had to google the below one
            // https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
            onClick={() => this.handleNextButtonClick()}
          >Next question
          </button>
        </p>

      </div>
    );
  }
}

BerryQuiz.propTypes = {
  // berryname: PropTypes.string,
};
