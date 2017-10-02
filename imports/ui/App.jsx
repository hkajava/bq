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
          {/** <AccountsUIWrapper /> */}
        </header>
        <BerryQuiz />
      </div>
    );
  }
}

App.propTypes = {
  // Removed berries collection from props, not sure if it is reactive like
  // this. Using Meteor method to get berries collection instead.
  // berries: PropTypes.array.isRequired,
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
    // Removed berries collection from props, not sure if it is reactive like
    // this. Using Meteor method to get berries collection instead.
    // berries: Berries.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, App);
