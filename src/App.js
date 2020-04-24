import React, { useState } from 'react';
import words from "./words";
import GameArea from "./GameArea";
import End from "./End";

function App() {

  const [currentWord, setCurrentWord] = useState(0);

  function jumbleWord(oldWord) {
    const word = oldWord.split("");
    const jumbled = [];
    while(word.length > 0) {
    const index = Math.floor(Math.random() * word.length);
    const letter = word[index];
    jumbled.push(letter);
    word.splice(index, 1);
    }
    return jumbled;
  }

  function nextWord() {
    setCurrentWord(prev => prev + 1);
    // return words[currentWord].split("");
  }

  function reset() {
    setCurrentWord(0);
  }

  return (
    <div>
    <header><h1>Jumble</h1></header>
    {currentWord < words.length ? 
    <GameArea nextWord={nextWord} realWord={words[currentWord]} word={jumbleWord(words[currentWord])}/> :
    <End reset={reset}/>}
    </div>
  );
}

export default App;
