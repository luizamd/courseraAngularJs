(function(){
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", function($scope){
        $scope.strItens = "";
        $scope.mensagem = "";

        //declarar funcoes que devem ser vistas fora deste arquivo
        $scope.exibeMsg = exibeMsg;

        function exibeMsg(){
           //validar string
           var arrItens = $scope.strItens.split(",");
           console.log(arrItens);
           //get Mensagem exibir mensagem
           var qtdadeItens = arrItens.length;
           console.log(qtdadeItens);
           if(qtdadeItens <= 0){
               $scope.mensagem = "Please enter data first.";
           }
           else if(qtdadeItens > 3){
               $scope.mensagem = "Too Much";
           }
           else {
               $scope.mensagem = "Enjoy!"
           }
        }

    });

})();
