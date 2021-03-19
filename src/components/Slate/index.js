import React from 'react';

import './index.css'

const Slate = ({ icon, maxTemp, minTemp, date }) => {
    return (
        <div className="app__slate">
            <h3 className="app__day">{date}</h3>
            <div className="app__icon-container">
                <img className="app__forecast-icon" src={icon}/>
            </div>
            <div className="app__forecast-temp">
                <p className="app__max-temp">{Math.floor(maxTemp)}°</p>
                <p className="app__min-temp">{Math.floor(minTemp)}°</p>
            </div>
        </div>
    )
}

export default Slate;