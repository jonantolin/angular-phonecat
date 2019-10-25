'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneCarrito').
  component('phoneCarrito', {
    templateUrl: 'phone-carrito/phone-carrito.template.html',
    controller: ['Phone', 'compraMovil', '$scope',
      function PhoneComparadorController(Phone, compraMovil, $scope) {

        var self = this;
        self.carrito  = compraMovil.getProductos();

       
        /*self.carrito = function(){
          return compraMovil.getProductos();
        }*/
       

        //TODO mirar porque no refresca automaticamente el carrito, nuevo movil y cantidad
        $scope.$on('eventoCompra', function(event, data){

          self.carrito  = compraMovil.getProductos();
          console.debug('carrito evento compraaaaaaaa');
        });

       //self.carrito = compraMovil.getProductos();

       //Todo pintar cantidad de unidades
        
        console.log('controlador carrito');


    
      }
    ]
  });

