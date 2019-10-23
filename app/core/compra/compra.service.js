'use strict';

angular.
  module('core.phone').
  factory('compraMovil',
    function() {

      return {
        producto: null,
        getProducto: function() {
            return this.producto;
        },
        setProducto: function(msg) {
            this.producto = msg;
        }

      }; //end return
    } // end function

  );