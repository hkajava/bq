import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
// import { check } from 'meteor/check';

// import * as fs from 'fs';

export const Berries = new Mongo.Collection('berries');
/*
from luontoon.fi
db.berries.insert({ berryName: "Blueberry (mustikka)",
berryURL: "/berry_images/mustikka_blueberry.jpg", createdAt: new Date() });
db.berries.insert({ berryName: "Cloudberry (lakka)",
berryURL: "/berry_images/lakka_cloudberry.jpg", createdAt: new Date() });
db.berries.insert({ berryName: "Bogbilberry (juolukka)",
berryURL: "/berry_images/juolukka_bogbilberry.jpg", createdAt: new Date() });
db.berries.insert({ berryName: "Cranberry (karpalo)",
berryURL: "/berry_images/karpalo_cranberry.jpg", createdAt: new Date() });
db.berries.insert({ berryName: "Arctic Raspberry (mesimarja)",
berryURL: "/berry_images/mesimarja_arcticraspberry.jpg", createdAt: new Date() });

db.berries.insert({ berryName: "Red Currant (punaherukka)",
berryURL: "/berry_images/punaherukka_redcurrant.jpg", createdAt: new Date() });
db.berries.insert({ berryName: "Lingonberry (puolukka)",
berryURL: "/berry_images/puolukka_lingonberry.jpg", createdAt: new Date() });
db.berries.insert({ berryName: "Common Bear Bearry (sianpuolukka)",
berryURL: "/berry_images/sianpuolukka_commonbearberry.jpg", createdAt: new Date() });
db.berries.insert({ berryName: "Raspberry (vadelma)",
berryURL: "/berry_images/vadelma_raspberry.jpg", createdAt: new Date() });
db.berries.insert({ berryName: "Black Crowberry (variksenmarja)",
berryURL: "/berry_images/variksenmarja_blackcrowberry.jpg", createdAt: new Date() });

from wikipedia
db.berries.insert({ berryName: "Wild Strawberry",
berryNameInFinnish: "Ahomansikka",
berryURL: "/berry_images/ahomansikka_wildstrawberry_author_Philip_Jägenstedt.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Fragaria_vesca",
authorName: "Philip Jägenstedt",
 createdAt: new Date() });

db.berries.insert({ berryName: "Bog Bilberry",
berryNameInFinnish: "Juolukka",
berryURL: "/berry_images/juolukka_bogbilberry_author_B_Gliwa.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Vaccinium_uliginosum",
authorName: "B. Gliwa",
createdAt: new Date() });

db.berries.insert({ berryName: "Cranberry",
berryNameInFinnish: "Karpalo",
berryURL: "/berry_images/karpalo_cranberry_author_Christian_Fischer.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Vaccinium_oxycoccos",
authorName: "Christian Fischer",
createdAt: new Date() });

db.berries.insert({ berryName: "Juniper",
berryNameInFinnish: "Kataja",
berryURL: "/berry_images/kataja_juniper_author_Peter_Forster.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Juniperus_communis",
authorName: "Peter Forster",
createdAt: new Date() });

db.berries.insert({ berryName: "Cloudberry",
berryNameInFinnish: "Lakka",
berryURL: "/berry_images/lakka_cloudberry_author_wikipedia.png",
wikiURL: "https://en.wikipedia.org/wiki/Rubus_chamaemorus",
authorName: "Wikipedia (No machine-readable source provided.)",
createdAt: new Date() });

db.berries.insert({ berryName: "Stone Bramble",
berryNameInFinnish: "Lillukka",
berryURL: "/berry_images/lillukka_stonebramble_author_Ivar_Leidus.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Rubus_saxatilis",
authorName: "Ivar Leidus",
createdAt: new Date() });

db.berries.insert({ berryName: "Arctic Raspberry",
berryNameInFinnish: "Mesimarja",
berryURL: "/berry_images/mesimarja_arcticraspberry_author_Ztaffanb.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Rubus_arcticus",
authorName: "Ztaffanb",
createdAt: new Date() });

db.berries.insert({ berryName: "Blueberry",
berryNameInFinnish: "Mustikka",
berryURL: "/berry_images/mustikka_blueberry_author_Marek_Silarski.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Vaccinium_myrtillus",
authorName: "Marek Silarski",
createdAt: new Date() });

db.berries.insert({ berryName: "Rowan",
berryNameInFinnish: "Pihlaja",
berryURL: "/berry_images/pihlaja_rowan_author_Jonik.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Sorbus_aucuparia",
authorName: "Jonik",
createdAt: new Date() });

db.berries.insert({ berryName: "Lingonberry",
berryNameInFinnish: "Puolukka",
berryURL: "/berry_images/puolukka_lingonberry_author_Jonas_Bergsten.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Vaccinium_vitis-idaea",
authorName: "Jonas Bergsten",
createdAt: new Date() });

db.berries.insert({ berryName: "Alpine Bear Berry",
berryNameInFinnish: "Riekonmarja",
berryURL: "/berry_images/riekonmarja_alpinebearberry_author_Veli_Pohjonen.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Arctostaphylos_alpina",
authorName: "Veli Pohjonen",
createdAt: new Date() });

db.berries.insert({ berryName: "Bear Berry",
berryNameInFinnish: "Sianpuolukka",
berryURL: "/berry_images/sianpuolukka_bearberry_author_Regis_Gallois.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Arctostaphylos_uva-ursi",
authorName: "Regis Gallois",
createdAt: new Date() });

db.berries.insert({ berryName: "Mountain Currant",
berryNameInFinnish: "Taikinamarja",
berryURL: "/berry_images/taikinamarja_mountaincurrant_author_André_Karwath.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Ribes_alpinum",
authorName: "André Karwath",
createdAt: new Date() });

db.berries.insert({ berryName: "Hagberry",
berryNameInFinnish: "Tuomi",
berryURL: "/berry_images/tuomi_hagberry_author_Anneli_Salo.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Prunus_padus",
authorName: "Anneli Salo",
createdAt: new Date() });

db.berries.insert({ berryName: "Common Sea Buckthorn",
berryNameInFinnish: "Tyrni",
berryURL: "/berry_images/tyrni_commonseabuckthorn_author_Jean_Tosti.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Hippophae_rhamnoides",
authorName: "Jean Tosti",
createdAt: new Date() });

db.berries.insert({ berryName: "Raspberry",
berryNameInFinnish: "Vadelma",
berryURL: "/berry_images/vadelma_raspberry_author_G_Taliska.jpg",
wikiURL: "https://en.wikipedia.org/wiki/Rubus_idaeus",
authorName: "G. Taliska",
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
});
