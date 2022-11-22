import { useEffect, useState } from "react";
import AnimalModel from "../../../model/AnimalModel";
import "./ListAnimals.css";
import axios from "axios";
import ownerPng from "../../../assets/owner.png";
import editor from "../../../assets/pencil.png";
import { useNavigate } from "react-router-dom";

function ListAnimals(): JSX.Element {
    const [animals, setAnimals] = useState<AnimalModel[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const url = "http://localhost:3001/api/animal";
        axios.get(url)
            .then(response => {
                setAnimals(response.data);
            })
            .catch(err => console.log(err.message));
    }, []);

    return (
        <div className="ListAnimals">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>type</th>
                        <th>chip</th>
                        <th>Insurance</th>
                        <th>Memo</th>
                        <th>Image</th>
                        <th>Owner</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map(item=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.type}</td>
                            <td>{item.chip}</td>
                            <td>{item.ins?"YES":"NO"}</td>
                            <td>{item.memo}</td>
                            <td>{item.image}</td>
                            <td><img src={ownerPng} onClick={()=>alert("show owner details")}/></td>
                            <td><img src={editor} onClick={()=>alert("edit the data....")}/></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <br/><br/>
            <input type="button" value="Add new Animal" onClick={()=>navigate("/AddAnimal")}/>
        </div>
    );
}

export default ListAnimals;
