angular.module('App').controller('ClientesNewController', [
  '$scope',
  'ClientesService',
  '$state',
  function($scope, Clientes, $state) {
    $scope.save = function (cliente) {
      cliente.title = cliente.nomYApe
      Clientes.insert(cliente);
      $state.go('clientes')
    }

}]);