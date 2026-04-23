import React, { useState } from 'react';
import Portfolio from './portfolio';
import ProjectDetail from './ProjectDetail';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
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
