interface Tableable {
  person: number;
  waiter: string;
  responseTime: number;
  dish: number;
  response: number;
  //getYebushTime: () => number;
}

abstract class Table implements Tableable {
  person: number;
  waiter: string;
  responseTime: number;
  dish: number;
  response: number;
  public static tableArray: Table[] = [];

  constructor(
    person: number,
    waiter: string,
    dish: number,
    responseTime: number
  ) {
    this.person = person;
    this.waiter = waiter;
    this.dish = dish;
    this.responseTime = responseTime;
    this.response = this.person * this.dish * responseTime;
  }
  //   public getYebushTime(): number {
  //     return this.response;
  //   }

  public toString() {
    return `total person ${this.person} ordered ${this.dish} dishes and will wait for ${this.response} time`;
  }
}

class Bar extends Table {
  constructor(dish: number) {
    super(1, "Rom", dish, 5);
  }
}
class Regular extends Table {
  constructor(dish: number) {
    super(4, "Tom", dish, 10);
  }
}

class Vip extends Table {
  constructor() {
    super(8, "Sivan", Math.floor(Math.random() * 8), 2);
  }
  public toString() {
    let msg = "\n" + this.waiter + "\n================================\n";
    msg += super.toString() + "\n";
    return msg;
  }
}
class Leon extends Table {
  constructor(dish: number) {
    super(2, "vova", dish, 60);
  }
}

//super() => contructor in higher level (aba)
//super.print() => function in higher level (aba)

let table1 = new Bar(2);
let table2 = new Regular(4);
let table3 = new Vip(10);
let table4 = new Leon(1); //eats only greber

let tableArray = [table1, table2, table3, table4];
let itamerArray = [new Bar(2), new Regular(4), new Vip(10), new Leon(1)];

//tableArray.map((item) => console.log(item.toString()));
//Table.tableArray.map((item) => console.log(item.toString()));
