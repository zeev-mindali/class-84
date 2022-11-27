import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Device_types from './device_type';
import axios from "axios";
import Switch from './Components/switch/switch';
import Shutter from './Components/shutter/shutter';

function App() {
    const [devices,setDevices] = useState<Device_types[]>([]);

    const getDevice = (item:Device_types)=>{
        //switch , boiler
        switch (item.name){
            case "switch":
            case "boiler":
                return <Switch name={item.name} value={item.value}/>

            case "shutter":
                return <Shutter name={item.name} value={item.value}/>
        }
    }

    useEffect(() => {
        axios.get("http://localhost:3001/devices/all")
        .then(response=>setDevices(response.data));
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <h1>Class - 84 HOME</h1><hr /><br /><br />
                    {devices.map(item=>getDevice(item))}

            </header>
        </div>
    );
}

export default App;
function setState(): [any, any] {
    throw new Error('Function not implemented.');
}

