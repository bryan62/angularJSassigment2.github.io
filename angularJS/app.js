var app = angular.module("ShoppingListCheckOff",[])
.controller("ShoppingListToBuycontroller",ShoppingListToBuycontroller)
.controller("ShoppingListAlreadyBoughtController",ShoppingListAlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ShoppingListToBuycontroller.$inject=['ShoppingListCheckOffService'];
function ShoppingListToBuycontroller(ShoppingListCheckOffService) {
    var ToBuyController = this;
    

    ToBuyController.items = ShoppingListCheckOffService.getItemsToBuy();
    ToBuyController.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.RemoveItem(itemIndex);
      };
   
}

ShoppingListAlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function ShoppingListAlreadyBoughtController(ShoppingListCheckOffService) {
    var AlreadyBoughtController= this;

    AlreadyBoughtController.items = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
    var service = this;
    var itemsToBuy = [
        { name: "cookies", quantity: 10 },
        { name: "cake", quantity: 5 },
        { name: "biscuits", quantity: 8 },
        { name: "chips", quantity: 4 },
        { name: "cola", quantity: 2 }
    ];

    var itemsBought=[];

    service.addItem = function (itemsName,itemsQuantity) {
        var item = {  name: itemsName,
            quantity: itemsQuantity
        };
        arrayItems.push(item);
    };

    service.RemoveItem = function (itemsIndex,) {
        var Bought = itemsToBuy[itemsIndex];
        itemsToBuy.splice(itemsIndex,1);

        itemsBought.push(Bought);
    };
    
    service.getItemsToBuy = function () {
        return itemsToBuy;
    };

    service.getItemsBought = function () {
        return itemsBought;
    };
}