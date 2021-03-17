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
            setForecast(result.forecast);
        },
        (error) => {
            setError(error)
        })
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return(
            <div className="app">
                <img src={condition.icon} alt={"Icon "+condition.text}/>
                <div className="app__current">
                    <span>Temp: {currentRes.temp_c}</span>
                    <span>location: {locationRes.name}</span>

                    {console.log("currentRes", currentRes)}
                    {console.log("locationRes", locationRes)}
                    {console.log("Forecast", forecast)}
                    {console.log("condition", condition)}
                </div>
                <Slate/>
            </div>
        )
      }
}

export default App;