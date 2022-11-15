class Config {
    public port = 4000;
    //mysql
    public mySQLhost = "172.19.0.2";
    public mySQLUser = "root";
    public mySQLPassword = "12345678";
    public mySQLdb = "myDonation";
    //public mySQLport = 3316;
    //mongoDB

}


const config = new Config();
export default config;