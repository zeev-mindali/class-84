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
    function Account() {
        Account.accountCounter += 1;
        this.accountNumber = Account.accountCounter;
        this.limited = false;
        this.balance = 0;
    }
    //deposit: (amount: number) => void;
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    Account.prototype.print = function () {
        console.log("\n        account number:  ".concat(this.accountNumber, "\n        account balance: ").concat(this.balance, "\n    "));
    };
    Account.accountCounter = 0;
    return Account;
}());
var Bussniess = /** @class */ (function (_super) {
    __extends(Bussniess, _super);
    function Bussniess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    return Student;
}(Account));
var vova = new Bussniess();
vova.deposit(1000000);
var rom = new Private();
rom.deposit(500);
var chaya = new Student();
chaya.deposit(18);
var lion = new Bussniess();
lion.withdraw(100000);
vova.print();
rom.print();
chaya.print();
lion.print();
