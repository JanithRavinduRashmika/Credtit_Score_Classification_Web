import React, { useState, useEffect } from 'react';
import './Quiz.css';

// Assuming questions are now grouped by category
const questionsByCategory = {
  personal: [
    { id: 1, type: 'number', text: "What is your current age?",  min: 18, max: 100 },
    { id: 2, type: 'currency', text: "What is your total annual income before taxes in USD?"},
    { id: 3, type: 'currency', text: "What is your monthly in-hand salary after taxes and deductions in USD?"}
  ],
  bank: [
    { id: 4, type: 'number', text: "How many bank accounts do you currently have?" },
    { id: 5, type: 'number', text: "How many credit cards do you own?" },
    { id: 6, type: 'mcq', text: "How good your credits are mixed", options: ["Bad", "Standard", "Good"] },
    { id: 7, type: 'number', text: "What is the you change in credit card limit percentage?" },
    { id: 8, type: 'number', text: "How many times have you applied for new credit in the past year?" },
    { id: 9, type: 'number', text: "What percentage of your available credit are you currently using?" }
  ],
  loan: [
    { id: 10, type: 'number', text: "How many loans do you currently have?" },
    //{ id: 11, type: 'text', text: "What types of loans do you have?" },
    { id: 12, type: 'currency', text: "What is the total amount of your outstanding debt?"},
    { id: 13, type: 'currency', text: "What is your total monthly EMI (Equated Monthly Installment) for all loans?" },
    { id: 14, type: 'number', text: "What is the average interest rate on your loans?" }
  ],
  history: [
    { id: 15, type: 'number', text: "On average, how many days do you delay your payments beyond the due date?" },
    { id: 16, type: 'number', text: "How many payments have you delayed in the past year?" },
    { id: 17, type: 'number', text: "How many years have you had an active credit history?"},
    { id: 18, type: 'mcq', text: "Do you usually pay only the minimum amount due on your credit card bills?", options: ["Yes", "No"] }
  ], 
  spending: [
    { id: 19, type: 'currency', text: "How much money do you invest monthly?" },
    { id: 20, type: 'mcq', text: "How would you describe your spending behavior:", options: ["Low spent Small vallue payment","Low spent Medium vallue payment","Low spent Large vallue payment","High spent Small vallue payment","High spent Medium vallue payment","High spent Large vallue payment"]},
    { id: 21, type: 'currency', text: "What is your average monthly balance after all expenses?" },
  ],
};

const Quiz = () => {
  const [currentCategory, setCurrentCategory] = useState('personal');
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [showDone, setShowDone] = useState(false);
  const [history, setHistory] = useState([]);

  const categories = Object.keys(questionsByCategory);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
    setErrors(prev => ({
      ...prev,
      [questionId]: ''
    }));
  };

  const handleNext = () => {
    const currentQuestions = questionsByCategory[currentCategory];
    const hasErrors = currentQuestions.some(q => {
      if (answers[q.id] === undefined || answers[q.id] === '') {
        setErrors(prev => ({
          ...prev,
          [q.id]: 'Please enter a value before proceeding.'
        }));
        return true;
      }
      return false;
    });

    if (!hasErrors) {
      const currentIndex = categories.indexOf(currentCategory);
      if (currentIndex < categories.length - 1) {
        setHistory(prev => [...prev, currentCategory]);
        setCurrentCategory(categories[currentIndex + 1]);
      } else {
        setShowDone(true);
      }
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const previousCategory = history[history.length - 1];
      setCurrentCategory(previousCategory);
      setHistory(prev => prev.slice(0, -1));
    }
  };

  const renderProgressBar = () => {
    const totalQuestions = Object.values(questionsByCategory).flat().length;
    const answeredQuestions = Object.keys(answers).length;
    const progress = (answeredQuestions / totalQuestions) * 100;
    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <span className="progress-text">{answeredQuestions} / {totalQuestions}</span>
      </div>
    );
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'mcq':
        return (
          <div className="question mcq" key={question.id}>
            <h2>{question.text}</h2>
            <div className="options">
              {question.options.map((option, index) => (
                <button 
                  key={index} 
                  onClick={() => handleAnswer(question.id, option)} 
                  className={`option-btn ${answers[question.id] === option ? 'selected' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      case 'currency':
      case 'number':
        return (
          <div className={`question ${question.type}`} key={question.id}>
            <h2>{question.text}</h2>
            <input 
              type="number" 
              min={question.min}
              max={question.max}
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
              className="input-field"
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (showDone) {
    return (
      <div className="quiz-container done">
        <h2>Done!</h2>
        <h3>Your answers:</h3>
        {Object.values(questionsByCategory).flat().map(q => (
          <p key={q.id} className="answer-summary">
            Question {q.id}: {answers[q.id] || "Not answered"}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="navigation-buttons">
        {history.length > 0 && (
          <button onClick={handleBack} className="back-btn">Back</button>
        )}
      </div>
      {renderProgressBar()}
      <h1>{currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Questions</h1>
      {questionsByCategory[currentCategory].map(renderQuestion)}
      {Object.values(errors).some(error => error) && (
        <div className="error-container">
          {Object.entries(errors).map(([id, error]) => 
            error ? <p key={id} className="error-message">{error}</p> : null
          )}
        </div>
      )}
      <button onClick={handleNext} className="next-btn">Next</button>
    </div>
  );
}
export default Quiz;