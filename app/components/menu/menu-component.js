angular.module('phonecatApp').component('menuNav', {

    templateUrl: './components/menu/menu-template.html',
    controller: ['compraMovil',function menuNav(compraMovil){

        var self = this;

        self.movilesCarrito = function(){
          return compraMovil.getProducto();
        }
        
    
    }]

    }
);