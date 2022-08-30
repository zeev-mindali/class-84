var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Table = /** @class */ (function () {
    function Table(person, waiter, dish, responseTime) {
        this.person = person;
        this.waiter = waiter;
        this.dish = dish;
        this.responseTime = responseTime;
        this.response = this.person * this.dish * responseTime;
        tableArray.push(this);
    }
    //   public getYebushTime(): number {
    //     return this.response;
    //   }
    Table.prototype.toString = function () {
        return "total person ".concat(this.person, " ordered ").concat(this.dish, " dishes and will wait for ").concat(this.response, " time");
    };
    Table.tableArray = [];
    return Table;
}());
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(dish) {
        return _super.call(this, 1, "Rom", dish, 5) || this;
    }
    return Bar;
}(Table));
var Regular = /** @class */ (function (_super) {
    __extends(Regular, _super);
    function Regular(dish) {
        return _super.call(this, 4, "Tom", dish, 10) || this;
    }
    return Regular;
}(Table));
var Vip = /** @class */ (function (_super) {
    __extends(Vip, _super);
    function Vip(dish) {
        return _super.call(this, 8, "Sivan", dish, 2) || this;
    }
    Vip.prototype.toString = function () {
        var msg = "\n" + this.waiter + "\n================================\n";
        msg += _super.prototype.toString.call(this) + "\n";
        return msg;
    };
    return Vip;
}(Table));
var Leon = /** @class */ (function (_super) {
    __extends(Leon, _super);
    function Leon(dish) {
        return _super.call(this, 2, "vova", dish, 60) || this;
    }
    return Leon;
}(Table));
//super() => contructor in higher level (aba)
//super.print() => function in higher level (aba)
var table1 = new Bar(2);
var table2 = new Regular(4);
var table3 = new Vip(10);
var table4 = new Leon(1); //eats only greber
var tableArray = [table1, table2, table3, table4];
var itamerArray = [new Bar(2), new Regular(4), new Vip(10), new Leon(1)];
//tableArray.map((item) => console.log(item.toString()));
Table.tableArray.map(function (item) { return console.log(item.toString()); });
