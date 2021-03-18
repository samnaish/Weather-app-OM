import React, {useEffect, useState} from 'react';

import './App.css';
import Slate from './components/Slate';

const App = () => {

    const [currentRes, setCurrentRes] = useState({});
    const [locationRes, setLocationRes] = useState({});
    const [condition, setCondition] = useState({});
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState(null);

    const APIKey = localStorage.getItem('apiKey');

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=London&days=4&aqi=no&alerts=no`)
        .then(res => res.json())
        .then((result) => {
            setCurrentRes(result.current);
            setCondition(result.current.condition);
            setLocationRes(result.location);
            setForecast(result.forecast.forecastday);
        },
        (error) => {
            setError(error)
        })
    }, [])

    const getDayOfWeek = (date) => {
        const dayOfWeek = new Date(date).getDay();    
        return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return(
            <div className="app">
                <div className="app__current">
                    <img className="app__current-image" src={condition.icon} alt={"Icon "+condition.text}/>
                    <div className="app__current-info">
                        <span>Today</span>
                        <span>{currentRes.temp_c}°</span>
                        <span>
                            <img className="app__current-location" src="https://www.clipartmax.com/png/small/151-1517460_icon-contact-flat-web-business-symbol-blue-location-pin-icon-png.png"/>
                            <span>{locationRes.name}</span>
                            
                        </span>
                    </div>
                    <div className="app_days">
                        {forecast.map((item, index) => (
                            <div key={index} className="app__days-forecast">
                                <h3>{getDayOfWeek(item.date)}</h3>
                                <img className="app__forecast-icon" src={item.day.condition.icon}/>
                                <div className="app__forecast-temp">
                                    <p className="app__max-temp">{item.day.maxtemp_c}°</p>
                                    <p className="app__min-temp">{item.day.mintemp_c}°</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* {console.log("currentRes", currentRes)} */}
                    {/* {console.log("locationRes", locationRes)} */}
                    {/* {console.log("Forecast", forecast)} */}
                    {/* {console.log("condition", condition)} */}
                </div>
                {/* <Slate/> */}
            </div>
        )
      }
}

export default App;