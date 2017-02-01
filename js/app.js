var App = angular.module("App", ['ui.bootstrap', 'ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){


    $stateProvider
      .state('/', {
        url: '/',
        abstract: true,
        templateUrl: 'index.html'
      });


}]);
