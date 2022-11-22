import { Route, Routes } from "react-router-dom";
import AddAnimal from "../../Pages/AddAnimal/AddAnimal";
import AnimalTypes from "../../Pages/AnimalTypes/AnimalTypes";
import Home from "../../Pages/Home/Home";
import ListAnimals from "../../Pages/ListAnimals/ListAnimals";
import ListCustomers from "../../Pages/ListCustomers/ListCustomers";
import Login from "../../Pages/Login/Login";
import Medicines from "../../Pages/Medicines/Medicines";
import Page404 from "../../Pages/Page404/Page404";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/ListAnimals" element={<ListAnimals/>}/>
                <Route path="/ListCustomers" element={<ListCustomers/>}/>
                <Route path="/AnimalTypes" element={<AnimalTypes/>}/>
                <Route path="/Medicines" element={<Medicines/>}/>
                <Route path="/Login" element={<Login/>}/>  
                <Route path="/AddAnimal" element={<AddAnimal/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
