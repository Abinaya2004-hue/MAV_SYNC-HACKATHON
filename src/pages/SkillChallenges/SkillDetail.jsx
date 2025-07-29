import React from "react";
import { Link, useParams } from "react-router-dom";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./SkillChallenges.css";

export const SKILL_DEFS = {
  excel: {
    title: "Excel",
    description:
      "Master formulas, pivot tables, charts, and automation to handle business data effectively.",
    subtopics: [
      { id: "core-components", title: "Core Components", desc: "Learn Excel UI, worksheets, and data entry basics." },
      { id: "formulas", title: "Formulas & Functions", desc: "Understand SUM, VLOOKUP, IF, and advanced functions." },
      { id: "charts", title: "Charts & Visuals", desc: "Create charts, graphs, and dashboards for data analysis." },
    ],
  },
  "power-bi": {
    title: "Power BI",
    description:
      "Learn Power BI for creating interactive dashboards, data models, and real-time analytics.",
    subtopics: [
      { id: "setup", title: "Setup & Data Import", desc: "Connect Power BI with multiple data sources." },
      { id: "visualization", title: "Data Visualization", desc: "Create visuals and reports with Power BI." },
      { id: "publishing", title: "Publishing", desc: "Publish and share Power BI dashboards." },
    ],
  },
  tableau: {
    title: "Tableau",
    description:
      "Learn Tableau to build interactive dashboards and visualizations.",
    subtopics: [
      { id: "basics", title: "Tableau Basics", desc: "Connect data sources and create first visualizations." },
      { id: "advanced", title: "Advanced Charts", desc: "Work with maps, filters, and calculated fields." },
    ],
  },
};

const SkillDetail = () => {
  const { skillId } = useParams();
  const skill = SKILL_DEFS[skillId];

  if (!skill) {
    return (
      <>
        <TrainingNavbar />
        <div className="skills-page">
          <p className="no-domain">Skill details not found.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <TrainingNavbar />
      <div className="sd-page">
        <header className="sd-header">
          <h2>{skill.title}</h2>
          <p>{skill.description}</p>
        </header>

        <h3 className="sd-subtitle">Subtopics</h3>
        <div className="sd-clickable-list">
          {skill.subtopics.map((topic) => (
            <Link
              to={`/skills/${skillId}/subtopics/${topic.id}`}
              key={topic.id}
              className="sd-section-link-card"
            >
              <h4>{topic.title}</h4>
              <p>{topic.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillDetail;
