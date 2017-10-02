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

  {/** <img alt="some berry here hopefully"
  src={this.state.berryArray[0].berryURL} /> <br /> */}

  
