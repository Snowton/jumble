import React from "react";

function InputArea(props) {
    return <div className="container input-area">{props.input.map(element => element.letter)}</div>;
}

export default InputArea;