var Food = /** @class */ (function () {
    function Food(foodName, foodPrice, foodWeight, isKosher, manufacturer, expDate) {
        this.foodName = foodName;
        this.foodPrice = foodPrice;
        this.foodWeight = foodWeight;
        this.isKosher = isKosher;
        this.manufacturer = manufacturer;
        this.expDate = expDate;
        Food.totalFood += 1;
    }
    Food.prototype.setNewFood = function (newFood) {
        this.foodName = newFood.foodName;
        this.foodPrice = newFood.foodPrice;
        this.foodWeight = newFood.foodWeight;
        this.isKosher = newFood.isKosher;
        this.manufacturer = newFood.manufacturer;
        this.expDate = newFood.expDate;
    };
    Food.prototype.printItem = function () {
        console.log(this.foodName, this.foodPrice, this.foodWeight, (this.isKosher ? "Kosher" : "Gevalt"), this.manufacturer, this.expDate.toDateString());
    };
    Food.prototype.printShortItem = function () {
        console.log(this.foodName, this.foodPrice);
    };
    Food.prototype.getPricePerKg = function () {
        return this.foodPrice / this.foodWeight;
        //return 1 / this.foodWeight * this.foodPrice
    };
    Food.prototype.getBeyoker = function (food1, food2) {
        // if (food1.foodPrice>food2.foodPrice){
        //     return food1;
        // } else {
        //     return food2;
        // }
        return food1.foodPrice > food2.foodPrice ? food1 : food2;
    };
    Food.prototype.checkExp = function () {
        return this.expDate > new Date();
    };
    Food.getTotalFood = function () {
        return Food.totalFood;
    };
    Food.prototype.setName = function (newName) {
        this.foodName = newName;
    };
    Food.totalFood = 0;
    return Food;
}());
var leonLove = new Food("Greber", 15, 0.2, true, "Materna", new Date("2022-12-22"));
leonLove.printItem();
console.log(leonLove.getPricePerKg());
var emptyFood = new Food("", 0, 0, false, "", new Date());
emptyFood.printItem();
emptyFood.setNewFood(leonLove);
emptyFood.setName("Kasha");
emptyFood.printItem();
var rom = new Food("Showarma be pita (leon dont have money)", 38, 250, false, "Asadi", new Date());
//console.log(leonLove.getTotalFood());
//console.log(emptyFood.getTotalFood());
//console.log(rom.getTotalFood());
console.log(Food.getTotalFood());
