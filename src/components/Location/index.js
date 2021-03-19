import React,{ Fragment } from 'react';

const Location = ({name}) => {
    return (
        <Fragment>
            <img className="app__current-location" src="https://www.clipartmax.com/png/small/151-1517460_icon-contact-flat-web-business-symbol-blue-location-pin-icon-png.png"/>
            <span>{name}</span>  
        </Fragment>
    )
}

export default Location;