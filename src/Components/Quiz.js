import React, {useState} from 'react';
import { Questions } from '../Helpers/QuestionBank';

function Quiz() {
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptuonChosen] = useState("")

    return (
    <div className='Quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
            <button onClick={() => setOptuonChosen("A")}> 
                {Questions[currQuestion].optionA}{" "}
            </button>
            <button onClick={() => setOptuonChosen("B")}> 
                {Questions[currQuestion].optionB}{" "}
            </button>
            <button onClick={() => setOptuonChosen("C")}> 
                {Questions[currQuestion].optionC}{" "}
            </button>
            <button onClick={() => setOptuonChosen("D")}> 
                {Questions[currQuestion].optionD}{" "}
            </button>
        </div>

        <button>Next Question</button>
    </div>
  )
}

export default Quiz

