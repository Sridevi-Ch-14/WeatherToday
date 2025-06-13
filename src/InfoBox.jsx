import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./InfoBox.css";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import AcUnitIcon from '@mui/icons-material/AcUnit';

import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){

    const Cold_URL = "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";

    const Hot_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D";

    const Rain_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="InfoBox">
            <h2>Weather Info Today in {info.city}</h2> 
        <div className="InfoCard">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
            info.humidity > 80 ? Rain_URL : info.temp > 20 ? Hot_URL : Cold_URL
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 20 ? <SunnyIcon/> : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}}  component="span">
          <p>Temperature: {info.temp} &deg;C</p>
          <p>Maximum Temperature: {info.tempMax} &deg;C</p>
          <p>Minimum Temperature: {info.tempMin} &deg;C</p>
          <p>Humidity: {info.humidity} &deg;C</p>
          <p>Weather today in {info.city} can be described as {info.description} and feels like {info.feelsLike} &deg;C</p>
        </Typography>
      </CardContent>
    </Card>   
    </div>
        </div>
    )
}