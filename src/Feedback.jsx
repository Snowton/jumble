import React from "react";

function Feedback(props) {
    if (props.success) {
        return <div>
        <p>Good job! You got it right!</p>
        <button className="btn btn-outline-dark" onClick={props.nextWord}>NEXT WORD</button>
        </div>;
    } else {
        return <div>Not quite, try again</div>;
    }
}

export default Feedback;