angular.module('App').controller('ClientesController', [
  '$scope',
  'ClientesService',
  function($scope, Clientes) {

  updateClientesList();

  $scope.$on('clientes-db-change', updateClientesList)

  function updateClientesList() {
    console.log('updated')
    Clientes.db.find({}, function(err, docs){
      $scope.clientes = docs;
      $scope.$apply();
    })
  };

  $scope.selectCliente = function (i) {
    $scope.cliente = $scope.clientes[i]
  }
}]);
