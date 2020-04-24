import React, { useState } from "react";
import InputArea from "./InputArea";
import Letter from "./Letter";
import Feedback from "./Feedback";

function GameArea(props) {
    const [input, setInput] = useState([]);
    const [reset, setReset] = useState(false);
    const [clicked, setClicked] = useState(props.word.map(element => false));

    function handleClick(event) {
        const {innerHTML, id:ID} = event.target;
        setClicked(prev => prev.map((element, index) => String(index) === ID ? !element : element));
        
        const found = input.find(item => item.id === ID);
        if (found) {
            setInput(prev => prev.filter(element => element.id !== ID));
        } else {
            setInput(prev => (
                [...prev, {letter: innerHTML, id: ID}]
                ));
        }
    }

    function nextWord() {
        setInput([]);
        setReset(prev => !prev);
        props.nextWord();
        setClicked(props.realWord.split("").map(element => false));
        // setTimeout(changeClicked, 1000);
    }

    // function changeClicked() {
    //     console.log(props.word);
        
    //     setClicked(props.word.map(element => false));
    // }

    const width = 100 / props.word.length;
    const style = {
        width: width + "%",
    }

    return <div className="container yoyo">{props.word.map((letter, index) => 
    <Letter reset={reset} clicked={clicked[index]} index={index} style={style} letter={letter} handleClick={handleClick}/>)}
    <InputArea input={input}/>
    {input.length === props.word.length && 
    <Feedback nextWord={nextWord}
    success={input.reduce((word, item) => word + item.letter, "") === props.realWord}/>}
    </div>;
}

export default GameArea;