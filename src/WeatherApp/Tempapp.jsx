import React, { useEffect, useState } from 'react';
import '../Weather App/Style.css';



const Tempapp=()=>{

const[city, setCity]=useState(null);
const[search, setSearch]=useState("Bangalore")

useEffect(()=>{
    const fetchApi=async ()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=40dd29b9b1bd18b53c8ce8e665c53700`;
        const response = await fetch(url);
        const resjson=await response.json();
        setCity(resjson.main);
    }
    fetchApi();
},[search])

return(<>
        <div className='box'>
            <div className='inputdata'>
                <input 
                  type="text"
                  value={search}
                  onChange={(event)=>{setSearch(event.target.value)}}
                />
            </div>
            {!city?(<p className="errormsg">Ooops!!... Data Not Found</p>):(
<>
            <div className="info-div">
               <div className="info">
                 <h2 className="location">{search}</h2>
                 <h1 className="temp">{city.temp}°C</h1>
                 <h3 className="temp-max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>
               </div>
               <div className="wave1"></div>
               <div className="wave2"></div>
               <div className="wave3"></div>
            </div>
</>)}
        </div>
</>)};

export default Tempapp; 