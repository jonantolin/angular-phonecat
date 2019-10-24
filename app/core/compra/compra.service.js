'use strict';

angular.
  module('core').
  factory('compraMovil',
    function() {

      return {
        productos: [],
        getProductos: function() {
            return this.productos;
        },
        setProducto: function(p) {
            this.productos.push(p);
        },
        removeProducto: function(p){
            this.productos.splice(this.productos.indexOf(p),1);
        }

      }; //end return
    } // end function

  );