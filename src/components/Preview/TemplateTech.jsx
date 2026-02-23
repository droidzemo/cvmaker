import { memo } from 'react';
import { IconMail, IconPhone, IconMapPin, IconGlobe } from '../Icons';

export const TemplateTech = memo(function TemplateTech({ data }) {
    const { personal, experience, education, skills, awards, projects } = data;

    return (
        <div className="cv-document tech-template">
            <style>
                {`
                @media print {
                    .tech-template {
                        background: #0f172a !important;
                        color: #e2e8f0 !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .tech-header {
                        background: #1e293b !important;
                        border-bottom: 4px solid #3b82f6 !important;
                    }
                    .tech-name {
                        color: #60a5fa !important;
                    }
                    .tech-section-title {
                        color: #3b82f6 !important;
                        border-left: 4px solid #3b82f6 !important;
                    }
                    .tech-experience-item {
                        background: rgba(30, 41, 59, 0.5) !important;
                        border: none !important;
                    }
                    .tech-skill-tag {
                        background: #334155 !important;
                        color: #60a5fa !important;
                        border: 1px solid #475569 !important;
                    }
                }
                `}
            </style>
            <header className="tech-header">
                <div className="tech-header-main">
                    <h1 className="tech-name">{personal.fullName}</h1>
                    <p className="tech-title">{personal.title}</p>
                </div>

                <div className="tech-contact">
                    {personal.email && (
                        <div className="contact-item">
                            <IconMail className="icon-sm" /> <span>{personal.email}</span>
                        </div>
                    )}
                    {personal.phone && (
                        <div className="contact-item">
                            <IconPhone className="icon-sm" /> <span>{personal.phone}</span>
                        </div>
                    )}
                    {personal.location && (
                        <div className="contact-item">
                            <IconMapPin className="icon-sm" /> <span>{personal.location}</span>
                        </div>
                    )}
                    {personal.website && (
                        <div className="contact-item">
                            <IconGlobe className="icon-sm" /> <span>{personal.website}</span>
                        </div>
                    )}
                </div>
            </header>

            <div className="tech-body">
                {personal.summary && (
                    <section className="tech-section">
                        <h2 className="tech-section-title">01. Profile</h2>
                        <p className="tech-summary">{personal.summary}</p>
                    </section>
                )}

                {experience && experience.length > 0 && (
                    <section className="tech-section">
                        <h2 className="tech-section-title">02. Experience</h2>
                        <div className="tech-experience-list">
                            {experience.map(item => (
                                <div key={item.id} className="tech-experience-item">
                                    <div className="tech-item-header">
                                        <h3 className="item-role">{item.role} @ {item.company}</h3>
                                        <span className="item-period">[{item.period}]</span>
                                    </div>
                                    <p className="item-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {projects && projects.length > 0 && (
                    <section className="tech-section">
                        <h2 className="tech-section-title">03. Projects</h2>
                        <div className="tech-experience-list">
                            {projects.map((item, index) => (
                                <div key={item.id || index} className="tech-experience-item">
                                    <div className="tech-item-header">
                                        <h3 className="item-role">{item.title}</h3>
                                        {item.link && <span className="item-period">{item.link}</span>}
                                    </div>
                                    <p className="item-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="tech-grid">
                    <div className="tech-grid-col">
                        {education && education.length > 0 && (
                            <section className="tech-section">
                                <h2 className="tech-section-title">04. Education</h2>
                                {education.map(item => (
                                    <div key={item.id} className="tech-education-item">
                                        <div className="item-degree">{item.degree}</div>
                                        <div className="item-school">{item.school}</div>
                                        <div className="item-period">{item.period}</div>
                                    </div>
                                ))}
                            </section>
                        )}

                        {awards && awards.length > 0 && (
                            <section className="tech-section">
                                <h2 className="tech-section-title">05. Awards</h2>
                                {awards.map((item, index) => (
                                    <div key={item.id || index} className="tech-education-item">
                                        <div className="item-degree">{item.title}</div>
                                        <div className="item-school">{item.issuer}</div>
                                        <div className="item-period">{item.date}</div>
                                    </div>
                                ))}
                            </section>
                        )}
                    </div>

                    <div className="tech-grid-col">
                        {skills && skills.length > 0 && (
                            <section className="tech-section">
                                <h2 className="tech-section-title">06. Skill Cloud</h2>
                                <div className="tech-skill-cloud">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="tech-skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});
