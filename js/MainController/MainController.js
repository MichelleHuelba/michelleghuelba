app.controller('MainController', ['$scope', function($scope){
  $scope.list = ["Withdraw", "Deposit"];
}])



app.controller('mainP', ['$scope', function($scope){
 $scope.Onclickmain = function()
 {$scope.main = true;} 
 $scope.num3 = 100000;
}])

app.controller('getdifference', ['$scope', function($scope){
  $scope.amount = 100000;
  $scope.diff = function(amount, num2){
    $scope.txtdifference = 'difference :';
    $scope.difference = parseInt(amount)- parseInt(num2);

  }
}]);
 
app.controller('getdifference', ['$scope', function($scope){
  $scope.amount = 100000;
  $scope.diff = function(num3, num2){
    $scope.txtdifference = 'difference : ';
    $scope.difference = parseInt(num3) - parseInt(num2);

  }
}]);



app.controller('getadd', ['$scope', function($scope){
   $scope.amount = 100000;
  $scope.add = function(amount, num4){
      $scope.txtsum = 'Sum : ';
      $scope.sum = parseInt(amount) + parseInt(num4);
  }
}]);

app.controller('getadd', ['$scope', function($scope){
   $scope.amount = 100000;
  $scope.add = function(num3, num4){
      $scope.txtsum = 'Sum : ';
      $scope.sum = parseInt(num3) + parseInt(num4);
  }
}]);

