class iRobot615 {
    private batteryLevel: number;
    private batteryLife: number;
    private garbageLevel: number;
    private homePosition: string;

    constructor(batteryLevel: number, batteryLife: number, garbageLevel: number, homePosition: string) {
        this.batteryLevel = batteryLevel;
        this.batteryLife = batteryLife;
        this.garbageLevel = garbageLevel;
        this.homePosition = homePosition;
    }

    public clean() {
        this.turnOnLeftBroom();
        this.checkBatteryLevel();
        this.checkGarabgeLevel();
    }

    private turnOnLeftBroom() {

    }
    private checkBatteryLevel() {

    }
    private checkGarabgeLevel() {

    }

    public goToHome() {

    }

    public turnOff() {

    }

    public sayHi() {
        console.log("Hello from robot iRumba 615");
    }
}

class iRobot715 extends iRobot615 {

    private turnOnRightBroom() {

    }


    constructor(batteryLevel: number, batteryLife: number, garbageLevel: number, homePosition: string) {
        super(batteryLevel, batteryLife, garbageLevel, homePosition);
    }
    //override
    public clean(): void {
        this.turnOnRightBroom();
        super.clean();
    }

    //override
    public sayHi(): void {
        super.sayHi();
        console.log("Kill Leon");
    }
}

class iRobot915 extends iRobot715 {
    public useWifi() {
        console.log("Using Wifi");
    }
}

let leon: iRobot715 = new iRobot715(100, 98, 50, "leon corner");
leon.sayHi();
let gal: iRobot915 = new iRobot915(100, 98, 50, "gal corner");
gal.useWifi();