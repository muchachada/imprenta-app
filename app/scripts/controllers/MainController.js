angular.module('App').controller('MainController', [
  '$scope',
  '$mdSidenav',
  '$state',
  function($scope, $mdSidenav, $state){

  $scope.toggleLeftMenu = function() {
   $mdSidenav('left').toggle();
 };

 $scope.goTo = function(to) {
   $state.go(to);
   $scope.toggleLeftMenu();
 }


}]);
