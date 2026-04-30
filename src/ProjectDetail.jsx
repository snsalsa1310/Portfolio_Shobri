import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Cpu, Sparkles, Images, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { personalInfo } from './data';

const ProjectDetail = ({ project, onBack }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  // Flatten images for the lightbox so we can navigate seamlessly
  const flatImages = project.imageCategories
    ? project.imageCategories.flatMap(category =>
      category.groups.flatMap(group => group.images)
    )
    : (project.images || []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : flatImages.length - 1));
  const nextImage = () => setLightboxIndex((prev) => (prev < flatImages.length - 1 ? prev + 1 : 0));

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
          background-color: #1a1a1a;
          color: #ffffff;
          line-height: 1.6;
        }

        /* Navigation */
        .pd-nav {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid #404040;
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
          background: #f97316;
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
          color: #a0a0a0;
          cursor: pointer;
          font-size: 1rem;
          font-family: inherit;
          transition: color 0.2s;
          padding: 0.5rem;
        }

        .pd-back-btn:hover {
          color: #f97316;
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
          background: linear-gradient(135deg, rgba(30, 58, 95, 0.1), rgba(249, 115, 22, 0.1));
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
          background: #f97316;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pd-hero-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #a0a0a0;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .pd-hero-description {
          font-size: 1.15rem;
          color: #d4d4d4;
          line-height: 1.8;
          max-width: 800px;
        }

        /* Content sections */
        .pd-section {
          padding: 4rem 0;
        }

        .pd-section-alt {
          background-color: #242424;
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
          background: #f97316;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .pd-section-title-icon {
          color: #f97316;
          flex-shrink: 0;
        }

        /* Info cards grid */
        .pd-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .pd-info-card {
          background-color: #2d2d2d;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.3s;
        }

        .pd-info-card:hover {
          background-color: #383838;
          transform: translateY(-3px);
        }

        .pd-info-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #f97316;
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
          background-color: #f97316;
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
          margin-bottom: 2rem;
        }

        .pd-category-block {
          margin-bottom: 4rem;
        }

        .pd-category-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #404040;
        }

        .pd-group-block {
          margin-bottom: 2rem;
        }

        .pd-group-title {
          font-size: 1.25rem;
          font-weight: 500;
          color: #a0a0a0;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pd-gallery-item {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
          background-color: #242424;
        }

        .pd-gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(249, 115, 22, 0.15);
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

        .pd-gallery-item::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='80'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' transform='rotate(-30, 75, 40)' font-family='Segoe UI, sans-serif' font-size='12' font-weight='700' fill='rgba(0,0,0,0.15)' letter-spacing='2'%3EMUHAMMAD SHOBRI%3C/text%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 150px 80px;
        }

        .pd-lightbox-watermark {
          position: absolute;
          inset: 0;
          z-index: 2001;
          pointer-events: none;
          user-select: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='130'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' transform='rotate(-30, 125, 65)' font-family='Segoe UI, sans-serif' font-size='18' font-weight='700' fill='rgba(0,0,0,0.12)' letter-spacing='3'%3EMUHAMMAD SHOBRI%3C/text%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 250px 130px;
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
          color: #a0a0a0;
          font-size: 0.9rem;
        }

        /* Footer */
        .pd-footer {
          padding: 2rem 0;
          background-color: #1a1a1a;
          border-top: 1px solid #404040;
          text-align: center;
          color: #a0a0a0;
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
                      {typeof highlight === 'object' && highlight.link ? (
                        <a href={highlight.link} target="_blank" rel="noopener noreferrer" style={{ color: '#f97316', textDecoration: 'none' }}>
                          {highlight.text}
                        </a>
                      ) : (
                        typeof highlight === 'object' ? highlight.text : highlight
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {flatImages.length > 0 && (
        <section className="pd-section">
          <div className="pd-container">
            <h2 className="pd-section-title">
              <Images size={28} className="pd-section-title-icon" />
              Project Gallery
            </h2>

            {project.imageCategories ? (
              // Nested rendering for categorized images
              project.imageCategories.map((category, cIdx) => (
                <div key={cIdx} className="pd-category-block">
                  {category.name && (
                    <h3 className="pd-category-title">{category.name}</h3>
                  )}
                  {category.groups.map((group, gIdx) => (
                    <div key={gIdx} className="pd-group-block">
                      <h4 className="pd-group-title">
                        <span style={{ color: '#f97316' }}>→</span> {group.type}
                      </h4>
                      <div className="pd-gallery-grid">
                        {group.images.map((imgSrc, i) => {
                          const globalIndex = flatImages.indexOf(imgSrc);
                          return (
                            <div key={i} className="pd-gallery-item" onClick={() => openLightbox(globalIndex)}>
                              <img
                                src={imgSrc}
                                alt={`${project.title} - ${group.type} ${i + 1}`}
                                className="pd-gallery-img"
                              />
                              <div className="pd-gallery-overlay">
                                <span>Click to enlarge</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              // Fallback for legacy flat array
              <div className="pd-gallery-grid">
                {flatImages.map((imgSrc, i) => (
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
            )}
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && flatImages.length > 0 && (
        <div className="pd-lightbox" onClick={closeLightbox}>
          <button className="pd-lightbox-btn pd-lightbox-close" onClick={closeLightbox}>
            <X size={24} />
          </button>
          <button className="pd-lightbox-btn pd-lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <ChevronLeft size={28} />
          </button>
          <img
            src={flatImages[lightboxIndex]}
            alt={`${project.title} - Image ${lightboxIndex + 1}`}
            className="pd-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="pd-lightbox-watermark" />
          <button className="pd-lightbox-btn pd-lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <ChevronRight size={28} />
          </button>
          <div className="pd-lightbox-counter">
            {lightboxIndex + 1} / {flatImages.length}
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
