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
var Account = /** @class */ (function () {
    function Account(commission) {
        Account.accountCounter += 1;
        this.accountNumber = Account.accountCounter;
        this.limited = false;
        this.balance = 0;
        this.commission = commission;
    }
    //deposit: (amount: number) => void;
    Account.prototype.deposit = function (amount) {
        this.balance += this.amountCommission(amount);
    };
    Account.prototype.withdraw = function (amount) {
        this.balance -= amount + amount * this.commission;
    };
    Account.prototype.amountCommission = function (amount) {
        Account.bankProfit += amount * this.commission;
        return amount - amount * this.commission;
    };
    Account.prototype.print = function () {
        console.log("\n        account number:  ".concat(this.accountNumber, "\n        account balance: ").concat(this.balance, "\n    "));
    };
    Account.prototype.printProfit = function () {
        console.log("Bank Profit: " + Account.bankProfit);
    };
    Account.accountCounter = 0;
    Account.bankProfit = 0;
    return Account;
}());
var Bussniess = /** @class */ (function (_super) {
    __extends(Bussniess, _super);
    function Bussniess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loan = 0;
        return _this;
    }
    Bussniess.prototype.getLoan = function (amount) {
        this.loan += amount;
    };
    return Bussniess;
}(Account));
var Private = /** @class */ (function (_super) {
    __extends(Private, _super);
    function Private() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Private;
}(Account));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("i am so poor, i can't even pay attention");
    };
    return Student;
}(Account));
var vova = new Bussniess(0.05);
vova.deposit(1000000);
var rom = new Private(0.1);
rom.deposit(500);
var chaya = new Student(0.0);
chaya.deposit(18);
var lion = new Bussniess(0.2);
lion.withdraw(100000);
vova.print();
rom.print();
chaya.print();
lion.print();
vova.printProfit();
