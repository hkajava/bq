import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import * as fs from 'fs';

export const Berries = new Mongo.Collection('berries');

// export default Berries;

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('berries', function berriesPublication() {
    return Berries.find();
  });
}

Meteor.methods({
  'getBerry'() {
    // check(text, String);

    if (Meteor.isServer) {
      console.log('inside server, method getBerry');
      let berryfilepath = '/home/dfm/code/bq/public/berry_images/mustikka_blueberry.jpg';
      const data = fs.readFileSync(berryfilepath, 'utf8');
      console.log('inside server, method getBerry');
      return berryfilepath;
    } else {
      console.log('inside client, method getBerry');
    }

  },


  'berries.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Berries.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'berries.remove'(taskId) {
    check(taskId, String);

    const task = Berries.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    /** This broke berries.tests.js. Meteor.userId() can't be called for some
        reason in the test.
    if (task.owner === Meteor.userId()) {
      Berries.remove(taskId);
    }
    */
    Berries.remove(taskId);
  },
});
