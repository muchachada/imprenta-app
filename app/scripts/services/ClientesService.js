var NeDB = require('nedb');

angular.module('App').factory('ClientesService', function(){
  var service = {};
  service.db = new NeDB({autoload: true});
  return service;
})
