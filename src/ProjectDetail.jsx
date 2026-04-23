import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Cpu, Sparkles, Images, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { personalInfo } from './data';

const ProjectDetail = ({ project, onBack }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1));
  const nextImage = () => setLightboxIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0));

  return (
    <div className="portfolio">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #0f172a;
          color: #ffffff;
          line-height: 1.6;
        }

        /* Navigation */
        .pd-nav {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid #334155;
          padding: 1rem 0;
        }

        .pd-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pd-logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
        }

        .pd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 1rem;
          font-family: inherit;
          transition: color 0.2s;
          padding: 0.5rem;
        }

        .pd-back-btn:hover {
          color: #60a5fa;
        }

        /* Hero */
        .pd-hero {
          padding-top: 6rem;
          padding-bottom: 4rem;
          position: relative;
          overflow: hidden;
        }

        .pd-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1));
          z-index: 0;
        }

        .pd-hero-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pd-hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #60a5fa, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pd-hero-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #94a3b8;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .pd-hero-description {
          font-size: 1.15rem;
          color: #cbd5e1;
          line-height: 1.8;
          max-width: 800px;
        }

        /* Content sections */
        .pd-section {
          padding: 4rem 0;
        }

        .pd-section-alt {
          background-color: #1e293b;
        }

        .pd-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
        }

        .pd-section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .pd-section-title-icon {
          color: #60a5fa;
          flex-shrink: 0;
        }

        /* Info cards grid */
        .pd-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .pd-info-card {
          background-color: #374151;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
        }

        .pd-info-card:hover {
          background-color: #4b5563;
          transform: translateY(-3px);
        }

        .pd-info-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #60a5fa;
        }

        .pd-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pd-tech-tag {
          padding: 0.25rem 0.75rem;
          background-color: #2563eb;
          color: white;
          font-size: 0.875rem;
          border-radius: 9999px;
        }

        .pd-highlight-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pd-highlight-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          color: #d1d5db;
        }

        .pd-highlight-dot {
          width: 6px;
          height: 6px;
          background-color: #60a5fa;
          border-radius: 50%;
          margin-right: 0.75rem;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        /* Gallery */
        .pd-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .pd-gallery-item {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
          background-color: #1e293b;
        }

        .pd-gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(96, 165, 250, 0.15);
        }

        .pd-gallery-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }

        .pd-gallery-item:hover .pd-gallery-img {
          transform: scale(1.05);
        }

        .pd-gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.6), transparent);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 1rem;
        }

        .pd-gallery-item:hover .pd-gallery-overlay {
          opacity: 1;
        }

        .pd-gallery-overlay span {
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
        }

        /* Lightbox */
        .pd-lightbox {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .pd-lightbox-img {
          max-width: 90vw;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 0.5rem;
        }

        .pd-lightbox-btn {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.75rem;
          border-radius: 50%;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pd-lightbox-btn:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .pd-lightbox-close {
          top: 1.5rem;
          right: 1.5rem;
        }

        .pd-lightbox-prev {
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .pd-lightbox-next {
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .pd-lightbox-counter {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: #94a3b8;
          font-size: 0.9rem;
        }

        /* Footer */
        .pd-footer {
          padding: 2rem 0;
          background-color: #0f172a;
          border-top: 1px solid #334155;
          text-align: center;
          color: #94a3b8;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .pd-hero-title {
            font-size: 2.25rem;
          }

          .pd-info-grid {
            grid-template-columns: 1fr;
          }

          .pd-gallery-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .pd-hero-title {
            font-size: 1.75rem;
          }

          .pd-container {
            padding: 0 1rem;
          }

          .pd-logo {
            font-size: 1.2rem;
          }

          .pd-gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Navigation — matches main page */}
      <nav className="pd-nav">
        <div className="pd-nav-container">
          <div className="pd-logo" onClick={onBack}>
            {personalInfo.name}
          </div>
          <button onClick={onBack} className="pd-back-btn">
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </nav>

      {/* Hero Section — matches main hero style */}
      <section className="pd-hero">
        <div className="pd-hero-bg"></div>
        <div className="pd-hero-content">
          <h1 className="pd-hero-title">{project.title}</h1>
          <div className="pd-hero-meta">
            <Calendar size={18} />
            <span>{project.year}</span>
          </div>
          <p className="pd-hero-description">{project.description}</p>
        </div>
      </section>

      {/* Technologies & Highlights — uses same card style as Skills/About */}
      <section className="pd-section pd-section-alt">
        <div className="pd-container">
          <div className="pd-info-grid">
            {project.technologies && project.technologies.length > 0 && (
              <div className="pd-info-card">
                <h3 className="pd-info-card-title">
                  <Cpu size={18} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  Technologies Used
                </h3>
                <div className="pd-tech-list">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="pd-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <div className="pd-info-card">
                <h3 className="pd-info-card-title">
                  <Sparkles size={18} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  Key Highlights
                </h3>
                <ul className="pd-highlight-list">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="pd-highlight-item">
                      <span className="pd-highlight-dot"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.images && project.images.length > 0 && (
        <section className="pd-section">
          <div className="pd-container">
            <h2 className="pd-section-title">
              <Images size={28} className="pd-section-title-icon" />
              Project Gallery
            </h2>
            <div className="pd-gallery-grid">
              {project.images.map((imgSrc, i) => (
                <div key={i} className="pd-gallery-item" onClick={() => openLightbox(i)}>
                  <img
                    src={imgSrc}
                    alt={`${project.title} - Image ${i + 1}`}
                    className="pd-gallery-img"
                  />
                  <div className="pd-gallery-overlay">
                    <span>Click to enlarge</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && project.images && (
        <div className="pd-lightbox" onClick={closeLightbox}>
          <button className="pd-lightbox-btn pd-lightbox-close" onClick={closeLightbox}>
            <X size={24} />
          </button>
          <button className="pd-lightbox-btn pd-lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <ChevronLeft size={28} />
          </button>
          <img
            src={project.images[lightboxIndex]}
            alt={`${project.title} - Image ${lightboxIndex + 1}`}
            className="pd-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="pd-lightbox-btn pd-lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <ChevronRight size={28} />
          </button>
          <div className="pd-lightbox-counter">
            {lightboxIndex + 1} / {project.images.length}
          </div>
        </div>
      )}

      {/* Footer — matches main page */}
      <footer className="pd-footer">
        <div className="pd-container">
          <p>© 2025 {personalInfo.name}. Built with React.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
