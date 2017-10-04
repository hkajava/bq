/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Berries } from './berries.js';

if (Meteor.isServer) {
  describe('Berries', () => {
    describe('methods', () => {
      const userId = Random.id();
      let berryId1;
      let berryId2;

      beforeEach(() => {
        // HKa: aren't all tasks removed from the mongo?...
        Berries.remove({});
        berryId1 = Berries.insert({
          berry_name: 'test berry1 (testimarja1)',
          berryURL: '/berry_images/juolukka_bogbilberry.jpg',
          createdAt: new Date(),
          owner: userId,
          username: 'meteor_test_runner',
        });
        berryId2 = Berries.insert({
          berry_name: 'test berry2 (testimarja2)',
          berryURL: '/berry_images/mesimarja_arcticraspberry.jpg',
          createdAt: new Date(),
          owner: userId,
          username: 'meteor_test_runner',
        });
      });
      console.log('berryId1', berryId1);
      console.log('berryId2', berryId2);

      it('check that berries inserted correctly for the test', () => {
        assert.equal(Berries.find().count(), 2);
      });
      it('can fetch berries from mongo', () => {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const getBerriesHandle = Meteor.server.method_handlers['berries.getBerriesToArray'];
        // Set up a fake method invocation that looks like what the method expects
        // const invocation = { userId };

        getBerriesHandle((error, result) => {
          if (error) {
            console.log(error.reason);
          } else if (result) {
            console.log('received result');
            assert.equal(result.length, 2);
          }
        });
      });
    });
  });
}
