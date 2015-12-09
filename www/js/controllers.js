angular.module('starter.controllers', [])

  .controller('StartCtrl', function ($scope, ProductTagStore, $cordovaNfc, $cordovaNfcUtil) {

    //Because of the problem about the async-ness of the nfc plugin, we need to wait
    //for it to be ready.
    $cordovaNfc.then(function (nfcInstance) {

      nfcInstance.addTagDiscoveredListener(function (nfcEvent) { // addTagDiscoveredListener
          //Callback when ndef got triggered
          console.log('addTagDiscoveredListener - ' + JSON.stringify(nfcEvent.tag, null, 2));
          $cordovaNfcUtil.then(function (nfcUtil) {
            console.log('ID' + nfcUtil.bytesToHexString(nfcEvent.tag.id));
            nfcEvent.tag.id = nfcUtil.bytesToHexString(nfcEvent.tag.id);
            ProductTagStore.add(nfcEvent.tag);
          });
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

    $scope.products = ProductTagStore.all();

  })

  .controller('ProductComparisonCtrl', function ($scope, $state, ProductTagStore) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.products = ProductTagStore.all();
    $scope.remove = function (product) {
      ProductTagStore.remove(product);
    };

    $scope.$on('$ionicView.enter', function (e) {
      console.log('ENTER EVENT ProductComparisonCtrl params: ');
      $scope.products = ProductTagStore.all();

    });

  })

  .controller('ProductDetailCtrl', function ($scope, $stateParams, $state, ProductTagStore) {
    console.log('Method ProductDetailCtrl');
    var me = this;
    me.product = ProductTagStore.get($stateParams.tagId);

    $scope.getProduct = function () {
      return me.product;
    };

    $scope.$on('$ionicView.enter', function (e) {
      console.log('ENTER EVENT ProductDetailCtrl ID: ' + JSON.stringify($stateParams.tagId));
      me.product = ProductTagStore.get($stateParams.tagId);
    });
  })

  .controller('SettingsCtrl', function ($scope) {
    $scope.settings = {
      enableNFC: true
    };

    $scope.exitApp = function () {
      //alert('Exiting app.');
      ionic.Platform.exitApp();
    };
  });
