angular.module('phonecatApp').component('menuNav', {

    templateUrl: './components/menu/menu-template.html',
    controller: ['$scope', function menuNav($scope){

        

        var self = this;

        $scope.enlaces = [
            {
             "nombre": "Inicio",
             "ruta": "#!/phones",
             "activo": true
            },
            {
             "nombre": "Comparador",
             "ruta": "#!/comparador",
             "activo": false
            },
             {
             "nombre": "Carrito",
             "ruta": "#!/carrito",
             "activo": false
            },
             {
             "nombre": "Nuevo",
             "ruta": "#!/nuevo",
             "activo": false
            }

        ];

        this.cambiarActivo = function(enlace){

            $scope.enlaces.forEach(element => {
                element.activo = false;
            });
            enlace.activo = true;

        }

       
    }]

    }
);