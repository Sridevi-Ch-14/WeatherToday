import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        description:"clear sky",
        feelsLike: 42.26,
        humidity:15,
        temp:43.38,
        tempMax:43.38,
        tempMin:43.38,
    });


    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    function getThemeClass(description) {
    if (!description) return "default-theme";

    const desc = description.toLowerCase();
    if (desc.includes("rain")) return "rainy-theme";
    if (desc.includes("clear")) return "sunny-theme";
    if (desc.includes("cloud")) return "cloudy-theme";
    if (desc.includes("snow")) return "snowy-theme";
    return "default-theme";
}


    return(

        <div className={`WeatherApp ${getThemeClass(weatherInfo.description)}`} style={{ textAlign: "center" }}>
            <br></br>
            <h2>WeatherToday</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}