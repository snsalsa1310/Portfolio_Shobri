import React, { useState, useEffect } from 'react';
import Portfolio from './portfolio';
import ProjectDetail from './ProjectDetail';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();

    // Block DevTools shortcuts
    const handleKeyDown = (e) => {
      // F12
      if (e.key === 'F12') { e.preventDefault(); return; }
      // Ctrl+Shift+I / Ctrl+Shift+C / Ctrl+Shift+J
      if (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) { e.preventDefault(); return; }
      // Ctrl+U (view source)
      if (e.ctrlKey && e.key.toUpperCase() === 'U') { e.preventDefault(); return; }
      // Ctrl+S (save page)
      if (e.ctrlKey && e.key.toUpperCase() === 'S') { e.preventDefault(); return; }
      // Ctrl+P (print)
      if (e.ctrlKey && e.key.toUpperCase() === 'P') { e.preventDefault(); return; }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <style>{`
        @media print {
          body * { display: none !important; }
          body::after {
            content: 'Printing is disabled on this website.';
            display: block;
            text-align: center;
            font-size: 2rem;
            padding: 4rem;
            color: #333;
          }
        }
      `}</style>
      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <Portfolio onViewProject={(project) => setSelectedProject(project)} />
      )}
    </>
  );
}

export default App;
