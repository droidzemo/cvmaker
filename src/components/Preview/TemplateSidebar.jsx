import { IconMail, IconPhone, IconMapPin, IconGlobe } from '../Icons';

export function TemplateSidebar({ data }) {
    const { personal, experience, education, skills, awards, projects } = data;

    return (
        <div className="cv-document sidebar-template">
            <div className="sidebar-left">
                <div className="sidebar-contact">
                    <h2 className="sidebar-section-title">Contact</h2>
                    <div className="sidebar-contact-info">
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

                {skills && skills.length > 0 && (
                    <div className="sidebar-section">
                        <h2 className="sidebar-section-title">Skills</h2>
                        <div className="sidebar-skills-list">
                            {skills.map((skill, index) => (
                                <div key={index} className="sidebar-skill-tag">{skill}</div>
                            ))}
                        </div>
                    </div>
                )}

                {education && education.length > 0 && (
                    <div className="sidebar-section">
                        <h2 className="sidebar-section-title">Education</h2>
                        {education.map(item => (
                            <div key={item.id} className="sidebar-education-item">
                                <div className="item-degree">{item.degree}</div>
                                <div className="item-school">{item.school}</div>
                                <div className="item-period">{item.period}</div>
                            </div>
                        ))}
                    </div>
                )}

                {awards && awards.length > 0 && (
                    <div className="sidebar-section">
                        <h2 className="sidebar-section-title">Awards</h2>
                        {awards.map((item, index) => (
                            <div key={item.id || index} className="sidebar-education-item">
                                <div className="item-degree">{item.title}</div>
                                <div className="item-school">{item.issuer}</div>
                                <div className="item-period">{item.date}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="sidebar-main">
                <header className="sidebar-header">
                    <h1 className="sidebar-name">{personal.fullName}</h1>
                    <p className="sidebar-title">{personal.title}</p>
                    {personal.summary && <p className="sidebar-summary">{personal.summary}</p>}
                </header>

                {experience && experience.length > 0 && (
                    <section className="main-section">
                        <h2 className="main-section-title">Experience</h2>
                        <div className="main-experience-list">
                            {experience.map(item => (
                                <div key={item.id} className="main-experience-item">
                                    <div className="item-header">
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

                {projects && projects.length > 0 && (
                    <section className="main-section">
                        <h2 className="main-section-title">Projects</h2>
                        <div className="main-experience-list">
                            {projects.map((item, index) => (
                                <div key={item.id || index} className="main-experience-item">
                                    <div className="item-header">
                                        <h3 className="item-role">{item.title}</h3>
                                        {item.link && <span className="item-period">{item.link}</span>}
                                    </div>
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
