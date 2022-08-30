interface Accountable {
  accountNumber: number;
  balance: number;
  limited: boolean;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  print: () => void;
}

class Account implements Accountable {
  accountNumber: number;
  balance: number;
  limited: boolean;
  private static accountCounter: number = 0;

  constructor() {
    Account.accountCounter += 1;
    this.accountNumber = Account.accountCounter;
    this.limited = false;
    this.balance = 0;
  }

  //deposit: (amount: number) => void;
  public deposit(amount: number): void {
    this.balance += amount;
  }
  public withdraw(amount: number): void {
    this.balance -= amount;
  }

  public print(): void {
    console.log(`
        account number:  ${this.accountNumber}
        account balance: ${this.balance}
    `);
  }
}

class Bussniess extends Account {}

class Private extends Account {}

class Student extends Account {}

let vova = new Bussniess();
vova.deposit(1000000);
let rom = new Private();
rom.deposit(500);
let chaya = new Student();
chaya.deposit(18);
let lion = new Bussniess();
lion.withdraw(100000);

vova.print();
rom.print();
chaya.print();
lion.print();
