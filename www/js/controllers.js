angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $cordovaNfc) {

    //Because of the problem about the async-ness of the nfc plugin, we need to wait
    //for it to be ready.
    $cordovaNfc.then(function (nfcInstance) {

      //Use the plugins interface as you go, in a more "angular" way
      nfcInstance.addNdefListener(function (nfcEvent) { // addTagDiscoveredListener
          //Callback when ndef got triggered
          console.log('addNdefListener - ' + JSON.stringify(nfcEvent.tag, null, 2));
        })
        .then(
          //Listener Success callback
          function listenerAdded(event) {
            console.log('addNdefListener - NFC Tag event listener added.');
          },
          //Listerner Fail callback
          function listenerAddFailed(err) {
            console.log('addNdefListener - NFC Tag event listener could not be added. Reason: ' + JSON.stringify(reason));
            alert('Could not register for NFC events. ' + JSON.stringify(reason));
          });

      nfcInstance.addTagDiscoveredListener(function (nfcEvent) { // addTagDiscoveredListener
          //Callback when ndef got triggered
          console.log('addTagDiscoveredListener - ' + JSON.stringify(nfcEvent.tag, null, 2));
        })
        .then(
          //Listener Success callback
          function listenerAdded(event) {
            console.log('addTagDiscoveredListener - NFC Tag event listener added.');
          },
          //Listerner Fail callback
          function listenerAddFailed(err) {
            console.log('addTagDiscoveredListener - NFC Tag event listener could not be added. Reason: ' + JSON.stringify(reason));
            alert('Could not register for NFC events. ' + JSON.stringify(reason));
          });
    });
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
