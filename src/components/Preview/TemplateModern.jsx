import { IconMail, IconPhone, IconMapPin, IconGlobe } from '../Icons';

export function TemplateModern({ data }) {
    const { personal, experience, education, skills } = data;

    return (
        <div className="cv-document modern-template">
            {/* Sidebar Left */}
            <div className="modern-sidebar">
                <div className="sidebar-header">
                    <h1 className="modern-name">{personal.fullName}</h1>
                    <p className="modern-title">{personal.title}</p>
                </div>

                <div className="sidebar-section">
                    <h2 className="modern-section-title">Contact</h2>
                    <div className="modern-contact-info">
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
                </div>

                {skills.length > 0 && (
                    <div className="sidebar-section">
                        <h2 className="modern-section-title">Skills</h2>
                        <div className="modern-skills-list">
                            {skills.map((skill, index) => (
                                <div key={index} className="modern-skill-tag">{skill}</div>
                            ))}
                        </div>
                    </div>
                )}

                {education.length > 0 && (
                    <div className="sidebar-section">
                        <h2 className="modern-section-title">Education</h2>
                        <div className="modern-education-list">
                            {education.map(item => (
                                <div key={item.id} className="modern-education-item">
                                    <div className="item-degree">{item.degree}</div>
                                    <div className="item-school">{item.school}</div>
                                    <div className="item-period">{item.period}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content Right */}
            <div className="modern-main">
                {personal.summary && (
                    <section className="modern-section">
                        <h2 className="modern-main-title">Profile</h2>
                        <p className="modern-summary">{personal.summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section className="modern-section">
                        <h2 className="modern-main-title">Experience</h2>
                        <div className="modern-experience-list">
                            {experience.map(item => (
                                <div key={item.id} className="modern-experience-item">
                                    <div className="modern-item-header">
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
            </div>
        </div>
    );
}
