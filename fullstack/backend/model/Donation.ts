class Donation {
    public id: number = 0;  //auto increment
    public name: string = ""; //name of donator
    public family: string = ""; //last name of donator
    public sum: number = 0; // sum of donation
    public auth_code: string = ""; //confirmation code from payment company
    public cancel_code: string = ""; //cancelation code from payment company
    public payment_code: number = 0;  //payment paypal, gPay,apple pay, cc, zuzim
    public memo: string = ""; //memo -> לעילוי נשמת 
}

export default Donation;