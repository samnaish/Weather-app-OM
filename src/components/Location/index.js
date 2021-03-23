import React from 'react';

import './index.css'

const Location = ({name}) => {

    const imageLink = "https://www.freeiconspng.com/uploads/blue-location-icon-26.png"

    return (
        <div className="app-container">
            <img className="app__current-location" src={imageLink}/>
            <p className="app__current-city">{name}</p>  
        </div>
    )
}

export default Location;