
(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var itemsToBuy = this;
  itemsToBuy.items = ShoppingListCheckOffService.getToBuyItems();

  itemsToBuy.moveItem = function (ItemIdex, item) {
    ShoppingListCheckOffService.moveItem(ItemIdex, item);
  };

}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var ArleadyBoughtItems = this;

  ArleadyBoughtItems.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of already bought shopping items
  var toBuyItems = [
    { name: "Cookies",         quantity: 10 },
    { name: "Milk",  			quantity:7 },
    { name: "Sugar",      	quantity: 9 },
    { name: "Cheesse",    quantity: 6 },
    { name: "Pudding",     quantity: 30 }
  ];
  // List of already bought items
  var boughtItems = [];

  service.moveItem = function(itemIdex, item) {
    boughtItems.push(item);
    toBuyItems.splice(itemIdex, 1);
  }

  service.getToBuyItems = function() {
    return toBuyItems;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

};

})();