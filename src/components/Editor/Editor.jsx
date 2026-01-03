import { PersonalForm } from './PersonalForm';
import { ExperienceForm } from './ExperienceForm';
import { EducationForm } from './EducationForm';
import { SkillsForm } from './SkillsForm';

export function Editor({
    cv,
    updatePersonal,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    updateSkills
}) {
    return (
        <div className="editor-pane">
            <PersonalForm data={cv.personal} update={updatePersonal} />
            <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />
            <ExperienceForm
                data={cv.experience}
                add={addExperience}
                update={updateExperience}
                remove={removeExperience}
            />
            <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />
            <EducationForm
                data={cv.education}
                add={addEducation}
                update={updateEducation}
                remove={removeEducation}
            />
            <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />
            <SkillsForm data={cv.skills} update={updateSkills} />
        </div>
    );
}
