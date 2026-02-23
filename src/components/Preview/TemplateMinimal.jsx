import { memo } from 'react';
import { IconMail, IconPhone, IconMapPin, IconGlobe } from '../Icons';

export const TemplateMinimal = memo(function TemplateMinimal({ data }) {
    const { personal, experience, education, skills } = data;

    return (
        <div className="cv-document minimal-template">
            {/* Centered Header */}
            <header className="minimal-header">
                <h1 className="minimal-name">{personal.fullName}</h1>
                <p className="minimal-title">{personal.title}</p>

                <div className="minimal-contact-info">
                    {personal.email && <span>{personal.email}</span>}
                    {personal.phone && <span>{personal.phone}</span>}
                    {personal.location && <span>{personal.location}</span>}
                    {personal.website && <span>{personal.website}</span>}
                </div>

                {personal.summary && (
                    <div className="minimal-summary">
                        <p>{personal.summary}</p>
                    </div>
                )}
            </header>

            <div className="minimal-body">
                {experience.length > 0 && (
                    <section className="minimal-section">
                        <h2 className="minimal-section-title">Experience</h2>
                        {experience.map(item => (
                            <div key={item.id} className="minimal-item">
                                <div className="minimal-item-top">
                                    <h3 className="item-role">{item.role}</h3>
                                    <span className="item-period">{item.period}</span>
                                </div>
                                <div className="item-company">{item.company}</div>
                                <p className="item-description">{item.description}</p>
                            </div>
                        ))}
                    </section>
                )}

                {education.length > 0 && (
                    <section className="minimal-section">
                        <h2 className="minimal-section-title">Education</h2>
                        {education.map(item => (
                            <div key={item.id} className="minimal-item">
                                <div className="minimal-item-top">
                                    <h3 className="item-degree">{item.degree}</h3>
                                    <span className="item-period">{item.period}</span>
                                </div>
                                <div className="item-school">{item.school}</div>
                            </div>
                        ))}
                    </section>
                )}

                {skills.length > 0 && (
                    <section className="minimal-section">
                        <h2 className="minimal-section-title">Skills</h2>
                        <div className="minimal-skills">
                            {skills.join(' • ')}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
});
