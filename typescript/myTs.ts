class Students {
    /* fields - שדות */
    private uName: string;
    private uPass: string;
    private uGrade: number;

    /* contructor - בנאי */
    // constructor() {
    //     this.uName = "lion";
    //     this.uPass = "vova";

    // }

    constructor(userName: string, userPass: string, userGrade: number) {
        this.uName = userName;
        this.uPass = userPass;
        this.uGrade = userGrade;
    }

    /* methods - פונקציות/פעולות :o) */
    public login(uName: string, uPass: string) {
        if (this.uName == uName && this.uPass == uPass) {
            console.log("all is ok...")
        } else {
            console.log("Who are u?");
        }
    }

    //setter & getter
    public setPassword(newPassword: string) {
        //Auth->admin
        this.uPass = newPassword;
    }

    public getUser(): string {
        return this.uName;
    }
    public getFullUser(): void {
        console.log(this.uName, this.uPass, this.uGrade);        
    }
}

// let newUser: Students = new Students("lion", "Rom");
//newUser.uName = "test";
//newUser.uPass = "12345";
//newUser.setPassword("12345");
//newUser.login("lion", "12345");
// console.log(newUser.getUser());
// newUser.getFullUser();

let lion: Students = new Students("lion", "12345", 90);
let oren: Students = new Students("Oren", "54321", 95);
let gal: Students = new Students("Gal", "112233", 100);
// lion.getFullUser();
// oren.getFullUser();
// gal.getFullUser();

// let students: Students[] = [];
// let stam: string = "stam";
// students.push(lion);
// students.push(oren);
// students.push(gal);
//students.push(stam); -> will not work , since students is class and stam is string

let students: Students[] = [lion, oren, gal];

students.map(item => item.getFullUser());

