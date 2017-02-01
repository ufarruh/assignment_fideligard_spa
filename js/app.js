var App = angular.module("App", ['ui.bootstrap', 'ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/dashboard')

    $stateProvider
      .state('dashboard', {
        url: '/dashboard'
      })

      .state('dashboard.trade', {
        url: '/trade',
        views: {
          'dash@': {
            templateUrl: 'js/templates/trade.html'
          }
        }
      })

      .state('dashboard.transactions', {
        url: '/transactions',
        views: {
          'dash@': {
            templateUrl: 'js/templates/transactions.html'
          }
        }
      })

      .state('dashboard.portfolio', {
        url: '/portfolio',
        views: {
          'dash@': {
            templateUrl: 'js/templates/portfolio.html'
          }
        }
      });



}]);
