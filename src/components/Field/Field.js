import React from 'react';
import Square from '../Square/Square'
import "./Field.css"


function Field (props) {
    return (
        <div className="Desk">
            {props.cells.map((cell, i) => {
            return <Square key={i} click={() => props.click(i)} classList={"Square " + (cell.chooseItem ? "Hide" : "")} hasItem={cell.hasItem}/>
        })}
        </div>
    );
}

export default Field;
