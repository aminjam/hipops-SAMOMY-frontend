(function() {
  'use strict';

  // name is handy for logging
  var injections = ['$stateProvider', '$urlRouterProvider'];

  // Define the factory on the module.
  // Inject the dependencies.

  function instance($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/products');

    $stateProvider
      // HOME STATES AND NESTED VIEWS ========================================
      .state('products', {
          url: '/products',
          templateUrl: 'components/products/partials/products.html'
      })
      // nested list with custom controller
      .state('products.list', {
            url: '/list',
            templateUrl: 'components/products/partials/products.list.html',
            controller: 'products.ListCtrl'
        })
      .state('products.create', {
            url: '/create',
            templateUrl: 'components/products/partials/products.add.html',
            controller: 'products.AddCtrl'
        });

    }

  injections.push(instance);
  angular.module('app').config(injections);
})();
