import React from "react";

function End(props) {
    return <div className="end"><h2>Well Done!</h2><button className="btn btn-lg btn-outline-dark"
    onClick={props.reset}>PLAY AGAIN</button></div>
}

export default End;