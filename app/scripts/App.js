angular.module('App', ['ngMaterial', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/trabajos");

  $stateProvider
    .state('trabajos', {
      url: "/trabajos",
      templateUrl: "partials/trabajos.html",
      controller: "TrabajosController"
    })
    .state('clientes', {
      url: "/clientes",
      templateUrl: "partials/clientes.html",
      controller: "ClientesController"
    })
});
