import { memo } from 'react';
import { IconPlus, IconTrash } from '../Icons';

export const ExperienceForm = memo(function ExperienceForm({ data, add, update, remove }) {
    return (
        <div className="form-section">
            <h3>Experience</h3>
            {data.map((item) => (
                <div key={item.id} className="item-card">
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Role</label>
                            <input
                                type="text"
                                value={item.role}
                                onChange={(e) => update(item.id, 'role', e.target.value)}
                                placeholder="Software Engineer"
                            />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input
                                type="text"
                                value={item.company}
                                onChange={(e) => update(item.id, 'company', e.target.value)}
                                placeholder="Google"
                            />
                        </div>
                        <div className="form-group">
                            <label>Period</label>
                            <input
                                type="text"
                                value={item.period}
                                onChange={(e) => update(item.id, 'period', e.target.value)}
                                placeholder="Jan 2020 - Present"
                            />
                        </div>
                    </div>
                    <div className="form-group full-width">
                        <label>Description</label>
                        <textarea
                            value={item.description}
                            onChange={(e) => update(item.id, 'description', e.target.value)}
                            placeholder="Responsibilities..."
                            rows={3}
                        />
                    </div>
                    <button className="btn-delete" onClick={() => remove(item.id)}>
                        <IconTrash /> Remove
                    </button>
                </div>
            ))}
            <button className="btn-add" onClick={add}>
                <IconPlus /> Add Experience
            </button>
        </div>
    );
});
