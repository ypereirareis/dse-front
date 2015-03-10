'use strict';

angular.module('databaseSchemaExplorer', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })

  .factory('RestClient', function (Restangular) {
    var RestClient = Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl('http://192.168.59.103:3010');
    });
    return RestClient;
  })
;
