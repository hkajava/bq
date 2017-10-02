import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';


export default class BerryQuiz extends Component {
  constructor(props) {
    super(props);
    this.state =
    { imageURL: '',
      berryArray: '' };
    // this.state.imageURL = this.getimage();
  }

  componentDidMount() {
    this.getImage();
    this.getBerriesInClient();
  }

  getImage() {
    this.hello = 'hello';
    Meteor.call('getBerry', (error, result) => {
      if (error) {
        console.log(error.reason);
        return;
      }

      console.log('getBerry returned result: ', result);
      if (result != undefined) {
        // console.log('JEEJEE');
        this.setState({
          imageURL: result
        });
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
        if(result != undefined && result != null) {
          // console.log('JEEJEE');
          this.setState({
            berryArray: result
          });
          // this.render();
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


  renderberryArray() {
    console.log('hello from renderBerry');
    console.log(this.state.berryArray);
    if (this.state.berryArray != '') {
      return (this.state.berryArray.map((berry) => {
        return (
          <li><img alt='some berry image here hopefully' src={berry.berryURL} /> <br />
            {berry.berry_name}
          </li>);
      })
      );
    }
  }

  renderthreeberries() {
    console.log('hello from renderBerry');
    console.log(this.state.berryArray);
    if (this.state.berryArray != '' && this.state.berryArray.length >= 3) {
      return(
        <li><table>
          <tr>
            <td>
              <img alt="some berry here hopefully" src={this.state.berryArray[0].berryURL} /> <br />
            </td>
            <td>
              <img alt="some berry here hopefully" src={this.state.berryArray[1].berryURL} /> <br />
            </td>
            <td>
              <img alt="some berry here hopefully" src={this.state.berryArray[2].berryURL} /> <br />
            </td>
          </tr>
        </table></li>);
    }
  }


  /*
  <ul>
    {this.renderberryArray()}
  </ul>


  {this.state.berryArray != '' &&
    <ul>
      <h3>{this.state.berryArray.map((berry) => {
        return (<li>berry.berry_name, berry.berryURL</li>);
      })
      }</h3>
    </ul>
  }

  */


  render() {
    return (
      <div>
        <h1>BerryQuiz!</h1>
        <p> This is a simple quiz application to investigate the potential of
            Meteor/React web application technology and learn to recognize
            Finnish wild berries. The images have been taken from <br />
          <a target="_blank" rel="noopener noreferrer" href="http://www.luontoon.fi/marjastusjasienestys/marjastus">http://www.luontoon.fi/marjastusjasienestys/marjastus</a>
        </p>

        <h2>Which of these berries is blueberry (mustikka in Finnish)? </h2>
        <ul>
          {this.renderthreeberries()}
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
