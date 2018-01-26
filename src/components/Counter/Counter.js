import React from 'react';
import "./Counter.css"

function Counter (props) {
    return (
        <div className="Counter">
            Tries: {props.try}
        </div>
    );
}

export default Counter;