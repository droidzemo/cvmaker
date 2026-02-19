import { useState, useEffect, useCallback, useMemo } from 'react';
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

    const cv = useMemo(() => {
        const activeProfile = state.profiles.find(p => p.id === state.activeProfileId) || state.profiles[0];
        return activeProfile.cv;
    }, [state.profiles, state.activeProfileId]);

    const updateCV = useCallback((updater) => {
        setState(prev => ({
            ...prev,
            profiles: prev.profiles.map(p =>
                p.id === prev.activeProfileId ? { ...p, cv: updater(p.cv) } : p
            )
        }));
    }, []);

    const updatePersonal = useCallback((field, value) => {
        updateCV(prevCV => ({
            ...prevCV,
            personal: { ...prevCV.personal, [field]: value }
        }));
    }, [updateCV]);

    const addExperience = useCallback(() => {
        updateCV(prevCV => ({
            ...prevCV,
            experience: [
                ...prevCV.experience,
                { id: crypto.randomUUID(), role: 'New Role', company: 'New Company', period: 'Period', description: 'Description' }
            ]
        }));
    }, [updateCV]);

    const updateExperience = useCallback((id, field, value) => {
        updateCV(prevCV => ({
            ...prevCV,
            experience: prevCV.experience.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    }, [updateCV]);

    const removeExperience = useCallback((id) => {
        updateCV(prevCV => ({
            ...prevCV,
            experience: prevCV.experience.filter(item => item.id !== id)
        }));
    }, [updateCV]);

    const addEducation = useCallback(() => {
        updateCV(prevCV => ({
            ...prevCV,
            education: [
                ...prevCV.education,
                { id: crypto.randomUUID(), degree: 'New Degree', school: 'New School', period: 'Period' }
            ]
        }));
    }, [updateCV]);

    const updateEducation = useCallback((id, field, value) => {
        updateCV(prevCV => ({
            ...prevCV,
            education: prevCV.education.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    }, [updateCV]);

    const removeEducation = useCallback((id) => {
        updateCV(prevCV => ({
            ...prevCV,
            education: prevCV.education.filter(item => item.id !== id)
        }));
    }, [updateCV]);

    const updateSkills = useCallback((value) => {
        updateCV(prevCV => ({
            ...prevCV,
            skills: value
        }));
    }, [updateCV]);

    const setTemplate = useCallback((t) => {
        updateCV(prevCV => ({ ...prevCV, activeTemplate: t }));
    }, [updateCV]);

    const createProfile = useCallback((name) => {
        const newId = crypto.randomUUID();
        setState(prev => ({
            ...prev,
            activeProfileId: newId,
            profiles: [...prev.profiles, { id: newId, name: name || 'New Profile', cv: initialCV }]
        }));
    }, []);

    const switchProfile = useCallback((id) => {
        setState(prev => ({ ...prev, activeProfileId: id }));
    }, []);

    const deleteProfile = useCallback((id) => {
        setState(prev => {
            if (prev.profiles.length <= 1) return prev;
            const newProfiles = prev.profiles.filter(p => p.id !== id);
            return {
                ...prev,
                profiles: newProfiles,
                activeProfileId: prev.activeProfileId === id ? newProfiles[0].id : prev.activeProfileId
            };
        });
    }, []);

    const exportCV = useCallback(() => {
        const dataStr = JSON.stringify(cv, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileDefaultName = `${cv.personal.fullName || 'cv'}-data.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }, [cv]);

    const importCV = useCallback((file) => {
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
    }, [updateCV]);

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
        resetData: useCallback(() => updateCV(() => initialCV), [updateCV])
    };
}
