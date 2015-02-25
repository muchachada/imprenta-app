angular.module('App').controller('TrabajosNewController', [
  '$scope',
  'TrabajosService',
  '$state',
  function($scope, Trabajos, $state) {
    $scope.save = function (trabajo) {
      trabajo.title = trabajo.type + ' para ' + trabajo.cliente
      Trabajos.insert(trabajo);
      $state.go('trabajos')
    }

}]);
