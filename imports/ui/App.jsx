import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import BerryQuiz from './BerryQuiz.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Berries } from '../api/berries.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      hideCompleted: false,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref

    // const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const text = this.textInput.value.trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    // ReactDOM.findDOMNode(this.refs.textInput).value = '';
    this.textInput.value = '';
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>App</h1>
          <AccountsUIWrapper />

        </header>

        <BerryQuiz />

      </div>
    );
  }
}

App.propTypes = {
  berries: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
  // incompleteCount: PropTypes.number.isRequired,
};

App.defaultProps = {
  currentUser: {},
};


export default createContainer(() => {
  Meteor.subscribe('berries');
  // what is the logic with HOC and how the props (tasks in this case) are passed to App class
  return {
    berries: Berries.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, App);
