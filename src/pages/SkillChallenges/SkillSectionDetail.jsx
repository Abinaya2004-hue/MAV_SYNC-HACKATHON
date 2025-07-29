import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./SkillSectionDetail.css";

// Example data structure
const SKILL_TOPICS = {
  excel: [
    {
      id: "core",
      title: "Core Excel Components",
      content: "Learn about Excel's core components including cells, rows, columns, and basic navigation.",
      video: "https://www.youtube.com/embed/0nbkaYsR94c",
    },
    {
      id: "formulas",
      title: "Formulas & Functions",
      content: "Master Excel formulas like SUM, AVERAGE, VLOOKUP, and IF statements.",
      video: "https://www.youtube.com/embed/3JxRAvkNwCw",
    },
    {
      id: "pivot-tables",
      title: "Pivot Tables",
      content: "Learn to create pivot tables for summarizing and analyzing data quickly.",
      video: "https://www.youtube.com/embed/9NUjHBNWe9M",
    },
  ],
  "power-bi": [
    {
      id: "intro",
      title: "Power BI Introduction",
      content: "Understand the basics of Power BI, its interface, and core components.",
      video: "https://www.youtube.com/embed/AGrl-H87pRU",
    },
    {
      id: "dashboards",
      title: "Dashboards & Reports",
      content: "Learn to build dashboards and interactive reports using Power BI tools.",
      video: "https://www.youtube.com/embed/FZzNNWnU5-s",
    },
  ],
};

const SkillSectionDetail = () => {
  const { skillId, sectionId } = useParams();
  const navigate = useNavigate();

  const topics = SKILL_TOPICS[skillId] || [];
  const currentIndex = topics.findIndex((t) => t.id === sectionId);
  const currentTopic = topics[currentIndex];

  if (!currentTopic) {
    return (
      <>
        <TrainingNavbar />
        <div className="ssd-page">
          <p className="ssd-error">Subtopic not found.</p>
        </div>
      </>
    );
  }

  const handleNext = () => {
    if (currentIndex < topics.length - 1) {
      navigate(`/skills/${skillId}/section/${topics[currentIndex + 1].id}`);
    } else {
      navigate(`/skills/${skillId}/badge`);
    }
  };

  return (
    <>
      <TrainingNavbar />
      <div className="ssd-page">
        <header className="ssd-header">
          <h2>{currentTopic.title}</h2>
          <p>{currentTopic.content}</p>
        </header>

        {/* Video Section */}
        <div className="ssd-video">
          <iframe
            width="100%"
            height="360"
            src={currentTopic.video}
            title="Skill Tutorial"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Next / Complete Button */}
        <div className="ssd-actions">
          <button className="ssd-next-btn" onClick={handleNext}>
            {currentIndex === topics.length - 1
              ? "Mark as Completed & Earn Badge"
              : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SkillSectionDetail;
