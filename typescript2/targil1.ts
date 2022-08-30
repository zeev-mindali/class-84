interface Accountable {
  accountNumber: number;
  balance: number;
  limited: boolean;
  commission: number;

  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  print: () => void;
}

class Account implements Accountable {
  accountNumber: number;
  balance: number;
  limited: boolean;
  commission: number;

  private static accountCounter: number = 0;
  private static bankProfit: number = 0;

  constructor(commission: number) {
    Account.accountCounter += 1;
    this.accountNumber = Account.accountCounter;
    this.limited = false;
    this.balance = 0;
    this.commission = commission;
  }

  //deposit: (amount: number) => void;
  public deposit(amount: number): void {
    this.balance += this.amountCommission(amount);
  }
  public withdraw(amount: number): void {
    this.balance -= amount + amount * this.commission;
  }

  private amountCommission(amount: number): number {
    Account.bankProfit += amount * this.commission;
    return amount - amount * this.commission;
  }

  public print(): void {
    console.log(`
        account number:  ${this.accountNumber}
        account balance: ${this.balance}
    `);
  }

  public printProfit(): void {
    console.log("Bank Profit: " + Account.bankProfit);
  }
}

class Bussniess extends Account {
  private loan: number = 0;

  public getLoan(amount: number): void {
    this.loan += amount;
  }
}

class Private extends Account {}

class Student extends Account {
  public print(): void {
    super.print();
    console.log("i am so poor, i can't even pay attention");
  }
}

let vova = new Bussniess(0.05);
vova.deposit(1000000);
let rom = new Private(0.1);
rom.deposit(500);
let chaya = new Student(0.0);
chaya.deposit(18);
let lion = new Bussniess(0.2);
lion.withdraw(100000);

vova.print();
rom.print();
chaya.print();
lion.print();
vova.printProfit();
