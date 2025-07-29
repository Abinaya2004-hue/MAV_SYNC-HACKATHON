import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>MAV_SYNC</h1>
          <p className="hero-tagline">
            "Synchronizing Onboarding and Training with Intelligence"
          </p>
          <p className="hero-subtitle">
            Streamline onboarding, track progress, and boost productivity with our AI-driven platform for Mavericks.
          </p>
          <a href="/register" className="cta-btn">Get Started</a>
        </div>
        <div className="hero-image">
          <img
            src=""https://dummyimage.com/600x400/2563eb/ffffff&text=Training+Dashboard"
            alt="Training Dashboard"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why MAV_SYNC?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Smart Onboarding</h3>
            <p>
              Personalized onboarding paths powered by AI to help every Maverick excel from day one.
            </p>
          </div>
          <div className="feature-card">
            <h3>Live Progress Tracking</h3>
            <p>
              Interactive dashboards for real-time progress monitoring and performance evaluation.
            </p>
          </div>
          <div className="feature-card">
            <h3>Analytics for Admins</h3>
            <p>
              Comprehensive insights to help administrators measure and optimize training programs.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-section">
        <h2>How It Works</h2>
        <div className="how-grid">
          <div className="how-step">
            <span className="step-number">1</span>
            <h4>Sign Up</h4>
            <p>
              Create your MAV_SYNC account and get instant access to onboarding tools.
            </p>
          </div>
          <div className="how-step">
            <span className="step-number">2</span>
            <h4>Track Progress</h4>
            <p>
              Monitor your learning curve with interactive dashboards and quizzes.
            </p>
          </div>
          <div className="how-step">
            <span className="step-number">3</span>
            <h4>Achieve Goals</h4>
            <p>
              Get certifications and recognition with a data-driven approach to growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Mavericks Onboarded</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Quizzes & Modules</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Live Admin Reports</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Experience Next-Level Onboarding?</h2>
        <p>
          Join MAV_SYNC today and start building a smarter, faster, and more productive future.
        </p>
        <a href="/register" className="cta-btn">Create Account</a>
      </section>
    </div>
  );
};

export default Home;
