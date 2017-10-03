import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// import * as fs from 'fs';

export const Berries = new Mongo.Collection('berries');
/*
db.berries.insert({ berry_name: "Blueberry (mustikka)",
berryURL: "/berry_images/mustikka_blueberry.jpg", createdAt: new Date() });
db.berries.insert({ berry_name: "Cloudberry (lakka)",
berryURL: "/berry_images/lakka_cloudberry.jpg", createdAt: new Date() });
db.berries.insert({ berry_name: "Bogbilberry (juolukka)",
berryURL: "/berry_images/juolukka_bogbilberry.jpg", createdAt: new Date() });
db.berries.insert({ berry_name: "Cranberry (karpalo)",
berryURL: "/berry_images/karpalo_cranberry.jpg", createdAt: new Date() });
db.berries.insert({ berry_name: "Arctic Raspberry (mesimarja)",
berryURL: "/berry_images/mesimarja_arcticraspberry.jpg", createdAt: new Date() });

db.berries.insert({ berry_name: "Red Currant (punaherukka)",
berryURL: "/berry_images/punaherukka_redcurrant.jpg", createdAt: new Date() });
db.berries.insert({ berry_name: "Lingonberry (puolukka)",
berryURL: "/berry_images/puolukka_lingonberry.jpg", createdAt: new Date() });
db.berries.insert({ berry_name: "Common Bear Bearry (sianpuolukka)",
berryURL: "/berry_images/sianpuolukka_commonbearberry.jpg", createdAt: new Date() });
db.berries.insert({ berry_name: "Raspberry (vadelma)",
berryURL: "/berry_images/vadelma_raspberry.jpg", createdAt: new Date() });
db.berries.insert({ berry_name: "Black Crowberry (variksenmarja)",
berryURL: "/berry_images/variksenmarja_blackcrowberry.jpg", createdAt: new Date() });
*/

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
      // console.log('inside server, method getBerry');
      const berryfilepath = '/berry_images/mustikka_blueberry.jpg';
      // const data = fs.readFileSync(berryfilepath, 'utf8');
      // console.log('inside server, method getBerry');
      return berryfilepath;
    }
    return undefined;
  },
  'getBerriesToArray'() {
    // check(text, String);
    let berryArray = [];
    if (Meteor.isServer) {
      // console.log('inside server, method getThreeBerries');
      berryArray = Berries.find().fetch();
      this.ralaa = 'ralaa';
      // const data = fs.readFileSync(berryfilepath, 'utf8');
      // console.log('inside server, method getBerry');
    } else {
      // console.log('inside client, method getBerry');
    }
    return berryArray;
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
