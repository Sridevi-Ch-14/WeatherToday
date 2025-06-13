import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";



export default function SearchBox({updateInfo}){

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_key= "e4c0299ed0dc6ec3e3578842fc604c2c";

    let getWeatherInfo = async()=>{
        try{
            let res = await fetch (`${URL}?q=${city}&appid=${API_key}&units=metric`);
        let jsonRes = await res.json();
         console.log(jsonRes);

        let result = {
            city:city,
            temp: jsonRes.main.temp,
            tempMax: jsonRes.main.temp_max,
            tempMin: jsonRes.main.temp_min,
            humidity: jsonRes.main.humidity,
            pressure: jsonRes.main.pressure,
            feelsLike: jsonRes.main.feels_like,
            description:jsonRes.weather[0].description,
        }

        console.log(result);
        return result;
        }

        catch(error){
            throw error;
        }
        

    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        }
        catch{
            setError(true);
        }
    }


    return(
        <div className='SearchBox'>
           <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
           <br></br> 
           <Button variant="contained" type="submit">Search</Button>

           {error && <p style={{color:"red"}}>Sorry, Place doesn't exsist in our system</p>}
           </form>
        </div>
    )
}