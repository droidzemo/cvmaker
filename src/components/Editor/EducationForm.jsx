import { IconPlus, IconTrash } from '../Icons';

export function EducationForm({ data, add, update, remove }) {
    return (
        <div className="form-section">
            <h3>Education</h3>
            {data.length === 0 && (
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                    No education added yet. Add your first qualification!
                </p>
            )}
            {data.map((item) => (
                <div key={item.id} className="item-card">
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor={`degree-${item.id}`}>Degree</label>
                            <input
                                id={`degree-${item.id}`}
                                type="text"
                                value={item.degree}
                                onChange={(e) => update(item.id, 'degree', e.target.value)}
                                placeholder="B.S. Computer Science"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`school-${item.id}`}>School</label>
                            <input
                                id={`school-${item.id}`}
                                type="text"
                                value={item.school}
                                onChange={(e) => update(item.id, 'school', e.target.value)}
                                placeholder="University"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`edu-period-${item.id}`}>Period</label>
                            <input
                                id={`edu-period-${item.id}`}
                                type="text"
                                value={item.period}
                                onChange={(e) => update(item.id, 'period', e.target.value)}
                                placeholder="2016 - 2020"
                            />
                        </div>
                    </div>
                    <button
                        className="btn-delete"
                        onClick={() => remove(item.id)}
                        aria-label={`Remove education: ${item.degree} from ${item.school}`}
                    >
                        <IconTrash /> Remove
                    </button>
                </div>
            ))}
            <button className="btn-add" onClick={add}>
                <IconPlus /> {data.length === 0 ? 'Add your first education' : 'Add Education'}
            </button>
        </div>
    );
}
