import React, {useEffect, useState} from 'react';

import './App.css';
import Slate from './components/Slate';
import Location from './components/Location'

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
        return <div className="app__error">Error: {error.message}</div>;
    } else {
        return(
            <div className="app">
                <div className="app__current">
                    <div className="app__current-container">
                        <img className="app__current-image" src={condition.icon} alt={"Icon "+condition.text}/>
                        <div className="app__current-info">
                            <h3 className="app__current-today">Today</h3>
                            <span className="app__current-temp">{currentRes.temp_c}°</span>
                            <div className="app__current-location">
                                <Location name={locationRes.name} /> 
                            </div>
                        </div>
                    </div>
                    <div className="app_days">
                        {forecast.map((item, index) => (
                            <div key={index} className="app__days-forecast">
                                <Slate date={getDayOfWeek(item.date)} icon={item.day.condition.icon} maxTemp={item.day.maxtemp_c} minTemp={item.day.mintemp_c}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
      }
}

export default App;