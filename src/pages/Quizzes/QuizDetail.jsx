import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./QuizDetail.css";

const sampleQuestions = {
  "js-basics": [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function having access to its outer scope",
        "An immediately invoked function",
        "A type of loop",
        "None of the above",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["Boolean", "Undefined", "Float", "Number"],
      answer: 2,
    },
  ],
  // Add sample questions for other quizzes here
};

const QuizDetail = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const questions = sampleQuestions[quizId] || [];

  return (
    <>
      <TrainingNavbar />
      <div className="quiz-detail-page">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back to Quizzes</button>
        <h2>Quiz: {quizId.replace(/-/g, " ").toUpperCase()}</h2>
        {questions.length === 0 ? (
          <p>No questions available for this quiz yet.</p>
        ) : (
          <ol className="questions-list">
            {questions.map((q, i) => (
              <li key={i} className="question-item">
                <p className="question-text">{q.question}</p>
                <ul className="options-list">
                  {q.options.map((opt, idx) => (
                    <li key={idx} className={`option ${idx === q.answer ? "correct" : ""}`}>
                      {opt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
};

export default QuizDetail;
