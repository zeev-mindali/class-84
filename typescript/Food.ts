class Food {
    private foodName: string;
    private foodPrice: number;
    private foodWeight: number;
    private isKosher: boolean;
    private manufacturer: string;
    private expDate: Date;
    private static totalFood: number = 0;

    constructor(foodName: string, foodPrice: number, foodWeight: number, isKosher: boolean, manufacturer: string, expDate: Date) {
        this.foodName = foodName;
        this.foodPrice = foodPrice;
        this.foodWeight = foodWeight;
        this.isKosher = isKosher;
        this.manufacturer = manufacturer;
        this.expDate = expDate;
        Food.totalFood += 1;
    }

    public setNewFood(newFood: Food) {
        this.foodName = newFood.foodName;
        this.foodPrice = newFood.foodPrice;
        this.foodWeight = newFood.foodWeight;
        this.isKosher = newFood.isKosher;
        this.manufacturer = newFood.manufacturer;
        this.expDate = newFood.expDate;
    }

    public printItem(): void {
        console.log(this.foodName, this.foodPrice, this.foodWeight, (this.isKosher ? "Kosher" : "Gevalt"),
            this.manufacturer, this.expDate.toDateString());
    }

    public printShortItem(): void {
        console.log(this.foodName, this.foodPrice);
    }

    public getPricePerKg(): number {
        return this.foodPrice / this.foodWeight;
        //return 1 / this.foodWeight * this.foodPrice
    }

    public getBeyoker(food1: Food, food2: Food): Food {
        // if (food1.foodPrice>food2.foodPrice){
        //     return food1;
        // } else {
        //     return food2;
        // }
        return food1.foodPrice > food2.foodPrice ? food1 : food2;
    }

    public checkExp(): boolean {
        return this.expDate > new Date();
    }

    public static getTotalFood(): number {
        return Food.totalFood;
    }

    public setName(newName: string) {
        this.foodName = newName;
    }
}

let leonLove: Food = new Food("Greber", 15, 0.2, true, "Materna", new Date("2022-12-22"));
leonLove.printItem();
console.log(leonLove.getPricePerKg());
let emptyFood: Food = new Food("", 0, 0, false, "", new Date());
emptyFood.printItem();
emptyFood.setNewFood(leonLove);
emptyFood.setName("Kasha");
emptyFood.printItem();
let rom: Food = new Food("Showarma be pita (leon dont have money)", 38, 250, false, "Asadi", new Date());

//console.log(leonLove.getTotalFood());
//console.log(emptyFood.getTotalFood());
//console.log(rom.getTotalFood());
console.log(Food.getTotalFood());

