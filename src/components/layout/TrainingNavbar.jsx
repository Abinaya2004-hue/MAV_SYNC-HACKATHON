import React, { useEffect, useState } from "react";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../../assets/logo.png";
import "./TrainingNavbar.css";

const TrainingNavbar = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        navigate("/login");
      } else {
        setUserEmail(u.email || "");
      }
    });
    return () => unsub();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // Make "Skills" active on any /skill-challenges OR /skills/* route
  const skillsActive =
    location.pathname.startsWith("/skill-challenges") ||
    location.pathname.startsWith("/skills");

  return (
    <nav className="t-navbar">
      <Link to="/training-overview" className="t-brand">
        <img src={logo} alt="MAVESYNC" className="t-logo" />
        <span className="t-title">MAV_SYNC</span>
      </Link>

      <ul className="t-nav-links">
        <li>
          <NavLink
            to="/training-overview"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Training Overview
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/quizzes"
          className={({ isActive }) => (isActive ? "active" : "")}
          >
            Quizzes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/coding"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Coding
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skill-challenges"
            className={({ isActive }) => (isActive || skillsActive ? "active" : "")}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certifications"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Certifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Profile
          </NavLink>
        </li>
      </ul>

      <div className="t-right">
        <span className="t-user">{userEmail}</span>
        <button onClick={handleLogout} className="t-logout">Logout</button>
      </div>
    </nav>
  );
};

export default TrainingNavbar;
