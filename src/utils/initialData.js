export const initialCV = {
    personal: {
        fullName: "John Doe",
        title: "Software Engineer",
        email: "john.doe@example.com",
        phone: "+1 234 567 890",
        website: "johndoe.com",
        location: "New York, USA",
        summary: "Passionate developer with expertise in React and modern web technologies. Focus on clean code and user experience."
    },
    experience: [
        {
            id: crypto.randomUUID(),
            role: "Frontend Developer",
            company: "Tech Corp",
            period: "2021 - Present",
            description: "Implemented new features and optimized performance for the main application. Collaborated with cross-functional teams."
        },
        {
            id: crypto.randomUUID(),
            role: "Junior Developer",
            company: "Startup Inc",
            period: "2019 - 2021",
            description: "Assisted in building the initial MVP. Fixed bugs and improved code quality."
        }
    ],
    education: [
        {
            id: crypto.randomUUID(),
            degree: "B.S. Computer Science",
            school: "University of Technology",
            period: "2015 - 2019"
        }
    ],
    skills: [
        "React", "JavaScript", "CSS", "Node.js", "Git", "UI/UX Design"
    ]
};
