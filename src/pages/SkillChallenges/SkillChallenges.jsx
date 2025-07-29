import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./SkillChallenges.css";

const DOMAINS = [
  { key: "data-analytics", title: "Data Analytics" },
  { key: "web-development", title: "Web Development" },
  { key: "cloud", title: "Cloud Computing" },
];

const SKILLS = {
  "data-analytics": [
    { key: "excel", title: "Excel", duration: "2 weeks" },
    { key: "power-bi", title: "Power BI", duration: "3 weeks" },
    { key: "tableau", title: "Tableau", duration: "3 weeks" },
    { key: "sql-basics", title: "SQL Basics", duration: "4 weeks" },
  ],
  "web-development": [
    { key: "html", title: "HTML & CSS", duration: "2 weeks" },
    { key: "javascript", title: "JavaScript", duration: "3 weeks" },
    { key: "react", title: "React Basics", duration: "4 weeks" },
  ],
  "cloud": [
    { key: "aws", title: "AWS Fundamentals", duration: "3 weeks" },
    { key: "azure", title: "Azure Basics", duration: "3 weeks" },
    { key: "gcp", title: "Google Cloud", duration: "4 weeks" },
  ],
};

const SkillChallenges = () => {
  const [selectedDomain, setSelectedDomain] = useState("data-analytics");

  return (
    <>
      <TrainingNavbar />
      <div className="skills-page">
        <header className="skills-header">
          <h2>Skill Challenges</h2>
          <p>
            Practice and master core skills with hands-on challenges and leaderboard rankings.
          </p>
        </header>

        {/* Domain Selection */}
        <div className="domain-selector">
          <label>Select a Domain:</label>
          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
          >
            {DOMAINS.map((domain) => (
              <option key={domain.key} value={domain.key}>
                {domain.title}
              </option>
            ))}
          </select>
        </div>

        {/* Skills Cards */}
        <div className="skills-grid">
          {SKILLS[selectedDomain].map((skill) => (
            <Link to={`/skills/${skill.key}`} className="skill-card" key={skill.key}>
              <h3>{skill.title}</h3>
              <p>Duration: {skill.duration}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillChallenges;
