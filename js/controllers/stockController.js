App.controller("StockCtrl", ["$scope", "StockService", function($scope, StockService){

    StockService.all()
      .then(function(response){
        $scope.stocks = response;
      });

      $scope.tradeStock = function(stock){
        $scope.stock = stock;
        console.log(stock);
      }

      $scope.cost = function(price){
        var price = parseInt(price);
        var total = price * $scope.quantity;
        console.log($scope.quantity);
        return total;
      }
}]);
