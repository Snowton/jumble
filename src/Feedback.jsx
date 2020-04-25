import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Feedback(props) {
    const matches = useMediaQuery('(max-width:900px)');

    if (props.success) {
        return <div>
        <p>Good job! You got it right!</p>
        <button className={matches ? "btn btn-dark" : "btn btn-outline-dark"} onClick={props.nextWord}>NEXT WORD</button>
        </div>;
    } else {
        return <div>Not quite, try again</div>;
    }
}

export default Feedback;