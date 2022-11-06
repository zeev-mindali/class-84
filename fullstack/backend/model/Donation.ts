class Donation {
  private id: number = 0; //auto increment
  private name: string = ""; //name of donator
  private family: string = ""; //last name of donator
  private sum: number = 0; // sum of donation
  private auth_code: string = ""; //confirmation code from payment company
  private cancel_code: string = ""; //cancelation code from payment company
  private payment_code: number = 0; //payment paypal, gPay,apple pay, cc, zuzim
  private memo: string = ""; //memo -> לעילוי נשמת

  constructor(
    id: number,
    name: string,
    family: string,
    sum: number,
    auth_code: string,
    cancel_code: string,
    payment_code: number,
    memo: string
  ) {
    this.id = id;
    this.name = name;
    this.family = family;
    this.sum = sum;
    this.auth_code = auth_code;
    this.cancel_code = cancel_code;
    this.payment_code = payment_code;
    this.memo = memo;
  }

  public getID() {
    return this.id;
  }

  public getSum() {
    return this.sum;
  }

  public getName() {
    return this.name;
  }
  public getLastName() {
    return this.family;
  }
}

let donationList: Donation[] = [];
donationList.push(
  new Donation(1, "zeev", "mindali", 180, "3j9iu3f", "", 1, "Leon")
);
donationList.push(
  new Donation(2, "Rom", "Guyer", 3600, "32iu3f", "", 1, "For marriage")
);
donationList.push(
  new Donation(3, "Leon", "something", 4800, "32543", "", 3, "for some brain")
);
donationList.push(
  new Donation(4, "Sivan", "Saban", 18000, "897432984", "", 2, "for the family")
);
donationList.push(
  new Donation(6, "Vova", "bla bla", 18, "3kjfhkj3", "", 1, "הקמצן")
);

export { donationList };
export default Donation;
