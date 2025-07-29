import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./Profile.css";

const dummyStats = {
  quizzesCompleted: 18,
  codingCompleted: 12,
  assignmentsSubmitted: 7,
  certifications: 2,
};

const programProgress = {
  foundation: 72,
  roleSpecific: 38,
};

const statusItems = [
  { title: "Daily Quiz", status: "Completed", color: "#10b981" },
  { title: "Coding Challenge", status: "In Progress", color: "#f59e0b" },
  { title: "Assignment", status: "Submitted", color: "#3b82f6" },
  { title: "Certification", status: "In Progress", color: "#6366f1" },
];

const workflowTimeline = [
  { label: "Profile Updated", done: true },
  { label: "Daily Quiz Completed", done: true },
  { label: "Coding Challenge Submitted", done: true },
  { label: "Assignment Submitted", done: false },
  { label: "Certification Completed", done: false },
];

const assessments = [
  { metric: "Quiz Average", value: "84%" },
  { metric: "Coding Score", value: "78%" },
  { metric: "Assignments Avg", value: "82%" },
  { metric: "Certifications Completed", value: "2" },
];

const recentActivity = [
  { id: 1, text: "Submitted Coding Challenge #12", ts: "2025-07-24 14:35" },
  { id: 2, text: "Completed Daily Quiz - Day 18", ts: "2025-07-24 10:03" },
  { id: 3, text: "Updated Profile Phone Number", ts: "2025-07-22 19:50" },
];

