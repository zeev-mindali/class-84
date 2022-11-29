import axios from "axios";
import { useEffect, useState } from "react";
import Course from "../../model/course";
import Header from "../Header/Header";
import "./Add.css";
import { useForm } from "react-hook-form";
import Student from "../../model/student";
import { useNavigate, useParams } from "react-router-dom";

function Add(): JSX.Element {
    const [courses, setCourses] = useState<Course[]>([]);
    const { register, handleSubmit } = useForm<Student>();
    const navigate = useNavigate();
    const params = useParams();
    const [student,setStudent] = useState<Student>();
    const id = +(params.id || 0);
    useEffect(() => {
        axios.get("http://localhost:3001/student/courses")
            .then(response => setCourses(response.data));
            if (id>0){
                axios.get(`http://localhost:3001/student/${params.id}`) 
                .then(response=>{                    
                    setStudent(response.data[0]);
                });       
            }
        
    },[])

    const send = async (newStudent: Student) => {
        try {
            if (id===0){
                await axios.post("http://localhost:3001/student/add",newStudent)
                .then(res=>navigate("/"));
            } 
            if (id>0){
                newStudent.id = id;
                await axios.put("http://localhost:3001/student/",newStudent)
                .then(res=>navigate("/"));
            }
        } catch (err: any) {
            console.log(err.message);
        }
    }

    return (
        <div className="Add">
            <Header />
            <div className="Box">
                <form onSubmit={handleSubmit(send)}>
                    <h2>Add Student</h2>

                    <label>Course</label>
                    <select defaultValue={student?.courseId} style={{ height: 30 }} {...register("courseId")}>
                        <option disabled value="">Select course...</option>
                        {courses.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>

                    <label>First name:</label>
                    <input type="text" defaultValue={student?.first_name} {...register("first_name")}/>

                    <label>Last name:</label>
                    <input type="text" defaultValue={student?.last_name} {...register("last_name")}/>

                    <label>Tel:</label>
                    <input type="text" defaultValue={student?.tel} {...register("tel")}/>

                    <label>Avg grade:</label>
                    <input type="number" defaultValue={student?.avgGrade} {...register("avgGrade")}/>

                    <input type="submit" value="save student" style={{ height: 50, backgroundColor: "lightgreen", borderRadius: 20 }} />
                </form>
            </div>
        </div>
    );
}

export default Add;
