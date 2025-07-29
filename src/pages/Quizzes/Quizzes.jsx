import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./Quizzes.css";

const quizzesData = [
  { id: "js-basics", title: "JavaScript Basics", status: "Completed", questionsCount: 10, tags: ["javascript", "fundamentals"] },
  { id: "react-fundamentals", title: "React Fundamentals", status: "In Progress", questionsCount: 12, tags: ["react", "hooks", "components"] },
  { id: "firebase-auth", title: "Firebase Auth", status: "Pending", questionsCount: 8, tags: ["firebase", "auth"] },
  { id: "data-structures", title: "Data Structures", status: "Pending", questionsCount: 15, tags: ["ds", "algorithms"] },
];

const popularQuizzes = [
  { id: "react-fundamentals", title: "React Fundamentals" },
  { id: "js-basics", title: "JavaScript Basics" },
  { id: "data-structures", title: "Data Structures" },
];

const Quizzes = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return quizzesData;
    return quizzesData.filter(q =>
      q.title.toLowerCase().includes(s) ||
      q.tags.some(t => t.toLowerCase().includes(s))
    );
  }, [search]);

  const goToQuiz = (id) => navigate(`/quizzes/${id}`);

  return (
    <>
      <TrainingNavbar />

      <div className="quizzes-layout">
        {/* LEFT: content */}
        <main className="quizzes-main">
          <header className="quizzes-header">
            <h2>Quizzes</h2>
            <p>Search and pick a topic to start.</p>

            <div className="quiz-search">
              <input
                type="text"
                placeholder="Search quizzes (e.g., React, Firebase, DS)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </header>

          <section className="quizzes-list">
          {filtered.length === 0 ? (
            <div className="no-results">No quizzes match “{search}”.</div>
          ) : (
            filtered.map(({ id, title, status, questionsCount }) => (
              <article
                key={id}
                className="quiz-card clickable"
                onClick={() => goToQuiz(id)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && goToQuiz(id)}
                role="button"
              >
                <h3>{title}</h3>
                <div className="quiz-meta">
                  <span className={`quiz-status ${status.toLowerCase().replace(" ", "-")}`}>
                    {status}
                  </span>
                  <span className="quiz-questions-count">{questionsCount} Questions</span>
                </div>
              </article>
            ))
          )}
          </section>
        </main>

        {/* RIGHT: sidebar */}
        <aside className="quizzes-sidebar">
          <h4>Popular Quizzes</h4>
          <ul className="popular-list">
            {popularQuizzes.map(p => (
              <li key={p.id} onClick={() => goToQuiz(p.id)} tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && goToQuiz(p.id)}>
                {p.title}
              </li>
            ))}
          </ul>

          <div className="tips-box">
            <h5>Tips</h5>
            <ul>
              <li>Finish Daily Quiz to maintain streaks</li>
              <li>Retake quizzes to improve your score</li>
              <li>Track progress in Training Overview</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Quizzes;
