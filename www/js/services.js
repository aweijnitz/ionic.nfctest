angular.module('starter.services', [])

.factory('ProductTagStore', function() {
  // Might use a resource here that returns a JSON array

  /* Example tag object
   {
   "id": "04924afa063b80",
   "techTypes": [
   "android.nfc.tech.IsoDep",
   "android.nfc.tech.NfcA"
   ]
   }

   */
  var productTags = [{
    "id": "DEMO-1111111",
    "techTypes": [
      "demo.always.present",
      "android.nfc.tech.IsoDep",
      "android.nfc.tech.NfcA"
    ]
  }];

  return {
    all: function() {
      return productTags;
    },
    add: function add(tag) {
      productTags.push(tag);
    },
    remove: function(tag) {
      productTags.splice(productTags.indexOf(tag), 1);
    },
    get: function(tagId) {
      for (var i = 0; i < productTags.length; i++) {
        if (productTags[i].id === parseInt(tagId)) {
          return productTags[i];
        }
      }
      return null;
    }
  };
});
