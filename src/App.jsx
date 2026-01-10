import { useCVData } from './hooks/useCVData';
import { Editor } from './components/Editor/Editor';
import { CVPreview } from './components/Preview/CVPreview';
import { SplitPane } from './components/Layout/SplitPane';
import { useState, useEffect } from 'react';
import './index.css';
import './template.css'; // We will create this for specific template styles

function App() {
  const {
    cv,
    updatePersonal,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    updateSkills,
    setTemplate,
    profiles,
    activeProfileId,
    createProfile,
    switchProfile,
    deleteProfile,
    exportCV,
    importCV
  } = useCVData();

  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Apply theme effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h1>CV Maker</h1>
          <button
            onClick={toggleTheme}
            className="btn-sm"
            style={{
              fontSize: '1.2rem',
              padding: '0.25rem 0.5rem',
              borderRadius: '2rem',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg)',
              cursor: 'pointer'
            }}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        <a href="https://github.com/yourusername/leancv" target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem', color: 'var(--color-primary)' }}>GitHub</a>
      </header>
      <SplitPane>
        <Editor
          cv={cv}
          updatePersonal={updatePersonal}
          addExperience={addExperience}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
          addEducation={addEducation}
          updateEducation={updateEducation}
          removeEducation={removeEducation}
          updateSkills={updateSkills}
        />
        <CVPreview
          cv={cv}
          setTemplate={setTemplate}
          profiles={profiles}
          activeProfileId={activeProfileId}
          createProfile={createProfile}
          switchProfile={switchProfile}
          deleteProfile={deleteProfile}
          exportCV={exportCV}
          importCV={importCV}
        />
      </SplitPane>
    </div>
  )
}

export default App

