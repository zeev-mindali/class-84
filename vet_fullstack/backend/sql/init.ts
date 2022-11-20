import dal from "../utils/dal";

const mysql_animals = "CREATE TABLE IF NOT EXISTS animals (id INT NOT NULL AUTO_INCREMENT,name VARCHAR(45) NULL,age DECIMAL NULL,type INT NULL,ins TINYINT NULL,owner INT NULL,memo VARCHAR(250) NULL,created DATETIME NULL,chip VARCHAR(45) NULL, image varchar(250), PRIMARY KEY (id))";
const mysql_treatment = "CREATE TABLE IF NOT EXISTS treatment (id INT NOT NULL AUTO_INCREMENT,animal INT NULL,date DATETIME NULL,issue VARCHAR(250) NULL,description VARCHAR(250) NULL,next_visit DATETIME NULL,memo VARCHAR(250) NULL,PRIMARY KEY (id))";
const mysql_aniaml_medc = "CREATE TABLE IF NOT EXISTS medicane_animal (id INT NOT NULL AUTO_INCREMENT,aniaml INT NULL,medicane_name INT NULL,date DATETIME NULL ,PRIMARY KEY (id))";
const mysql_medicane_name = "CREATE TABLE IF NOT EXISTS medicane_name (id INT NOT NULL AUTO_INCREMENT,name VARCHAR(45) NULL,med_type VARCHAR(45) NULL, PRIMARY KEY (id))"
const mysql_animal_type = "CREATE TABLE IF NOT EXISTS animal_type (id INT NOT NULL AUTO_INCREMENT,animal_type VARCHAR(45) NULL, PRIMARY KEY (id))";
const mysql_owner = "CREATE TABLE IF NOT EXISTS owner (id INT NOT NULL AUTO_INCREMENT,owner VARCHAR(45) NULL,tel VARCHAR(45) NULL,cell VARCHAR(45) NULL,address VARCHAR(45) NULL,city VARCHAR(45) NULL, PRIMARY KEY (id))";


const mysql_init = ()=>{
    dal.execute(mysql_animals)
    dal.execute(mysql_treatment);
    dal.execute(mysql_aniaml_medc);
    dal.execute(mysql_medicane_name);
    dal.execute(mysql_animal_type);
    dal.execute(mysql_owner);
}


export default mysql_init;