import React, { useState } from 'react';
import './App.css';

function App() {
  // Hamare quiz ke questions
  const questions = [
    {
      questionText: 'What is the main building block of React?',
      answerOptions: [
        { answerText: 'Components', isCorrect: true },
        { answerText: 'Modules', isCorrect: false },
        { answerText: 'Functions', isCorrect: false },
        { answerText: 'Classes', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the full form of JSX?',
      answerOptions: [
        { answerText: 'JavaScript XML', isCorrect: true },
        { answerText: 'JavaScript X-Code', isCorrect: false },
        { answerText: 'JSON XML', isCorrect: false },
        { answerText: 'Java Syntax Extension', isCorrect: false },
      ],
    },
    {
      questionText: 'Which hook is used in React to update the state?',
      answerOptions: [
        { answerText: 'useEffect', isCorrect: false },
        { answerText: 'useState', isCorrect: true },
        { answerText: 'useContext', isCorrect: false },
        { answerText: 'useReducer', isCorrect: false },
      ],
    },
    {
      questionText: 'What do we use to return more than one element in a React component?',
      answerOptions: [
        { answerText: 'Array', isCorrect: false },
        { answerText: 'Fragment', isCorrect: true },
        { answerText: 'Div', isCorrect: false },
        { answerText: 'Span', isCorrect: false },
      ],
    },
  ];

  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0); // Kaun sa question abhi dikh raha hai
  const [showScore, setShowScore] = useState(false);       // Kya score dikhana hai?
  const [score, setScore] = useState(0);                   // User ka score

  // Answer button click hone par kya hoga
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // Agar sahi jawab, toh score badhao
    }

    const nextQuestion = currentQuestion + 1; // Agle question par jao
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); // Agla question dikhao
    } else {
      setShowScore(true); // Agar saare questions ho gaye, toh score dikhao
    }
  };

  // Quiz ko dobara shuru karne ke liye
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className='app'>
      {showScore ? (
        // Score section dikhega jab quiz khatam ho jayega
        <div className='score-section'>
          You {questions.length} question {score} Gave the correct answer!
          <button onClick={restartQuiz}>Again Open</button>
        </div>
      ) : (
        // Questions section dikhega jab quiz chal raha hoga
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;