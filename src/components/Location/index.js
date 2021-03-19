import React from 'react';

import './index.css'

const Location = ({name}) => {
    return (
        <div className="app-container">
            <img className="app__current-location" src="https://www.flaticon.com/svg/vstatic/svg/684/684809.svg?token=exp=1616177254~hmac=110c8d9ab5d6f3c80043a0f605c99a53"/>
            <p className="app__current-city">{name}</p>  
        </div>
    )
}

export default Location;