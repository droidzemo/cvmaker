export function SkillsForm({ data, update }) {
    const skillsString = data.join(', ');

    return (
        <div className="form-section">
            <h3>Skills</h3>
            <div className="form-group">
                <label htmlFor="skills">Skills (comma separated)</label>
                <textarea
                    id="skills"
                    value={skillsString}
                    onChange={(e) => update(e.target.value.split(','))}
                    placeholder="React, JavaScript, CSS, HTML"
                    rows={3}
                />
                <small>Separate skills with commas</small>
            </div>
        </div>
    );
}
