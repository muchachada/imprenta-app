angular.module('App').controller('TrabajosController', [
  '$scope',
  'TrabajosService',
  function($scope, Trabajos) {

  updateTrabajosList();

  $scope.$on('trabajos-db-change', updateTrabajosList)

  function updateTrabajosList() {
    console.log('updated')
    Trabajos.db.find({}, function(err, docs){
      $scope.trabajos = docs;
      $scope.$apply();
    })
  };


}]);
