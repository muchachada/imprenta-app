var NeDB = require('nedb');

angular.module('App').factory('TrabajosService', function(){
  var service = {};
  service.db = new NeDB({autoload: true});
  return service;
})
