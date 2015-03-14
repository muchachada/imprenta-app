var NeDB = require('nedb'),
path = require('path'),
gui = require('nw.gui');

angular.module('App').factory('Models', function($rootScope){
  var service = {};

  // TRABAJOS
  var Trabajos = {};
  Trabajos.db = new NeDB({filename: path.join(gui.App.dataPath, 'trabajos.db'), autoload: true});

  // Insert objects into DB, firing event
  Trabajos.insert = function(doc, cb) {
    this.db.insert(doc, function(){
      $rootScope.$broadcast('trabajos-db-change');
      typeof cb === 'function' && cb();
    });
  }

  // CLIENTES
  var Clientes = {}
  Clientes.db = new NeDB({filename: path.join(gui.App.dataPath, 'clientes.db'), autoload: true});

  // Insert objects into DB, firing event
  Clientes.insert = function(doc, cb) {
    this.db.insert(doc, function(){
      $rootScope.$broadcast('clientes-db-change');
      typeof cb === 'function' && cb();
    });
  }

  service.Trabajos = Trabajos;
  service.Clientes = Clientes;
  return service;
})
