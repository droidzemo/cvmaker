import { useRef, useState } from 'react';
import { TemplateStandard } from './TemplateStandard';
import { TemplateModern } from './TemplateModern';
import { TemplateMinimal } from './TemplateMinimal';
import { TemplateElegant } from './TemplateElegant';
import { TemplateTech } from './TemplateTech';
import { TemplateSidebar } from './TemplateSidebar';

const TemplateMap = {
    standard: TemplateStandard,
    modern: TemplateModern,
    minimal: TemplateMinimal,
    elegant: TemplateElegant,
    tech: TemplateTech,
    sidebar: TemplateSidebar
};

export function CVPreview({
    cv,
    setTemplate,
    profiles,
    activeProfileId,
    createProfile,
    switchProfile,
    deleteProfile,
    exportCV,
    importCV
}) {
    const fileInputRef = useRef(null);
    const [showToolbar, setShowToolbar] = useState(true);

    const handlePrint = () => {
        window.print();
    };

    const handleImportClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            importCV(e.target.files[0]);
        }
    };

    const handleCreateProfile = () => {
        const name = prompt("Enter profile name:");
        if (name) createProfile(name);
    };

    const ActiveComponent = TemplateMap[cv.activeTemplate || 'standard'];

    return (
        <div className="preview-pane">
            <button
                className={`toolbar-toggle ${!showToolbar ? 'collapsed' : ''}`}
                onClick={() => setShowToolbar(!showToolbar)}
                title={showToolbar ? "Hide Toolbar" : "Show Toolbar"}
                aria-label={showToolbar ? "Hide Toolbar" : "Show Toolbar"}
            >
                {showToolbar ? '→' : '⚙'}
            </button>
            <div className={`preview-toolbar ${!showToolbar ? 'hidden' : ''}`}>
                <div className="toolbar-group">
                    <label className="toolbar-label">CV Profile</label>
                    <div className="toolbar-section">
                        <select
                            className="toolbar-select"
                            value={activeProfileId}
                            onChange={(e) => switchProfile(e.target.value)}
                        >
                            {profiles.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                        <button
                            className="btn-icon"
                            onClick={handleCreateProfile}
                            title="New Profile"
                            aria-label="New Profile"
                        >
                            +
                        </button>
                        {profiles.length > 1 && (
                            <button
                                className="btn-icon btn-danger"
                                onClick={() => deleteProfile(activeProfileId)}
                                title="Delete Profile"
                                aria-label="Delete Profile"
                            >
                                ×
                            </button>
                        )}
                    </div>
                </div>

                <div className="toolbar-group">
                    <label className="toolbar-label">Template</label>
                    <div className="toolbar-section">
                        <select
                            className="toolbar-select"
                            value={cv.activeTemplate || 'standard'}
                            onChange={(e) => setTemplate(e.target.value)}
                        >
                            <option value="standard">Standard</option>
                            <option value="modern">Modern</option>
                            <option value="minimal">Minimal</option>
                            <option value="elegant">Elegant</option>
                            <option value="tech">Tech</option>
                            <option value="sidebar">Sidebar</option>
                        </select>
                    </div>
                </div>

                <div className="toolbar-group">
                    <label className="toolbar-label">Actions</label>
                    <div className="action-buttons">
                        <div className="button-row">
                            <button className="btn-sm" onClick={exportCV}>Export JSON</button>
                            <button className="btn-sm" onClick={handleImportClick}>Import JSON</button>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            accept=".json"
                            onChange={handleFileChange}
                        />
                        <button className="btn-primary" onClick={handlePrint}>Download PDF</button>
                    </div>
                </div>
            </div>
            <div className="cv-container">
                <ActiveComponent data={cv} />
            </div>
        </div>
    );
}
