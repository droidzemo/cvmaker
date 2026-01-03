import { IconMail, IconPhone, IconMapPin, IconGlobe } from '../Icons';

export function TemplateStandard({ data }) {
    const { personal, experience, education, skills } = data;

    return (
        <div className="cv-document standard-template">
            {/* Header */}
            <header className="cv-header">
                <h1 className="cv-name">{personal.fullName}</h1>
                <p className="cv-title">{personal.title}</p>

                <div className="cv-contact-info">
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

                {personal.summary && (
                    <div className="cv-summary">
                        <p>{personal.summary}</p>
                    </div>
                )}
            </header>

            <div className="cv-body">
                {/* Main Column */}
                <div className="cv-main">
                    {experience.length > 0 && (
                        <section className="cv-section">
                            <h2 className="section-title">Experience</h2>
                            <div className="section-content">
                                {experience.map(item => (
                                    <div key={item.id} className="experience-item">
                                        <div className="item-header">
                                            <h3 className="item-role">{item.role}</h3>
                                            <span className="item-period">{item.period}</span>
                                        </div>
                                        <div className="item-sub">
                                            <span className="item-company">{item.company}</span>
                                        </div>
                                        <p className="item-description">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {education.length > 0 && (
                        <section className="cv-section">
                            <h2 className="section-title">Education</h2>
                            <div className="section-content">
                                {education.map(item => (
                                    <div key={item.id} className="education-item">
                                        <div className="item-header">
                                            <h3 className="item-degree">{item.degree}</h3>
                                            <span className="item-period">{item.period}</span>
                                        </div>
                                        <p className="item-school">{item.school}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar / Skills Column (If we want 2 col? Or keep it linear for standard?) 
            Let's keep Standard linear for simplicity and robustness in PDF.
            Or maybe Skills at bottom?
            User asked for "Preexisting template". Standard is linear usually.
        */}
                {skills.length > 0 && (
                    <section className="cv-section">
                        <h2 className="section-title">Skills</h2>
                        <div className="skills-list">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
