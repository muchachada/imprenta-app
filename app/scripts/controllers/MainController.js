angular.module('App')
.controller('MainController', function($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
                        .then(function(){
                          $log.debug("toggle LEFT is done");
                        });
  };
})
.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close()
                        .then(function(){
                          $log.debug("close LEFT is done");
                        });
  };
});