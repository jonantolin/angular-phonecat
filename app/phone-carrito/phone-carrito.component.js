'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneCarrito').
  component('phoneCarrito', {
    templateUrl: 'phone-carrito/phone-carrito.template.html',
    controller: ['Phone', 'compraMovil', '$scope',
      function PhoneComparadorController(Phone, compraMovil, $scope) {

        var self = this;

        self.movilesCarrito = function(){
          return compraMovil.getProducto();
        }
    
      }
    ]
  });

