import React from 'react';
import "./Square.css"

function Square (props) {
    return (
        <div className={props.classList} onClick={props.click}>
            {props.hasItem ? <span className="Ring">O</span> : null}
        </div>
    );
}

export default Square;