App.factory("StockService", ["$http", function($http){
  var StockService = {};

  StockService.all = function () {
    return $http.get("js/data/yql.json")
      .then(function(response){
          return response.data;
      });
  }

  return StockService;

}]);
