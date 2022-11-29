export const createStudents = "CREATE TABLE IF NOT EXISTS students (id INT NOT NULL AUTO_INCREMENT,courseId INT NULL,first_name VARCHAR(45) NULL,last_name VARCHAR(45) NULL,tel VARCHAR(45) NULL,avgGrade INT NULL, PRIMARY KEY (id))";
export const createClasses = "CREATE TABLE IF NOT EXISTS `collage`.`course` (`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(45) NULL,PRIMARY KEY (`id`))";
