(function() {
  'use strict';

  // Controller name is handy for logging
  var ID = 'products.AddCtrl';
  var injections = ['$scope', '$http', '$location', 'common', 'utilities'];

  // Define the controller on the module.
  // Inject the dependencies.
  // Point to the controller definition function.

  function instance($scope, $http, $location, common, utilities) {
    var log = common.log,
      endpoints = utilities.endpoints;

    $scope.add = function(product) {
      endpoints('api.products').then(function(api){
        $http.post(api.url, product).success(function() {
          log.success('Created!');
        });
      });
    };

    function activate() {

      //Add Functions for the set of promises
      var promises = [];
      common.activate(promises, ID)
        .then(function() {
          log.success('Activated ' + ID);
        });
    }
    activate();

    //#region Exposed Methods

    //#endregion

    //#region Internal Methods

    //#endregion
  }
  injections.push(instance);
  angular.module('app').controller(ID, injections);
})();
