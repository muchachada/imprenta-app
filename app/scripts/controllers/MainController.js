angular.module('App').controller('MainController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.openLeftMenu = function() {
   $mdSidenav('left').toggle();
 };
}]);
