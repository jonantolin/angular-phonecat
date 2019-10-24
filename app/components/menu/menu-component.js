angular.module('phonecatApp').component('menuNav', {

    templateUrl: './components/menu/menu-template.html',
    controller: ['compraMovil',function menuNav(compraMovil){

        var self = this;

        self.contMoviles = function(){
          return compraMovil.getProductos().length;
        }
        
    
    }]

    }
);