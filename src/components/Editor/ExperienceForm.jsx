import { IconPlus, IconTrash } from '../Icons';

export function ExperienceForm({ data, add, update, remove }) {
    return (
        <div className="form-section">
            <h3>Experience</h3>
            {data.length === 0 && (
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                    No experience added yet. Add your first role to get started!
                </p>
            )}
            {data.map((item) => (
                <div key={item.id} className="item-card">
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor={`role-${item.id}`}>Role</label>
                            <input
                                id={`role-${item.id}`}
                                type="text"
                                value={item.role}
                                onChange={(e) => update(item.id, 'role', e.target.value)}
                                placeholder="Software Engineer"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`company-${item.id}`}>Company</label>
                            <input
                                id={`company-${item.id}`}
                                type="text"
                                value={item.company}
                                onChange={(e) => update(item.id, 'company', e.target.value)}
                                placeholder="Google"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`period-${item.id}`}>Period</label>
                            <input
                                id={`period-${item.id}`}
                                type="text"
                                value={item.period}
                                onChange={(e) => update(item.id, 'period', e.target.value)}
                                placeholder="Jan 2020 - Present"
                            />
                        </div>
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor={`desc-${item.id}`}>Description</label>
                        <textarea
                            id={`desc-${item.id}`}
                            value={item.description}
                            onChange={(e) => update(item.id, 'description', e.target.value)}
                            placeholder="Responsibilities..."
                            rows={3}
                        />
                    </div>
                    <button
                        className="btn-delete"
                        onClick={() => remove(item.id)}
                        aria-label={`Remove experience: ${item.role} at ${item.company}`}
                    >
                        <IconTrash /> Remove
                    </button>
                </div>
            ))}
            <button className="btn-add" onClick={add}>
                <IconPlus /> {data.length === 0 ? 'Add your first role' : 'Add Experience'}
            </button>
        </div>
    );
}
