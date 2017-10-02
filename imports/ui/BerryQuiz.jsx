import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import Berry from './Berry.jsx';


export default class BerryQuiz extends Component {
  constructor(props) {
    super(props);
    this.state =
    { berryArray: '',
      correctBerryName: '',
      correctBerryIndex: '',
      berry1Index: '',
      berry2Index: '',
      berry3Index: '' };
  }

  componentDidMount() {
    this.getBerriesInClient();
  }

  getBerriesInClient() {
    Meteor.call('getBerriesToArray', (error, result) => {
      if (error) {
        console.log(error.reason);
      } else if (result) {
        console.log('getBerriesToArray returned result: ', result);
        if(result != undefined && result != null) {
          // console.log('JEEJEE');
          this.setState({
            berryArray: result
          });
          const berryIndexArray = this.getNextBerryIndexes(this.state.berryArray.length);
          const chosenBerryIndex = berryIndexArray[this.randomIntFromInterval(0, 2)];
          const chosenBerryName = this.state.berryArray[chosenBerryIndex].berry_name;
          this.setState(
            { correctBerryIndex: chosenBerryIndex,
              correctBerryName: chosenBerryName,
              berry1Index: berryIndexArray[0],
              berry2Index: berryIndexArray[1],
              berry3Index: berryIndexArray[2] });
        }
      }
    });
  }


  getNextBerryIndexes(numberOfBerries) {
    this.hello = 'hello';
    let indexArray = [];
    console.log('numberOfBerries: ', numberOfBerries);
    indexArray[0] = this.randomIntFromInterval(0, numberOfBerries - 1);
    console.log('indexArray[0]: ', indexArray[0]);
    indexArray[1] = this.randomIntFromInterval(0, numberOfBerries - 1);
    while (indexArray[1] == indexArray[0]) {
      console.log('duplicate indexArray[1] recalculated');
      indexArray[1] = this.randomIntFromInterval(0, numberOfBerries - 1);
    }
    console.log('indexArray[1]: ', indexArray[1]);
    indexArray[2] = this.randomIntFromInterval(0, numberOfBerries - 1);
    while (indexArray[2] == indexArray[1] || indexArray[2] == indexArray[0]) {
      console.log('duplicate indexArray[2] recalculated');
      indexArray[2] = tindexArray[2];his.randomIntFromInterval(0, numberOfBerries - 1);
    }

    console.log('indexArray[2]: ', indexArray[2]);
    return indexArray;
  }

  randomIntFromInterval(min, max) {
    this.hello = 'hoihoi';
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  renderthreeberries(allBerriesArray) {
    // console.log('hello from renderthreeberries function');
    // console.log(allBerriesArray);
    if (allBerriesArray == '' || allBerriesArray.length == 0 || this.state.correctBerryIndex == '') {
      return '';
    }

/*
    const indexArray = this.getNextBerryIndexes(allBerriesArray.length);
    const b1Index = indexArray[0];
    const b2Index = indexArray[1];
    const b3Index = indexArray[2];
*/


    const b1Index = this.state.berry1Index;
    const b2Index = this.state.berry2Index;
    const b3Index = this.state.berry3Index;

    if (this.state.berryArray != '' && this.state.berryArray.length >= 3) {
      return (
        <li><table>
          <tr>
            <td>
              <Berry
                berryname={this.state.berryArray[b1Index].berry_name}
                berryURL={this.state.berryArray[b1Index].berryURL}
              />
            </td>
            <td>
              <Berry
                berryname={this.state.berryArray[b2Index].berry_name}
                berryURL={this.state.berryArray[b2Index].berryURL}
              />
            </td>
            <td>
              <Berry
                berryname={this.state.berryArray[b3Index].berry_name}
                berryURL={this.state.berryArray[b3Index].berryURL}
              />
            </td>
          </tr>
        </table></li>);
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
