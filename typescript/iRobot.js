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
var iRobot615 = /** @class */ (function () {
    function iRobot615(batteryLevel, batteryLife, garbageLevel, homePosition) {
        this.batteryLevel = batteryLevel;
        this.batteryLife = batteryLife;
        this.garbageLevel = garbageLevel;
        this.homePosition = homePosition;
    }
    iRobot615.prototype.clean = function () {
        this.turnOnLeftBroom();
        this.checkBatteryLevel();
        this.checkGarabgeLevel();
    };
    iRobot615.prototype.turnOnLeftBroom = function () {
    };
    iRobot615.prototype.checkBatteryLevel = function () {
    };
    iRobot615.prototype.checkGarabgeLevel = function () {
    };
    iRobot615.prototype.goToHome = function () {
    };
    iRobot615.prototype.turnOff = function () {
    };
    iRobot615.prototype.sayHi = function () {
        console.log("Hello from robot iRumba 615");
    };
    return iRobot615;
}());
var iRobot715 = /** @class */ (function (_super) {
    __extends(iRobot715, _super);
    function iRobot715(batteryLevel, batteryLife, garbageLevel, homePosition) {
        return _super.call(this, batteryLevel, batteryLife, garbageLevel, homePosition) || this;
    }
    iRobot715.prototype.turnOnRightBroom = function () {
    };
    //override
    iRobot715.prototype.clean = function () {
        this.turnOnRightBroom();
        _super.prototype.clean.call(this);
    };
    //override
    iRobot715.prototype.sayHi = function () {
        _super.prototype.sayHi.call(this);
        console.log("Kill Leon");
    };
    return iRobot715;
}(iRobot615));
var iRobot915 = /** @class */ (function (_super) {
    __extends(iRobot915, _super);
    function iRobot915() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iRobot915.prototype.useWifi = function () {
        console.log("Using Wifi");
    };
    return iRobot915;
}(iRobot715));
var leon = new iRobot715(100, 98, 50, "leon corner");
leon.sayHi();
var gal = new iRobot915(100, 98, 50, "gal corner");
gal.useWifi();
