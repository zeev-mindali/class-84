import dal from "../Utils/dal_mysql"
import { OkPacket } from "mysql";
import Student from "../Models/student";

//add student
const addStudent = async (student: Student): Promise<Student> => {
    // command line for the DB
    const sql = `
    INSERT INTO students VALUES
    (DEFAULT,
    ${student.courseId},
    '${student.first_name}',
    '${student.last_name}',
    '${student.tel}',
    ${student.avgGrade}
    )`;

    const response: OkPacket = await dal.execute(sql);
    student.id = response.insertId;
    return student;
}

//update student
const updateStudent = async (student: Student): Promise<Student> => {
    const sql = `
    UPDATE students 
    SET courseId = ${student.courseId},
    first_name = '${student.first_name}',
    last_name = '${student.last_name}',
    tel = '${student.tel}',
    avgGrade = ${student.avgGrade} 
    WHERE id = ${student.id}
    `;
    await dal.execute(sql);
    return student;
}


//delete student
const deleteStudent = async (id: number): Promise<void> => {
    const sql = `
    DELETE FROM students WHERE id=${id}`
    const response = await dal.execute(sql);
    
}

//all students
const getAllStudents = async (): Promise<Student[]> => {
    // command line for the DB
    const sql = `
        SELECT students.* , course.name AS courseId
        FROM students JOIN course
        ON students.courseId = course.id
    `;
    // a promise function that connects us to the database with the command line
    const students = await dal.execute(sql);
    return students;
}

//single students
const getSingleStudent = async (id:number): Promise<Student> => {
    // command line for the DB
    const sql =  `
        SELECT students.* , course.name AS courseId
        FROM students JOIN course
        ON students.courseId = course.id
        WHERE students.id=${id}
        `;
    // a promise function that connects us to the database with the command line
    const student = await dal.execute(sql);
    return student;
}

export default{
    addStudent,
    updateStudent,
    deleteStudent,
    getAllStudents,
    getSingleStudent
}

