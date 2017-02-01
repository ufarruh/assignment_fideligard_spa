App.controller("StockCtrl", ["$scope", "$http", function($scope, $http){

  function all(){
    return $http.get("js/data/yql.json")
      .then(function(response){
        $scope.stocks = response.data;
      });
  }

  all();
}]);
