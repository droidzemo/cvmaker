import { useRef, useState, useEffect, useCallback } from 'react';
import { TemplateStandard } from './TemplateStandard';
import { TemplateModern } from './TemplateModern';
import { TemplateMinimal } from './TemplateMinimal';

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
    const timerRef = useRef(null);
    const [showToolbar, setShowToolbar] = useState(true);
    const [notification, setNotification] = useState(null);

    const showMessage = useCallback((msg) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setNotification(msg);
        timerRef.current = setTimeout(() => {
            setNotification(null);
            timerRef.current = null;
        }, 3000);
    }, []);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const handlePrint = () => {
        if (!cv.personal.fullName) {
            showMessage("Please enter your name before printing.");
            return;
        }
        window.print();
    };

    const handleExport = useCallback(() => {
        if (!cv.personal.fullName) {
            showMessage("Please enter your name before exporting.");
            return;
        }
        exportCV();
        showMessage("JSON Exported successfully!");
    }, [cv.personal.fullName, exportCV, showMessage]);

    const handleImportClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            importCV(file);
            showMessage("CV Data Imported!");
            e.target.value = ''; // Reset input
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                handleExport();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleExport]);

    const handleCreateProfile = () => {
        const name = prompt("Enter profile name:");
        if (name) createProfile(name);
    };

    const TemplateMap = {
        standard: TemplateStandard,
        modern: TemplateModern,
        minimal: TemplateMinimal
    };

    const ActiveComponent = TemplateMap[cv.activeTemplate || 'standard'];

    return (
        <div className="preview-pane">
            {notification && (
                <div className="notification-toast">
                    {notification}
                </div>
            )}
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
                            aria-label="Create new profile"
                        >+</button>
                        {profiles.length > 1 && (
                            <button
                                className="btn-icon btn-danger"
                                onClick={() => deleteProfile(activeProfileId)}
                                title="Delete Profile"
                                aria-label="Delete current profile"
                            >×</button>
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
                        </select>
                    </div>
                </div>

                <div className="toolbar-group">
                    <label className="toolbar-label">Actions</label>
                    <div className="action-buttons">
                        <div className="button-row">
                            <button
                                className="btn-sm"
                                onClick={handleExport}
                                title="Download your CV data as a JSON file"
                            >
                                Export JSON
                            </button>
                            <button
                                className="btn-sm"
                                onClick={handleImportClick}
                                title="Import CV data from a JSON file"
                            >
                                Import JSON
                            </button>
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
                <ActiveComponent key={cv.activeTemplate || 'standard'} data={cv} />
            </div>
        </div>
    );
}
