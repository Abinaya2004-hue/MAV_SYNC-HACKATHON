import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./SkillBadge.css";

const SkillBadge = () => {
  const { skillId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    import("canvas-confetti").then((confetti) =>
      confetti.default({ particleCount: 120, spread: 70, origin: { y: 0.6 } })
    );
  }, []);

  return (
    <>
      <TrainingNavbar />
      <div className="badge-page">
        <div className="badge-container">
          <h2>🎉 Congratulations!</h2>
          <p>You are now skilled in <strong>{skillId.toUpperCase()}</strong>.</p>
          <div className="badge-display">🏅</div>
          <button className="badge-btn" onClick={() => navigate("/skill-challenges")}>
            Back to Skills
          </button>
        </div>
      </div>
    </>
  );
};

export default SkillBadge;
