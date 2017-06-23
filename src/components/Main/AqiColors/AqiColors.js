import React from 'react';

const AqiColors = (props) => {
    return (
        <div style={{'color': props.color}}>
        <li className="color-swap-AQI">
            <h3>AQI: { props.aqi }</h3>
            {props.title}
        </li>
        </div>
    );
};

export default AqiColors;