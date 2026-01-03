import { useState, useEffect } from 'react';
import { initialCV } from '../utils/initialData';

export function useCVData() {
    const [cv, setCV] = useState(() => {
        const saved = localStorage.getItem('leancv-data');
        return saved ? JSON.parse(saved) : initialCV;
    });

    useEffect(() => {
        localStorage.setItem('leancv-data', JSON.stringify(cv));
    }, [cv]);

    const updatePersonal = (field, value) => {
        setCV(prev => ({
            ...prev,
            personal: { ...prev.personal, [field]: value }
        }));
    };

    const addExperience = () => {
        setCV(prev => ({
            ...prev,
            experience: [
                ...prev.experience,
                { id: crypto.randomUUID(), role: 'New Role', company: 'New Company', period: 'Period', description: 'Description' }
            ]
        }));
    };

    const updateExperience = (id, field, value) => {
        setCV(prev => ({
            ...prev,
            experience: prev.experience.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    };

    const removeExperience = (id) => {
        setCV(prev => ({
            ...prev,
            experience: prev.experience.filter(item => item.id !== id)
        }));
    };

    const addEducation = () => {
        setCV(prev => ({
            ...prev,
            education: [
                ...prev.education,
                { id: crypto.randomUUID(), degree: 'New Degree', school: 'New School', period: 'Period' }
            ]
        }));
    };

    const updateEducation = (id, field, value) => {
        setCV(prev => ({
            ...prev,
            education: prev.education.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    };

    const removeEducation = (id) => {
        setCV(prev => ({
            ...prev,
            education: prev.education.filter(item => item.id !== id)
        }));
    };

    const updateSkills = (value) => {
        // Value could be comma separated string or array? 
        // For simplicity in form, let's assume valid array or handle it
        setCV(prev => ({
            ...prev,
            skills: value
        }));
    };

    return {
        cv,
        updatePersonal,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        updateSkills,
        resetData: () => setCV(initialCV)
    };
}
