var NeDB = require('nedb'),
path = require('path'),
gui = require('nw.gui');

angular.module('App').factory('ClientesService', function(){
  var service = {};
  service.db = new NeDB({filename: path.join(gui.App.dataPath, 'clientes.db'), autoload: true});
  return service;
})
