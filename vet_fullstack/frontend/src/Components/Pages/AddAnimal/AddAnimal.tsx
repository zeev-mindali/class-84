import axios from "axios";
import { useEffect, useState } from "react";
import Animal_type from "../../../model/Animal_type";
import "./AddAnimal.css";
import {useForm} from "react-hook-form";
import AnimalModel from "../../../model/AnimalModel";
import { useNavigate } from "react-router-dom";

//name, age, type(select),ins,owner(auto complete), memo, created, chip, image
function AddAnimal(): JSX.Element {
    const [animalTypes, setTypes] = useState<Animal_type[]>([]);
    const {register, handleSubmit} = useForm<AnimalModel>()
    const navigate=useNavigate();

    const send = async (newAnimal:AnimalModel)=>{
        const url = "http://localhost:3001/api/animal";
        newAnimal.created = new Date();
        await axios.post(url,newAnimal);
        navigate("/AnimalList");
    }

    useEffect(() => {
        const url = "http://localhost:3001/api/animalType/";
        axios.get(url)
            .then(response => { setTypes(response.data) })
            .catch(err => console.log(err.message));
    }, [])
    return (
        <div className="AddAnimal">
            <form onSubmit={handleSubmit(send)}>
                <h2 style={{ textAlign: "center" }}> add new animal </h2>

                <label>Name: </label>
                <input type="text" {...register("name")}/>

                <label>age: </label>
                <input type="number" {...register("age")}/>

                <label>Animal Type:</label>
                <select defaultValue="" {...register("type")}>
                    <option value={0} disabled key={0}>Choose animal</option>
                    {animalTypes.map(item => <option key={item.id} value={item.id}>{item.animal_type}</option>
                    )}
                </select>

                <label>Has Insurance: </label>
                <input type="checkbox" style={{ display: "inline" }} {...register("ins")}/>

                <label>Owner: </label>
                <input type="number" {...register("owner")}/>

                <label>Memo: </label>
                <textarea rows={2} cols={38} {...register("memo")}/>

                <label>Chip: </label>
                <input type="text" {...register("chip")}/>

                <label>Image: </label>
                <input type="file" {...register("image")}/>

                <input type="Button" value="submit" />

            </form>
        </div>
    );
}

export default AddAnimal;
