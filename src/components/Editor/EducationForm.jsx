import { memo } from 'react';
import { IconPlus, IconTrash } from '../Icons';

export const EducationForm = memo(function EducationForm({ data, add, update, remove }) {
    return (
        <div className="form-section">
            <h3>Education</h3>
            {data.map((item) => (
                <div key={item.id} className="item-card">
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Degree</label>
                            <input
                                type="text"
                                value={item.degree}
                                onChange={(e) => update(item.id, 'degree', e.target.value)}
                                placeholder="B.S. Computer Science"
                            />
                        </div>
                        <div className="form-group">
                            <label>School</label>
                            <input
                                type="text"
                                value={item.school}
                                onChange={(e) => update(item.id, 'school', e.target.value)}
                                placeholder="University"
                            />
                        </div>
                        <div className="form-group">
                            <label>Period</label>
                            <input
                                type="text"
                                value={item.period}
                                onChange={(e) => update(item.id, 'period', e.target.value)}
                                placeholder="2016 - 2020"
                            />
                        </div>
                    </div>
                    <button className="btn-delete" onClick={() => remove(item.id)}>
                        <IconTrash /> Remove
                    </button>
                </div>
            ))}
            <button className="btn-add" onClick={add}>
                <IconPlus /> Add Education
            </button>
        </div>
    );
});
