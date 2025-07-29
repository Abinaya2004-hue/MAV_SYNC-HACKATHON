import React from "react";
import TrainingNavbar from "../../components/layout/TrainingNavbar";
import "./Certifications.css";

const CERTIFICATES = [
  {
    title: "Data Analytics Mastery",
    status: "Completed",
    issued: "July 2025",
    downloadable: true,
  },
  {
    title: "Web Development Bootcamp",
    status: "Completed",
    issued: "June 2025",
    downloadable: true,
  },
  {
    title: "Cloud Computing Basics",
    status: "In Progress",
    issued: null,
    downloadable: false,
  },
];

const Certificates = () => {
  const handleDownload = (title) => {
    alert(`Downloading certificate for ${title}...`);
    // Implement actual file download logic here
  };

  return (
    <>
      <TrainingNavbar />
      <div className="certificates-page">
        <header className="certificates-header">
          <h2>My Certificates</h2>
          <p>View and download your earned certificates here.</p>
        </header>

        <div className="certificates-grid">
          {CERTIFICATES.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className={cert.status === "Completed" ? "status-label" : "status-inprogress"}>
                  Status: {cert.status}
                </p>
                {cert.issued && <p>Issued: {cert.issued}</p>}
              </div>
              {cert.downloadable ? (
                <button
                  className="download-btn"
                  onClick={() => handleDownload(cert.title)}
                >
                  Download Certificate
                </button>
              ) : (
                <p style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "1rem" }}>
                  Complete the course to unlock the certificate.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