export default function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // editable fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Fresher - Data Analyst");
  const [cohort, setCohort] = useState("Mavericks 2025");

  // accordions
  const [open, setOpen] = useState({
    program: true,
    status: true,
    assessments: true,
    timeline: false,
    activity: false,
    certificates: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        setFullName(u.displayName || "Your Name");
      }
    });
    return () => unsub();
  }, []);

  const toggle = (key) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  const handleSave = () => {
    setIsEditing(false);
    // TODO: persist to Firestore if needed
    alert("Profile details saved!");
  };

  const downloadReport = () => {
    // TODO: implement with jsPDF / server generated report
    alert("Report generation not wired yet. Hook this to jsPDF / backend.");
  };

  if (!user) {
    return (
      <>
        <TrainingNavbar />
        <div className="profile-page">
          <p>Loading profile...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <TrainingNavbar />

      <div className="profile-page">
        {/* HEADER */}
        <header className="profile-header fade-in">
          <img
          /* replace with stored photoURL later */
            src="https://ui-avatars.com/api/?name=U&background=0EA5E9&color=fff"
            alt="Profile"
            className="profile-pic"
          />
          <h2>{fullName}</h2>
          <p className="email">{user.email}</p>
          <div className="meta">
            <span className="tag">{role}</span>
            <span className="tag">{cohort}</span>
          </div>
        </header>

        {/* PERSONAL INFO CARD */}
        <section className="profile-card slide-up">
          <div className="section-head">
            <h3>Personal Information</h3>
            {!isEditing ? (
              <button className="btn primary" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            ) : (
              <button className="btn success" onClick={handleSave}>
                Save
              </button>
            )}
          </div>

          <div className="info-grid">
            <Field
              label="Full Name"
              value={fullName}
              isEditing={isEditing}
              setValue={setFullName}
            />
            <Field
              label="Email"
              value={user.email}
              isEditing={false}
            />
            <Field
              label="Phone"
              value={phone}
              isEditing={isEditing}
              setValue={setPhone}
            />
            <Field
              label="Cohort"
              value={cohort}
              isEditing={isEditing}
              setValue={setCohort}
            />
            <Field
              label="Role"
              value={role}
              isEditing={isEditing}
              setValue={setRole}
            />
          </div>
        </section>

        {/* QUICK STATS */}
        <section className="profile-card slide-up">
          <h3>Training Snapshot</h3>
          <div className="stats-grid">
            <StatCard label="Quizzes Completed" value={dummyStats.quizzesCompleted} />
            <StatCard label="Coding Challenges" value={dummyStats.codingCompleted} />
            <StatCard label="Assignments" value={dummyStats.assignmentsSubmitted} />
            <StatCard label="Certifications" value={dummyStats.certifications} />
          </div>
        </section>

        {/* PROGRAM PROGRESS */}
        <Accordion
          title="Program Progress (Foundation vs Role-Specific)"
          open={open.program}
          onToggle={() => toggle("program")}
        >
          <div className="progress-blocks">
            <ProgressCard
              title="Foundation Training"
              percentage={programProgress.foundation}
              color="#2563eb"
            />
            <ProgressCard
              title="Role-Specific Training"
              percentage={programProgress.roleSpecific}
              color="#8b5cf6"
            />
          </div>
        </Accordion>

        {/* CURRENT STATUS */}
        <Accordion
          title="Current Status"
          open={open.status}
          onToggle={() => toggle("status")}
        >
          <div className="status-grid">
            {statusItems.map((s) => (
              <StatusCard key={s.title} {...s} />
            ))}
          </div>
        </Accordion>

        {/* ASSESSMENTS */}
        <Accordion
          title="Assessment Scores"
          open={open.assessments}
          onToggle={() => toggle("assessments")}
        >
          <div className="assessment-table-wrapper">
            <table className="assessment-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Score / Count</th>
                </tr>
              </thead>
              <tbody>
                {assessments.map((a) => (
                  <tr key={a.metric}>
                    <td>{a.metric}</td>
                    <td>{a.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn light mt" onClick={downloadReport}>
            Download Training Report
          </button>
        </Accordion>

        {/* WORKFLOW TIMELINE */}
        <Accordion
          title="Workflow Timeline"
          open={open.timeline}
          onToggle={() => toggle("timeline")}
        >
          <ul className="timeline">
            {workflowTimeline.map((t) => (
              <li key={t.label} className={t.done ? "done" : ""}>
                <span className="dot" />
                <span className="label">{t.label}</span>
              </li>
            ))}
          </ul>
        </Accordion>

        {/* ACTIVITY FEED */}
        <Accordion
          title="Recent Activity"
          open={open.activity}
          onToggle={() => toggle("activity")}
        >
          <ul className="activity-feed">
            {recentActivity.map((a) => (
              <li key={a.id}>
                <span className="act-text">{a.text}</span>
                <span className="act-ts">{a.ts}</span>
              </li>
            ))}
          </ul>
        </Accordion>

        {/* CERTIFICATES */}
        <Accordion
          title="Certificates Summary"
          open={open.certificates}
          onToggle={() => toggle("certificates")}
        >
          <div className="cert-summary">
            <p>Completed: 2 of 5 planned certifications.</p>
            <button
              className="btn primary"
              onClick={() => (window.location.href = "/certifications")}
            >
              Go to Certifications
            </button>
          </div>
        </Accordion>
      </div>
    </>
  );
}

/* ---------------- Small inline components ---------------- */

function Field({ label, value, isEditing, setValue }) {
  return (
    <div className="info-field">
      <label>{label}</label>
      {isEditing && setValue ? (
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <span>{value || "—"}</span>
      )}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function ProgressCard({ title, percentage, color }) {
  return (
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
}

function StatusCard({ title, status, color }) {
  return (
    <div className="to-status-card">
      <h4>{title}</h4>
      <span className="badge" style={{ background: color }}>
        {status}
      </span>
    </div>
  );
}

function Accordion({ title, open, onToggle, children }) {
  return (
    <section className={`profile-card accordion ${open ? "open" : ""}`}>
      <button className="accordion-head" onClick={onToggle}>
        <h3>{title}</h3>
        <span className={`chev ${open ? "up" : "down"}`}>⌄</span>
      </button>
      {open && <div className="accordion-body">{children}</div>}
    </section>
  );
}
