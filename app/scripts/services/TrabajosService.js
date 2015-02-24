var NeDB = require('nedb'),
path = require('path'),
gui = require('nw.gui');

angular.module('App').factory('TrabajosService', function(){
  var service = {};
  service.db = new NeDB({filename: path.join(gui.App.dataPath, 'trabajos.db'), autoload: true});
  return service;
})
