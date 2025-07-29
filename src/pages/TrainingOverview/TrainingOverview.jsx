import React, { useState } from "react";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./TrainingOverview.css";

const TrainingOverview = () => {
  // Demo data – you can wire these to Firestore later
  const [foundationPct] = useState(65);
  const [roleSpecificPct] = useState(30);

  const items = [
    { title: "Daily Quiz", status: "Completed", color: "#10b981" },
    { title: "Coding Tasks", status: "In Progress", color: "#f59e0b" },
    { title: "Skill Challenges", status: "Pending", color: "#ef4444" },
    { title: "Certifications", status: "In Progress", color: "#3b82f6" },
  ];

  const timeline = [
    { label: "Profile Updated", done: true },
    { label: "Daily Quiz Completed", done: true },
    { label: "Coding Challenge Submitted", done: false },
    { label: "Skill Challenge Submitted", done: false },
    { label: "Certification Completed", done: false },
  ];

  return (
    <>
      <TrainingNavbar />

      <div className="to-page">
        <div className="to-wrapper">
          <header className="to-welcome">
            <h2>Training Overview</h2>
            <p>Here’s your live status across the MAVSYNC training program.</p>
          </header>

          {/* Progress */}
          <section className="to-section">
            <h3 className="to-section-title">Program Progress</h3>
            <div className="to-progress-grid">
              <ProgressCard
                title="Foundation Training"
                percentage={foundationPct}
                color="#2563eb"
              />
              <ProgressCard
                title="Role-Specific Training"
                percentage={roleSpecificPct}
                color="#8b5cf6"
              />
            </div>
          </section>

          {/* Status Cards */}
          <section className="to-section">
          <h3 className="to-section-title">Your Current Status</h3>
            <div className="to-status-grid">
              {items.map((it) => (
                <StatusCard
                  key={it.title}
                  title={it.title}
                  status={it.status}
                  color={it.color}
                />
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="to-section">
            <h3 className="to-section-title">Workflow Timeline</h3>
            <ul className="to-timeline">
              {timeline.map((t) => (
                <li key={t.label} className={t.done ? "done" : ""}>
                  <span className="dot" />
                  <span className="label">{t.label}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default TrainingOverview;

/* ----- small inline components (keep here for simplicity) ----- */

const ProgressCard = ({ title, percentage, color }) => (
  <div className="to-progress-card">
    <div className="pc-header">
      <h4>{title}</h4>
      <span className="pc-value">{percentage}%</span>
    </div>
    <div className="pc-bar">
      <div className="pc-fill" style={{ width: `${percentage}%`, background: color }} />
    </div>
  </div>
);

const StatusCard = ({ title, status, color }) => (
  <div className="to-status-card">
    <h4>{title}</h4>
    <span className="badge" style={{ background: color }}>{status}</span>
  </div>
);
