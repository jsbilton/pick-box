(function() {
  'use strict';
  angular
    .module('pbox',[
      'ngRoute',
      'underscore',
      'moment'
    ])
    .config(function ($routeProvider){
      $routeProvider
      .when('/', {
        template: '<h1>Pick Box</h1><a href="#/pbox">go to box</a>',
        controller: 'MainController'
      })
      .when('/pbox', {
        templateUrl: 'views/pbox/list.html',
        controller: 'PboxController'
      })
      .when('/pbox:pboxId', {
        templateUrl: 'views/pbox/detail.html',
        controller: 'PboxController'
      })
      .when('/pbox:pboxId/edit', {
        templateUrl: 'views/pbox/edit.html',
        controller: 'PboxController'
      })
      .when('/addAccess', {
        templateUrl: 'views/pbox/create.html',
        controller: 'PboxController'
      })
      .when('/likes', {
        templateUrl: 'views/pbox/list.html',
        controller: 'PboxController'
      })
      .when('/likes:likepboxId',{
        templateUrl: 'views/pbox/detail.html',
        controller: 'PboxController'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .otherwise({ redirectTo: '/404'})
    });


  angular
  .module('underscore',[])
  .factory('_', function($window) {
    return $window._;
  })

  angular
  .module('moment', [])
  .factory('moment', function($window) {
    return $window.moment;
  });

}());
