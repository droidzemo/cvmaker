export function SkillsForm({ data, update }) {
    const handleChange = (e) => {
        // Split by comma and trim
        const skillsArray = e.target.value.split(',').map(s => s.trim());
        // Or just store the string if we want strict control?
        // Let's pass the raw array back, or we handle string conversion here
        // But data is array. We need to convert array to string for input
    };

    // Better approach: User types in textarea separated by commas
    const handleStringChange = (e) => {
        const val = e.target.value;
        // We update the parent with the array derived from this string
        const arr = val ? val.split(',').map(s => s) : []; // Keep spaces? Trim on render normally
        // Let's actually trim immediately but keep empty strings for typing flow?
        // No, better to update simply.
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
                    onChange={(e) => update(e.target.value.split(','))}
                    placeholder="React, JavaScript, CSS, HTML"
                    rows={3}
                />
                <small>Separate skills with commas</small>
            </div>
        </div>
    );
}
