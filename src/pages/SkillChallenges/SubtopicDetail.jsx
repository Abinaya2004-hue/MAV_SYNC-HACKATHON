import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import { SKILL_DEFS } from "./SkillDetail";
import "./SkillChallenges.css";

const SubtopicDetail = () => {
  const { skillId, subtopicId } = useParams();
  const navigate = useNavigate();
  const skill = SKILL_DEFS[skillId] || null;

  const { subtopic, index, isLast } = useMemo(() => {
    if (!skill) return { subtopic: null, index: -1, isLast: false };
    const list = skill.subtopics || [];
    const idx = list.findIndex((s) => s.id === subtopicId);
    return {
      subtopic: idx >= 0 ? list[idx] : null,
      index: idx,
      isLast: idx === list.length - 1,
    };
  }, [skill, subtopicId]);

  if (!skill || !subtopic) {
    return (
      <>
        <TrainingNavbar />
        <div className="sd-page">
          <p className="sd-not-found">Subtopic not found.</p>
        </div>
      </>
    );
  }

  const handleNext = () => {
    if (isLast) {
      navigate(`/skills/${skillId}/badge`);
    } else {
      const next = skill.subtopics[index + 1];
      navigate(`/skills/${skillId}/subtopics/${next.id}`);
    }
  };

  return (
    <>
      <TrainingNavbar />
      <div className="sd-page">
        <header className="sd-header">
          <h2>{skill.title}</h2>
          <p className="sd-desc">Subtopic: {subtopic.title}</p>
        </header>

        <article className="sd-section-card">
          <h3>{subtopic.title}</h3>
          <p>{subtopic.description}</p>
        </article>

        <div className="sd-actions">
          <button className="sd-btn" onClick={handleNext}>
            {isLast ? "Mark as Completed & Earn Badge" : "Next Subtopic"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SubtopicDetail;
