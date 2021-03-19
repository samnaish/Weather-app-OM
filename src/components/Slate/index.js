import React from 'react';

import './index.css'

const Slate = ({ icon, maxTemp, minTemp, date }) => {
    return (
        <div className="app__slate">
            <h3>{date}</h3>
            <img className="app__forecast-icon" src={icon}/>
            <div className="app__forecast-temp">
                <p className="app__max-temp">{maxTemp}°</p>
                <p className="app__min-temp">{minTemp}°</p>
            </div>
        </div>
    )
}

export default Slate;