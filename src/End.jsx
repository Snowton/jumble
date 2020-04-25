import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function End(props) {
    const matches = useMediaQuery('(max-width:900px)');

    return <div className="end"><h2>Well Done!</h2><button 
    className={matches ? "btn btn-lg btn-dark" : "btn btn-lg btn-outline-dark"}
    onClick={props.reset}>PLAY AGAIN</button></div>
}

export default End;