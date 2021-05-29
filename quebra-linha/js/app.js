(function(){
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", function($scope){
        $scope.strItens = "";
        $scope.arrItens = [];
        $scope.mensagem = "";


        //declarar funcoes que devem ser vistas fora deste arquivo
        $scope.exibeMsg = exibeMsg;

        function exibeMsg(){
           //validar string
           //$scope.mensagem = $scope.strItens.replace(";", /(?:\n)/g);
           $scope.arrItens = $scope.strItens.split(";");
           console.log($scope.arrItens);
           $scope.mensagem = "amanha \n teste";
        }

    });

})();
