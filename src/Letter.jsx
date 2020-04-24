import React, { useState } from "react";

function Letter(props) {
    const index = props.index;
    const style = props.style;
    const handleClick = props.handleClick;
    const letter = props.letter;

    return <div 
    className="letter" 
    style={style}>
        <div className={props.clicked ? "card pressed" : "card"} key={index} id={index} onClick={(event) => handleClick(event)}>{letter}</div>
    </div>;
}

export default Letter;