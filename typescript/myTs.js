var Students = /** @class */ (function () {
    /* contructor - בנאי */
    // constructor() {
    //     this.uName = "lion";
    //     this.uPass = "vova";
    // }
    function Students(userName, userPass, userGrade) {
        this.uName = userName;
        this.uPass = userPass;
        this.uGrade = userGrade;
    }
    /* methods - פונקציות/פעולות :o) */
    Students.prototype.login = function (uName, uPass) {
        if (this.uName == uName && this.uPass == uPass) {
            console.log("all is ok...");
        }
        else {
            console.log("Who are u?");
        }
    };
    //setter & getter
    Students.prototype.setPassword = function (newPassword) {
        //Auth->admin
        this.uPass = newPassword;
    };
    Students.prototype.getUser = function () {
        return this.uName;
    };
    Students.prototype.getFullUser = function () {
        console.log(this.uName, this.uPass, this.uGrade);
    };
    return Students;
}());
// let newUser: Students = new Students("lion", "Rom");
//newUser.uName = "test";
//newUser.uPass = "12345";
//newUser.setPassword("12345");
//newUser.login("lion", "12345");
// console.log(newUser.getUser());
// newUser.getFullUser();
var lion = new Students("lion", "12345", 90);
var oren = new Students("Oren", "54321", 95);
var gal = new Students("Gal", "112233", 100);
// lion.getFullUser();
// oren.getFullUser();
// gal.getFullUser();
// let students: Students[] = [];
// let stam: string = "stam";
// students.push(lion);
// students.push(oren);
// students.push(gal);
//students.push(stam); -> will not work , since students is class and stam is string
var students = [lion, oren, gal];
students.map(function (item) { return item.getFullUser(); });
