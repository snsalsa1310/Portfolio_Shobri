import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './portfolio';
import ProjectDetail from './ProjectDetail';

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      if (e.key === 'F12') { e.preventDefault(); return; }
      if (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) { e.preventDefault(); return; }
      if (e.ctrlKey && e.key.toUpperCase() === 'U') { e.preventDefault(); return; }
      if (e.ctrlKey && e.key.toUpperCase() === 'S') { e.preventDefault(); return; }
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
    <BrowserRouter>
      <style>{`
        @media print {
          body * { display: none !important; }
          body::after {
            content: 'Printing disabled.';
            display: block;
            text-align: center;
            font-size: 2rem;
            padding: 4rem;
            color: #333;
          }
        }
      `}</style>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
