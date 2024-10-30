import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';
import "../App.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
        <h1>Congratulations!</h1>
      <h2>{score} / {Questions.length}</h2>
      <button className='restart' onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
