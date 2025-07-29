import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ContactUs from "../pages/Contact/ContactUs";
import ProtectedRoute from "./ProtectedRoute";
import TrainingOverview from "../pages/TrainingOverview/TrainingOverview";
import Quizzes from "../pages/Quizzes/Quizzes";
import QuizDetail from "../pages/Quizzes/QuizDetail";
import Coding from "../pages/Coding/Coding";
import SkillChallenges from "../pages/SkillChallenges/SkillChallenges";
import SkillDetail from "../pages/SkillChallenges/SkillDetail";
import SubtopicDetail from "../pages/SkillChallenges/SubtopicDetail";
import SkillBadge from "../pages/SkillChallenges/SkillBadge";
import Certifications from "../pages/Certifications/Certifications";
import Profile from "../pages/Profile/Profile"; // <-- NEW

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/contact" element={<ContactUs />} />

    {/* Training Overview */}
    <Route
      path="/training-overview"
      element={
        <ProtectedRoute>
          <TrainingOverview />
        </ProtectedRoute>
      }
    />

    {/* Quizzes */}
    <Route path="/quizzes" element={<Quizzes />} />
    <Route path="/quizzes/:quizId" element={<QuizDetail />} />

    {/* Coding */}
    <Route
      path="/coding"
      element={
        <ProtectedRoute>
          <Coding />
        </ProtectedRoute>
      }
    />

    {/* Skill Challenges */}
    <Route
      path="/skill-challenges"
      element={
        <ProtectedRoute>
          <SkillChallenges />
        </ProtectedRoute>
      }
    />
    <Route
      path="/skills/:skillId"
      element={
        <ProtectedRoute>
          <SkillDetail />
        </ProtectedRoute>
      }
    />
    <Route
      path="/skills/:skillId/subtopics/:subtopicId"
      element={
        <ProtectedRoute>
          <SubtopicDetail />
        </ProtectedRoute>
      }
    />
    <Route
      path="/skills/:skillId/badge"
      element={
        <ProtectedRoute>
          <SkillBadge />
        </ProtectedRoute>
      }
    />

    {/* Certifications */}
    <Route
      path="/certifications"
      element={
        <ProtectedRoute>
          <Certifications />
        </ProtectedRoute>
      }
    />

    {/* Profile */}
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
