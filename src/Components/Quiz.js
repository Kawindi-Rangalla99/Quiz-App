import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    setOptionChosen(""); 
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endscreen");
  };

  const getButtonStyle = (option) => {
    return option === optionChosen
      ? { backgroundColor: "rgb(190, 92, 27)", color: "white" }
      : {};
  };

  return (
    <div className="Quiz">
      <div className="question"> <h2>{Questions[currQuestion].prompt}</h2></div>
      <div className="options">
        <button 
          style={getButtonStyle("A")}
          onClick={() => setOptionChosen("A")}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          style={getButtonStyle("B")}
          onClick={() => setOptionChosen("B")}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          style={getButtonStyle("C")}
          onClick={() => setOptionChosen("C")}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          style={getButtonStyle("D")}
          onClick={() => setOptionChosen("D")}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion === Questions.length - 1 ? (
        <div className="finish">
        <button onClick={finishQuiz}>Finish Quiz</button>
        </div>
      ) : (
        <div className="next">
        <button onClick={nextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
