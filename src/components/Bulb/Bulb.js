import React from 'react';
import "./Bulb.css"


function Bulb (props) {
    return (
        <button className="Bulb" onClick={props.click}>
            Reset
        </button>
    );
}

export default Bulb;