import React, { useState, useEffect } from 'react';
import { Mail, Phone, ExternalLink, Award, Code, Shield, Database, User, Menu, X, ChevronRight, Linkedin, FileText, ShieldAlert } from 'lucide-react';
import { personalInfo, aboutMe, projects, skills as rawSkills, experience } from './data';

const Portfolio = ({ onViewProject }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const iconsMap = { Code, Shield, Database, User };
  const skills = rawSkills.map(s => ({ ...s, icon: iconsMap[s.icon] || Code }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="portfolio">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .portfolio {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #0f172a;
          color: #ffffff;
          line-height: 1.6;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid #334155;
          padding: 1rem 0;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-desktop {
          display: flex;
          gap: 2rem;
        }

        .nav-button {
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.2s;
          padding: 0.5rem;
        }

        .nav-button:hover {
          color: #60a5fa;
        }

        .nav-button.active {
          color: #60a5fa;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          display: none;
          padding: 1rem 1.5rem;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-menu-button {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem 0;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.2s;
        }

        .mobile-menu-button:hover {
          color: #60a5fa;
        }

        /* Sections */
        section {
          padding: 5rem 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .section-alt {
          background-color: #1e293b;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
        }

        /* Hero Section */
        .hero {
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1));
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          transition: all 1s;
          transform: translateY(40px);
          opacity: 0;
        }

        .hero-content.fade-in {
          transform: translateY(0);
          opacity: 1;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #60a5fa, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #cbd5e1;
        }

        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 3rem;
          color: #94a3b8;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .button-primary, .button-secondary {
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
        }

        .button-primary {
          background-color: #2563eb;
          color: white;
        }

        .button-primary:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
        }

        .button-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid #475569;
        }

        .button-secondary:hover {
          border-color: #60a5fa;
          transform: translateY(-2px);
        }

        /* Content sections */
        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .fade-in-section {
          transition: all 1s;
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* About section */
        .about-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .about-text {
          background-color: #374151;
          border-radius: 0.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
          font-size: 1.1rem;
          color: #d1d5db;
          line-height: 1.7;
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .about-card {
          background-color: #374151;
          border-radius: 0.5rem;
          padding: 1.5rem;
        }

        .about-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #60a5fa;
        }

        .about-card p {
          color: #d1d5db;
          margin: 0;
        }

        /* Projects section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background-color: #1e293b;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
        }

        .project-card:hover {
          background-color: #334155;
          transform: translateY(-5px);
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #60a5fa;
        }

        .project-description {
          color: #d1d5db;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .project-highlights {
          margin-bottom: 1rem;
        }

        .project-highlight-title {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #e2e8f0;
        }

        .project-highlight-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .project-highlight-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .project-highlight-dot {
          width: 6px;
          height: 6px;
          background-color: #60a5fa;
          border-radius: 50%;
          margin-right: 0.5rem;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .project-technologies {
          margin-bottom: 1rem;
        }

        .project-tech-title {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #e2e8f0;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tech-tag {
          padding: 0.25rem 0.75rem;
          background-color: #2563eb;
          color: white;
          font-size: 0.875rem;
          border-radius: 9999px;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #60a5fa;
          text-decoration: none;
          transition: color 0.2s;
        }

        .project-link:hover {
          color: #93c5fd;
        }

        /* Skills section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background-color: #374151;
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s;
        }

        .skill-card:hover {
          background-color: #4b5563;
          transform: translateY(-5px);
        }

        .skill-icon {
          color: #60a5fa;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .skill-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #60a5fa;
        }

        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .skill-item {
          color: #d1d5db;
          margin-bottom: 0.5rem;
        }

        /* Certifications section */
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .cert-card {
          background-color: #1e293b;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
        }

        .cert-card:hover {
          background-color: #334155;
          transform: translateY(-5px);
        }

        .cert-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .cert-icon {
          color: #fbbf24;
          margin-right: 0.75rem;
        }

        .cert-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #60a5fa;
        }

        .cert-detail {
          color: #d1d5db;
          margin-bottom: 0.5rem;
        }

        .cert-achievement {
          font-size: 0.9rem;
          color: #94a3b8;
        }

        /* Contact section */
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-card {
          background-color: #374151;
          border-radius: 0.5rem;
          padding: 2rem;
        }

        .contact-description {
          font-size: 1.1rem;
          color: #d1d5db;
          margin-bottom: 2rem;
          text-align: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          color: white;
          font-weight: 600;
          transition: all 0.2s;
        }

        .contact-link:hover {
          transform: translateY(-2px);
        }

        .contact-email {
          background-color: #2563eb;
        }

        .contact-email:hover {
          background-color: #1d4ed8;
        }

        .contact-phone {
          background-color: #059669;
        }

        .contact-phone:hover {
          background-color: #047857;
        }

        .contact-github {
          background-color: #4b5563;
        }

        .contact-github:hover {
          background-color: #374151;
        }

        /* CV Section */
        .cv-viewer-wrapper {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          background-color: #1e293b;
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid #334155;
        }

        .cv-viewer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background-color: #374151;
          border-bottom: 1px solid #334155;
        }

        .cv-viewer-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #60a5fa;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .cv-viewer-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.75rem;
          background-color: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 9999px;
          color: #fca5a5;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .cv-viewer-container {
          position: relative;
          width: 100%;
          height: 80vh;
          min-height: 500px;
        }

        .cv-viewer-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .cv-viewer-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          pointer-events: none;
        }

        @media print {
          .cv-viewer-wrapper,
          .cv-viewer-container {
            display: none !important;
          }

          body::after {
            content: 'Printing is disabled for this document.';
            display: block;
            text-align: center;
            font-size: 2rem;
            padding: 4rem;
          }
        }

        /* Footer */
        footer {
          padding: 2rem 0;
          background-color: #0f172a;
          border-top: 1px solid #334155;
          text-align: center;
          color: #94a3b8;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          section {
            padding: 4rem 0;
          }

          .projects-grid,
          .skills-grid,
          .certifications-grid,
          .about-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .container {
            padding: 0 1rem;
          }

          .logo {
            font-size: 1.2rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">
            {personalInfo.name}
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="mobile-menu-button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero">
            <div className={`hero-content ${isVisible.home ? 'fade-in' : ''}`}>
              <h1 className="hero-title">
                {personalInfo.name}
              </h1>
              <p className="hero-subtitle">
                {personalInfo.title}
              </p>
              <p className="hero-description">
                {personalInfo.description}
              </p>
              <div className="hero-buttons">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="button-primary"
                >
                  <span>View Projects</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="button-secondary"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-alt">
        <div className="container">
          <div className={`about-content fade-in-section ${isVisible.about ? 'visible' : ''}`}>
            <h2 className="section-title">About Me</h2>
            <div className="about-text">
              <p>{aboutMe.intro}</p>
              <p>{aboutMe.experience}</p>
              <p>{aboutMe.goals}</p>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <h3 className="about-card-title">Education</h3>
                <p>
                  <strong>{aboutMe.education.institution}</strong><br />
                  {aboutMe.education.program}<br />
                  Focus: {aboutMe.education.focus}
                </p>
              </div>
              <div className="about-card">
                <h3 className="about-card-title">Career Goals</h3>
                <p>
                  {aboutMe.careerGoals.title}<br />
                  Target: {aboutMe.careerGoals.certification}<br />
                  Vision: {aboutMe.careerGoals.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className={`projects-grid fade-in-section ${isVisible.projects ? 'visible' : ''}`}>
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <h4 className="project-highlight-title">Key Highlights:</h4>
                  <ul className="project-highlight-list">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="project-highlight-item">
                        <span className="project-highlight-dot"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4 className="project-tech-title">Technologies:</h4>
                  <div className="project-tech-list">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => onViewProject(project)}
                    className="project-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem', padding: 0 }}
                  >
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-alt">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className={`skills-grid fade-in-section ${isVisible.skills ? 'visible' : ''}`}>
            {skills.map((skillCategory, index) => {
              const IconComponent = skillCategory.icon;
              return (
                <div key={index} className="skill-card">
                  <div className="skill-icon">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="skill-title">{skillCategory.category}</h3>
                  <ul className="skill-list">
                    {skillCategory.items.map((skill, i) => (
                      <li key={i} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title">Work Experience & Leadership</h2>
          <div className={`certifications-grid fade-in-section ${isVisible.experience ? 'visible' : ''}`}>
            {experience.map((exp, index) => (
              <div key={index} className="cert-card">
                <div className="cert-header">
                  <Award size={24} className="cert-icon" />
                  <h3 className="cert-title">{exp.title}</h3>
                </div>
                <p className="cert-detail"><strong>Institution:</strong> {exp.institution}</p>
                <p className="cert-detail"><strong>Date:</strong> {exp.date}</p>
                <p className="cert-achievement">{exp.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-alt">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className={`contact-content fade-in-section ${isVisible.contact ? 'visible' : ''}`}>
            <div className="contact-card">
              <p className="contact-description">
                I'm always open to discussing new opportunities and collaborations.
              </p>
              <div className="contact-grid">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-link contact-email"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="contact-link contact-phone"
                >
                  <Phone size={20} />
                  <span>Phone</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link contact-github"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 {personalInfo.name}.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
