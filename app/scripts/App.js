angular.module('App', ['ngMaterial', 'ui.router', 'ngMdIcons'])

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
    .state('trabajos-new', {
      url: "/trabajos/new",
      templateUrl: "partials/trabajos-new.html",
      controller: "TrabajosNewController"
    })
});
