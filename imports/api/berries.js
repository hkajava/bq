import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// import * as fs from 'fs';

export const Berries = new Mongo.Collection('berries');
/*
from luontoon.fi
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

from wikipedia
db.berries.insert({ berry_name: "Wild Strawberry",
berry_name_in_Finnish: "Ahomansikka",
berryURL: "/berry_images/ahomansikka_wildstrawberry_author_Philip_Jägenstedt.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Fragaria_vesca",
 createdAt: new Date() });

db.berries.insert({ berry_name: "Bog Bilberry",
berry_name_in_Finnish: "Juolukka",
berryURL: "/berry_images/juolukka_bogbilberry_author_B_Gliwa.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Vaccinium_uliginosum",
createdAt: new Date() });

db.berries.insert({ berry_name: "Cranberry",
berry_name_in_Finnish: "Karpalo",
berryURL: "/berry_images/karpalo_cranberry_author_Christian_Fischer.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Vaccinium_oxycoccos",
createdAt: new Date() });

db.berries.insert({ berry_name: "Juniper",
berry_name_in_Finnish: "Kataja",
berryURL: "/berry_images/kataja_juniper_author_Peter_Forster.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Juniperus_communis",
createdAt: new Date() });

db.berries.insert({ berry_name: "Cloudberry",
berry_name_in_Finnish: "Lakka",
berryURL: "/berry_images/lakka_cloudberry_author_wikipedia.png",
wikiURL: "https://en.wikipedia.org/wiki/Rubus_chamaemorus",
createdAt: new Date() });

db.berries.insert({ berry_name: "Stone Bramble",
berry_name_in_Finnish: "Lillukka",
berryURL: "/berry_images/lillukka_stonebramble_author_Ivar_Leidus.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Rubus_saxatilis",
createdAt: new Date() });

db.berries.insert({ berry_name: "Arctic Raspberry",
berry_name_in_Finnish: "Mesimarja",
berryURL: "/berry_images/mesimarja_arcticraspberry_author_Ztaffanb.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Rubus_arcticus",
createdAt: new Date() });

db.berries.insert({ berry_name: "Blueberry",
berry_name_in_Finnish: "Mustikka",
berryURL: "/berry_images/mustikka_blueberry_author_Marek_Silarski.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Vaccinium_myrtillus",
createdAt: new Date() });

db.berries.insert({ berry_name: "Rowan",
berry_name_in_Finnish: "Pihlaja",
berryURL: "/berry_images/pihlaja_rowan_author_Jonik.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Sorbus_aucuparia",
createdAt: new Date() });

db.berries.insert({ berry_name: "Lingonberry",
berry_name_in_Finnish: "Puolukka",
berryURL: "/berry_images/puolukka_lingonberry_author_Jonas_Bergsten.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Vaccinium_vitis-idaea",
createdAt: new Date() });

db.berries.insert({ berry_name: "Alpine Bear Berry",
berry_name_in_Finnish: "Riekonmarja",
berryURL: "/berry_images/riekonmarja_alpinebearberry_author_Veli_Pohjonen.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Arctostaphylos_alpina",
createdAt: new Date() });

db.berries.insert({ berry_name: "Bear Berry",
berry_name_in_Finnish: "Sianpuolukka",
berryURL: "/berry_images/sianpuolukka_bearberry_author_Regis_Gallois.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Arctostaphylos_uva-ursi",
createdAt: new Date() });

db.berries.insert({ berry_name: "Mountain Currant",
berry_name_in_Finnish: "Taikinamarja",
berryURL: "/berry_images/taikinamarja_mountaincurrant_author_André_Karwath.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Ribes_alpinum",
createdAt: new Date() });

db.berries.insert({ berry_name: "Hagberry",
berry_name_in_Finnish: "Tuomi",
berryURL: "/berry_images/tuomi_hagberry_author_Anneli_Salo.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Prunus_padus",
createdAt: new Date() });

db.berries.insert({ berry_name: "Common Sea Buckthorn",
berry_name_in_Finnish: "Tyrni",
berryURL: "/berry_images/tyrni_commonseabuckthorn_author_Jean_Tosti.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Hippophae_rhamnoides",
createdAt: new Date() });

db.berries.insert({ berry_name: "Raspberry",
berry_name_in_Finnish: "Vadelma",
berryURL: "/berry_images/vadelma_raspberry_author_G_Taliska.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Rubus_idaeus",
createdAt: new Date() });

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
  /**
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
  */
  'berries.getBerriesToArray'() {
    // check(text, String);
    let berryArray = [];
    if (Meteor.isServer) {
      // console.log('inside server, method getBerriesToArray');
    } else {
      // console.log('inside client, method getBerriesToArray');
    }
    berryArray = Berries.find().fetch();
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
