interface Personable {
  age: number;
  name: string;
  city: string;
  print: () => void;
}

class Student implements Personable {
  age: number;
  name: string;
  city: string;

  constructor(name: string, city: string, age: number) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  public print(): void {
    console.log(`
            name:${this.name}
            age: ${this.age}
            city: ${this.city}
        `);
  }
}

class Lecturer implements Personable {
  age: number;
  name: string;
  city: string;

  constructor(name: string, city: string, age?: number) {
    this.name = name;
    if (!age) {
      //this.age = 0;
    } else {
      this.age = age;
    }
    this.city = city;
  }

  public print(): void {
    console.log(`
            name:${this.name}
             ${this.age ? "age: " + this.age : ""}
            city: ${this.city}
        `);
  }

  public checkMe(name?: string): void {
    if (!name) {
      console.log("No name");
    } else {
      console.log(`name: ${name}`);
    }
  }
}

let vova = new Student("vova", "Benyamina", 32);
//vova.print();
let zeev = new Lecturer("zeev", "Kiryat yam", 48);
//zeev.print();
let kobi = new Lecturer("kobi", "tlv");
let pepole = [zeev, vova];

kobi.print();

//pepole.map((item) => item.print());
//zeev.checkMe();

//zeev.checkMe("zeev");
