'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneCarrito').
  component('phoneCarrito', {
    templateUrl: 'phone-carrito/phone-carrito.template.html',
    controller: ['compraMovil', '$scope',
      function PhoneCarritoController(compraMovil) {

        var self = this;
        self.carrito  = compraMovil.getProductos();
        
        console.log('controlador carrito');

      }
    ]
  });

