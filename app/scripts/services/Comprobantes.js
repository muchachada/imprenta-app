angular.module('App').service(function(){
  this.facturaA = {
    name: 'Factura A',
    fields: [
      'CUIT',
      'razonSocial'
    ],
  };

  this.facturaB = {
    name: 'Factura B',
    fields: [
      'CUIT',
      'razonSocial'
    ],
  };

})
