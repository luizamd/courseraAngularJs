(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  function ToBuyController(ShoppingListCheckOffService){
    var toBuyCtrl = this;
    toBuyCtrl.items = ShoppingListCheckOffService.getToBuyList();


    toBuyCtrl.addBoughtItem = function(indiceToBuy){
      ShoppingListCheckOffService.addBoughtItem(indiceToBuy);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;
    boughtCtrl.items = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    //initial values
    var toBuyList = [
      {name: "barra", quantity: 1},
      {name: "meias", quantity: 12},
      {name: "bateria frequencimetro", quantity: 1},
      {name: "porta-chaves", quantity: 2},
      {name: "proteina", quantity: 2}];
    var boughtList = [];

    //function declaration
    //service.getToBuyList = getToBuyList;
    service.getBoughtList = getBoughtList;
    service.addBoughtItem = addBoughtItem;


    service.getToBuyList = function(){
      return toBuyList;
    }

    function getBoughtList(){
      return boughtList;
    }

    function addBoughtItem(indiceToBuy){
      addItemToBoughtList(indiceToBuy);
      removeItemToBuyList(indiceToBuy);
    }

    function addItemToBoughtList(indiceToBuy){
      var newItem = toBuyList[indiceToBuy];
      boughtList.push(newItem);
      console.log(boughtList);
    }

    function removeItemToBuyList(indiceToBuy){
      toBuyList.splice(indiceToBuy, 1);
    }

  }

})();
