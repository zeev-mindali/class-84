class DonationModel {
    public id: number = 0; //auto increment
    public name?: string; //name of donator
    public sum?: number; // sum of donation
    public auth_code: string = "";//confirmation code from payment company
    public cancel_code: string = ""; //cancelation code from payment company
    public payment_code?: number; //payment paypal, gPay,apple pay, cc, zuzim
    public memo?: string; //memo -> לעילוי נשמת
    public payment: string = ""; //we will need it on the frontend :)

}

export default DonationModel