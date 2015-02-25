var NeDB = require('nedb'),
path = require('path'),
gui = require('nw.gui');

angular.module('App').factory('ClientesService', function($rootScope){
  var service = {};

  // Add NeDB object
  var db = new NeDB({filename: path.join(gui.App.dataPath, 'clientes.db'), autoload: true});
  service.db = db;

  // Insert objects into DB, firing event
  service.insert = function(doc) {
    this.db.insert(doc, function(err, saved){
      if(err || !saved){
                console.log('error not inserted')
            }else{
              console.log('inserted')
              $rootScope.$broadcast('clientes-db-change'); 
            }
    });
  }

  // 

  return service;
})

