(function() {
  'use strict';

  // Controller name is handy for logging
  /* Naming Convention:
   * {{component}}.{{Functionality}}Ctrl.js
   * file-name should match the ID.
   * e.g. for Profile component and Signup functionality it should be (profile.SignupCtrl) with the same file name.
   */
  var ID = 'products.ListCtrl';
  var injections = ['$scope', '$http', 'common', 'utilities'];

  // Define the controller on the module.
  // Inject the dependencies.
  // Point to the controller definition function.

  function instance($scope, $http, common, utilities) {
    var log = common.log,
      endpoints = utilities.endpoints;
    endpoints('api.products').then(function(api) {
      $http.get(api.url).success(function(data) {
        $scope.products = data;
      });
    });


    function activate() {

      //Add Functions for the set of promises
      var promises = [];
      common.activate(promises, ID)
        .then(function() {
          log.success('Activated {{ID}}');
        });
    }
    activate();

    //#region Exposed Methods

    //#endregion

    //#region Internal Methods

    //#endregion

    //keep $scope exposed method as a single line for readability
    //$scope.getData = getData;
  }
  injections.push(instance);
  angular.module('app').controller(ID, injections);
})();
