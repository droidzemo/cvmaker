import { useCVData } from './hooks/useCVData';
import { Editor } from './components/Editor/Editor';
import { CVPreview } from './components/Preview/CVPreview';
import { SplitPane } from './components/Layout/SplitPane';
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

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Maker</h1>
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

