export function PersonalForm({ data, update }) {
    const handleChange = (e) => {
        update(e.target.name, e.target.value);
    };

    return (
        <div className="form-section">
            <h3>Personal Details</h3>
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={data.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Job Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        placeholder="e.g. Software Engineer"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={data.location}
                        onChange={handleChange}
                        placeholder="New York, USA"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        value={data.website}
                        onChange={handleChange}
                        placeholder="johndoe.com"
                    />
                </div>
                <div className="form-group full-width">
                    <label htmlFor="summary">Professional Summary</label>
                    <textarea
                        id="summary"
                        name="summary"
                        value={data.summary}
                        onChange={handleChange}
                        placeholder="Short bio..."
                        rows={4}
                    />
                </div>
            </div>
        </div>
    );
}
