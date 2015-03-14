angular.module('App').controller('TrabajosController', [
  '$scope',
  'Models',
  function($scope, Models) {
    var Trabajos = Models.Trabajos;

    updateTrabajosList();

    $scope.$on('trabajos-db-change', updateTrabajosList)

    function updateTrabajosList() {
      Trabajos.db.find({}, function(err, docs) {
        $scope.trabajos = docs;
        $scope.$apply();
      })
    };

    $scope.selectTrabajo = function(i) {
      $scope.trabajo = $scope.trabajos[i]
    }


  }
]);
