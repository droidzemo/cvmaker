export function SkillsForm({ data, update }) {
    const handleStringChange = (e) => {
        const val = e.target.value;
        // We update the parent with the array derived from this string
        const arr = val ? val.split(',').map(s => s) : [];
        update(arr);
    };

    const skillsString = data.join(', ');

    return (
        <div className="form-section">
            <h3>Skills</h3>
            <div className="form-group">
                <label htmlFor="skills">Skills (comma separated)</label>
                <textarea
                    id="skills"
                    value={skillsString}
                    onChange={handleStringChange}
                    placeholder="React, JavaScript, CSS, HTML"
                    rows={3}
                />
                <small>Separate skills with commas</small>
            </div>
        </div>
    );
}
