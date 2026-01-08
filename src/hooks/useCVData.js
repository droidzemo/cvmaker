import { useState, useEffect } from 'react';
import { initialCV } from '../utils/initialData';

const STORAGE_KEY = 'leancv-data-v2';
const LEGACY_STORAGE_KEY = 'leancv-data';

export function useCVData() {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);

        // Migration from v1
        const legacySaved = localStorage.getItem(LEGACY_STORAGE_KEY);
        const legacyData = legacySaved ? JSON.parse(legacySaved) : initialCV;

        return {
            activeProfileId: 'default',
            profiles: [
                { id: 'default', name: 'Default Profile', cv: legacyData }
            ]
        };
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    const activeProfile = state.profiles.find(p => p.id === state.activeProfileId) || state.profiles[0];
    const cv = activeProfile.cv;

    const updateCV = (updater) => {
        setState(prev => ({
            ...prev,
            profiles: prev.profiles.map(p =>
                p.id === prev.activeProfileId ? { ...p, cv: updater(p.cv) } : p
            )
        }));
    };

    const updatePersonal = (field, value) => {
        updateCV(prevCV => ({
            ...prevCV,
            personal: { ...prevCV.personal, [field]: value }
        }));
    };

    const addExperience = () => {
        updateCV(prevCV => ({
            ...prevCV,
            experience: [
                ...prevCV.experience,
                { id: crypto.randomUUID(), role: 'New Role', company: 'New Company', period: 'Period', description: 'Description' }
            ]
        }));
    };

    const updateExperience = (id, field, value) => {
        updateCV(prevCV => ({
            ...prevCV,
            experience: prevCV.experience.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    };

    const removeExperience = (id) => {
        updateCV(prevCV => ({
            ...prevCV,
            experience: prevCV.experience.filter(item => item.id !== id)
        }));
    };

    const addEducation = () => {
        updateCV(prevCV => ({
            ...prevCV,
            education: [
                ...prevCV.education,
                { id: crypto.randomUUID(), degree: 'New Degree', school: 'New School', period: 'Period' }
            ]
        }));
    };

    const updateEducation = (id, field, value) => {
        updateCV(prevCV => ({
            ...prevCV,
            education: prevCV.education.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    };

    const removeEducation = (id) => {
        updateCV(prevCV => ({
            ...prevCV,
            education: prevCV.education.filter(item => item.id !== id)
        }));
    };

    const updateSkills = (value) => {
        updateCV(prevCV => ({
            ...prevCV,
            skills: value
        }));
    };

    const setTemplate = (t) => {
        updateCV(prevCV => ({ ...prevCV, activeTemplate: t }));
    };

    const createProfile = (name) => {
        const newId = crypto.randomUUID();
        setState(prev => ({
            ...prev,
            activeProfileId: newId,
            profiles: [...prev.profiles, { id: newId, name: name || 'New Profile', cv: initialCV }]
        }));
    };

    const switchProfile = (id) => {
        setState(prev => ({ ...prev, activeProfileId: id }));
    };

    const deleteProfile = (id) => {
        if (state.profiles.length <= 1) return;
        setState(prev => {
            const newProfiles = prev.profiles.filter(p => p.id !== id);
            return {
                ...prev,
                profiles: newProfiles,
                activeProfileId: prev.activeProfileId === id ? newProfiles[0].id : prev.activeProfileId
            };
        });
    };

    const exportCV = () => {
        const dataStr = JSON.stringify(cv, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileDefaultName = `${cv.personal.fullName || 'cv'}-data.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    const importCV = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                updateCV(() => importedData);
            } catch (err) {
                console.error("Failed to import CV:", err);
                alert("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    };

    return {
        cv,
        profiles: state.profiles,
        activeProfileId: state.activeProfileId,
        updatePersonal,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        updateSkills,
        setTemplate,
        createProfile,
        switchProfile,
        deleteProfile,
        exportCV,
        importCV,
        resetData: () => updateCV(() => initialCV)
    };
}
