class Student{
    id:number=0;
    courseId:number=0;
    first_name:string="";
    last_name:string="";
    tel:string="";
    avgGrade:number=0;
    createdAt:Date = new Date();
    isTalent:Boolean = false;
    userPhoto:any | undefined;
}

export default Student;