import { IconMail, IconPhone, IconMapPin, IconGlobe } from '../Icons';

export function TemplateElegant({ data }) {
    const { personal, experience, education, skills, awards, projects } = data;

    return (
        <div className="cv-document elegant-template">
            <header className="elegant-header">
                <h1 className="elegant-name">{personal.fullName}</h1>
                <p className="elegant-title">{personal.title}</p>

                <div className="elegant-contact">
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

            <div className="elegant-body">
                {personal.summary && (
                    <section className="elegant-section">
                        <p className="elegant-summary">{personal.summary}</p>
                    </section>
                )}

                {experience && experience.length > 0 && (
                    <section className="elegant-section">
                        <h2 className="elegant-section-title">Professional Experience</h2>
                        <div className="elegant-list">
                            {experience.map(item => (
                                <div key={item.id} className="elegant-item">
                                    <div className="elegant-item-header">
                                        <h3 className="item-role">{item.role}</h3>
                                        <span className="item-period">{item.period}</span>
                                    </div>
                                    <div className="item-company">{item.company}</div>
                                    <p className="item-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {education && education.length > 0 && (
                    <section className="elegant-section">
                        <h2 className="elegant-section-title">Education</h2>
                        <div className="elegant-list">
                            {education.map(item => (
                                <div key={item.id} className="elegant-item">
                                    <div className="elegant-item-header">
                                        <h3 className="item-degree">{item.degree}</h3>
                                        <span className="item-period">{item.period}</span>
                                    </div>
                                    <div className="item-school">{item.school}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {projects && projects.length > 0 && (
                    <section className="elegant-section">
                        <h2 className="elegant-section-title">Projects</h2>
                        <div className="elegant-list">
                            {projects.map((item, index) => (
                                <div key={item.id || index} className="elegant-item">
                                    <div className="elegant-item-header">
                                        <h3 className="item-role">{item.title}</h3>
                                        {item.link && <span className="item-period">{item.link}</span>}
                                    </div>
                                    <p className="item-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {awards && awards.length > 0 && (
                    <section className="elegant-section">
                        <h2 className="elegant-section-title">Awards</h2>
                        <div className="elegant-list">
                            {awards.map((item, index) => (
                                <div key={item.id || index} className="elegant-item">
                                    <div className="elegant-item-header">
                                        <h3 className="item-role">{item.title}</h3>
                                        <span className="item-period">{item.date}</span>
                                    </div>
                                    <div className="item-company">{item.issuer}</div>
                                    {item.description && <p className="item-description">{item.description}</p>}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {skills && skills.length > 0 && (
                    <section className="elegant-section">
                        <h2 className="elegant-section-title">Skills & Expertise</h2>
                        <div className="elegant-skills">
                            {skills.join(' • ')}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
