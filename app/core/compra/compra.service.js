'use strict';

angular.
  module('core').
  factory('compraMovil',
    function() {

      return {
        productos: new Map(),
        getProductos: function() {
            console.debug('getproductos %s',this.productos.size);
            return Array.from(this.productos.values());    
        },
        setProducto: function(p) {
          //todo cantidad actualizar
            if(this.productos.get(p.id) != undefined ){ // Otra forma directa -> (!this.productos.get(p.id))
              this.productos.get(p.id).cantidad++;

            }else{
              this.productos.set(p.id, {"cantidad": 1, "imagen": p.imageUrl, "id": p.id, "name": p.name});
            }
           
        },
        removeProducto: function(id){
            this.productos.delete(id);
        }

      }; //end return
    } // end function

  );