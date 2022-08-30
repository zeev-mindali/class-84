var Student = /** @class */ (function () {
    function Student(name, city, age) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Student.prototype.print = function () {
        console.log("\n            name:".concat(this.name, "\n            age: ").concat(this.age, "\n            city: ").concat(this.city, "\n        "));
    };
    return Student;
}());
var Lecturer = /** @class */ (function () {
    function Lecturer(name, city, age) {
        this.name = name;
        if (!age) {
            //this.age = 0;
        }
        else {
            this.age = age;
        }
        this.city = city;
    }
    Lecturer.prototype.print = function () {
        console.log("\n            name:".concat(this.name, "\n             ").concat(this.age ? "age: " + this.age : "", "\n            city: ").concat(this.city, "\n        "));
    };
    Lecturer.prototype.checkMe = function (name) {
        if (!name) {
            console.log("No name");
        }
        else {
            console.log("name: ".concat(name));
        }
    };
    return Lecturer;
}());
var vova = new Student("vova", "Benyamina", 32);
//vova.print();
var zeev = new Lecturer("zeev", "Kiryat yam", 48);
//zeev.print();
var kobi = new Lecturer("kobi", "tlv");
var pepole = [zeev, vova];
kobi.print();
//pepole.map((item) => item.print());
//zeev.checkMe();
//zeev.checkMe("zeev");
