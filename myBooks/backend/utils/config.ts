class Config {
    public port = 3100;
    //mysql
    public mySQLhost = "localhost";
    public mySQLUser = "root";
    public mySQLPassword = "12345678";
    public mySQLdb = "books";
    //mongoDB

}

const config = new Config();
export default config;