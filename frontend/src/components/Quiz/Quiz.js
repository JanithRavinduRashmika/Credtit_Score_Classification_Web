import React, { useState, useEffect } from 'react';
import './Quiz.css';

// Assuming questions are now grouped by category
const questionsByCategory = {
  personal: [
    { id: 'Age', type: 'number', text: "What is your current age?",  min: 18, max: 100 },
    { id: 'Annual_Income', type: 'currency', text: "What is your total annual income before taxes in USD?"},
    { id: 'Monthly_Inhand_Salary', type: 'currency', text: "What is your monthly in-hand salary after taxes and deductions in USD?"}
  ],
  bank: [
    { id: 'Num_Bank_Accounts', type: 'number', text: "How many bank accounts do you currently have?" },
    { id: 'Num_Credit_Card', type: 'number', text: "How many credit cards do you own?" },
    { id: 'Credit_Mix', type: 'mcq', text: "How good your credits are mixed", options: ["Bad", "Standard", "Good"] },
    { id: 'Changed_Credit_Limit', type: 'number', text: "What is the you change in credit card limit percentage?" },
    { id: 'Num_Credit_Inquiries', type: 'number', text: "How many times have you applied for new credit in the past year?" },
    { id: 'Credit_Utilization_Ratio', type: 'number', text: "What percentage of your available credit are you currently using?" }
  ],
  loan: [
    { id: 'Num_of_Loan', type: 'number', text: "How many loans do you currently have?" },
    //{ id: 11, type: 'text', text: "What types of loans do you have?" },
    { id: 'Outstanding_Debt', type: 'currency', text: "What is the total amount of your outstanding debt?"},
    { id: 'Total_EMI_per_month', type: 'currency', text: "What is your total monthly EMI (Equated Monthly Installment) for all loans?" },
    { id: 'Interest_Rate', type: 'number', text: "What is the average interest rate on your loans?" }
  ],
  history: [
    { id: 'Delay_from_due_date', type: 'number', text: "On average, how many days do you delay your payments beyond the due date?" },
    { id: 'Num_of_Delayed_Payment', type: 'number', text: "How many payments have you delayed in the past year?" },
    { id: 'Credit_History_Age', type: 'number', text: "How many months have you had an active credit history?"},
    { id: 'Payment_of_Min_Amount', type: 'mcq', text: "Do you usually pay only the minimum amount due on your credit card bills?", options: ["Yes", "No"] }
  ], 
  spending: [
    { id: 'Amount_invested_monthly', type: 'currency', text: "How much money do you invest monthly?" },
    { id: 'Payment_Behaviour', type: 'mcq', text: "How would you describe your spending behavior:", options: ["Low spent Small vallue payment","Low spent Medium vallue payment","Low spent Large vallue payment","High spent Small vallue payment","High spent Medium vallue payment","High spent Large vallue payment"]},
    { id: 'Monthly_Balance', type: 'currency', text: "What is your average monthly balance after all expenses?" },
  ],
};

const Quiz = () => {
  const [currentCategory, setCurrentCategory] = useState('personal');
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [showDone, setShowDone] = useState(false);
  const [history, setHistory] = useState([]);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const [resultColor, setResultColor] = useState('');

  const [isLoading, setIsLoading] = useState(false);

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
        submitAnswers();
      }
    }
  };

  const submitAnswers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(answers)
      });
      const data = await response.json();
      if (data.predictions) {
        setSubmissionMessage(data.predictions);
        setResultColor(getResultColor(data.predictions));
        setShowDone(true);
      }
    } catch (error) {
      console.error('Error submitting answers:', error);
      setSubmissionMessage("Error submitting data");
      setResultColor('black');
      setShowDone(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getResultColor = (result) => {
    if (result.toLowerCase().includes('poor')) return 'red';
    if (result.toLowerCase().includes('standard')) return 'blue';
    if (result.toLowerCase().includes('good')) return 'green';
    return 'black'; // default color if no match
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

  if (isLoading) {
    return (
      <div className="quiz-container loading">
        <div className="loader"></div>
        <h2>Calculating your credit score...</h2>
      </div>
    );
  }

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
      <div className="quiz-container done resultContainer">
        <h4 className='resultTitle'>Your Credit Score class is estimated to be</h4>
        <h2 className= 'resultText' style={{ color: resultColor }}>{submissionMessage}</h2>
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