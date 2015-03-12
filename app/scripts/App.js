angular.module('App', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/trabajos");

  $stateProvider
    .state('trabajos', {
      url: "/trabajos",
      templateUrl: "partials/trabajos.html",
      controller: "TrabajosController"
    })
    .state('trabajos-new', {
      url: "/trabajos/new",
      templateUrl: "partials/trabajos-new.html",
      controller: "TrabajosNewController"
    })
});
