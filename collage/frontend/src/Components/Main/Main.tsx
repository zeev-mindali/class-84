import { useEffect, useState } from "react";
import Student from "../../model/student";
import "./Main.css";
import axios from "axios";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

function Main(): JSX.Element {
    const [students,setStudents]=useState<Student[]>([]);
    const navigate= useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3001/student/all")
        .then(response=>setStudents(response.data));
    },[])

    return (
        <div className="Main">
			<Header/>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>course</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>tel</th>
                        <th>grade</th>  
                        <th>Talent</th>
                        <th>created At</th>                     
                        <th>delete</th>                      
                    </tr>
                </thead>
                <tbody>
                    {students.map(item=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.courseId}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.tel}</td>
                            <td>{item.avgGrade}</td>
                            <td>
                                {item.avgGrade>=90?
                                <input type="checkbox" checked disabled/>:
                                <input type="checkbox" disabled/>
                                }
                            </td>
                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                            <td><button onClick={()=>{
                                axios.delete(`http://localhost:3001/student/${item.id}`);
                                setStudents(students.filter(singleStudent=>singleStudent.id !== item.id));
                            }}>❌</button></td>
                        </tr>
                        )}
                </tbody>
            </table>

        </div>
    );
}

export default Main;
