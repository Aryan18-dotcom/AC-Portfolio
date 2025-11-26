const projectDataStore = {
    'talent-twister': {
        title: "Talent Twister",
        tagline: "AI-Powered Talent Management & Automated Assessment Platform.",
        status: "ready", // ready, progress, building
        image: "https://placehold.co/1200x600/1e293b/a5b4fc?text=Talent+Twister+Feature+Image",
        fullDescription: "Talent Twister is a comprehensive, full-featured platform designed to revolutionize the hiring process. It integrates advanced AI algorithms for automated candidate screening, behavioral assessment through custom tests, and centralized management of talent pools. The platform handles everything from job posting and applicant tracking to final evaluations, significantly reducing manual effort and time-to-hire. It features a robust, secure Django backend and a responsive, modern Tailwind CSS front-end.",
        timeline: [
            { phase: "Thinking & Ideation", duration: "3 Weeks", desc: "Defined core problems: manual resume screening, assessment inefficiency. Mapped out user roles (Candidate, HR, Admin)."},
            { phase: "Design & Prototyping", duration: "4 Weeks", desc: "Figma wireframes for dashboard and assessment flows. Defined database schema (PostgreSQL) and API endpoints. Decided on Tailwind for styling and Django for security."},
            { phase: "Building & Development", duration: "12 Weeks", desc: "Implemented core AI testing module (non-LLM pattern matching), full Django ORM, and front-end development of all user interfaces. Integrated security policies."},
            { phase: "Testing & Deployment", duration: "2 Weeks", desc: "Rigorous unit and integration testing. Deployed initial version on a hosting service. Ongoing maintenance and bug fixes."},
        ],
        techStacks: {
            Backend: ["Django (Python)", "PostgreSQL", "Django REST Framework"],
            Frontend: ["Tailwind CSS", "React/Vanilla JS", "HTML5"],
            Tools: ["Docker", "Git", "Jupyter"],
        },
        challenges: [
            "Designing a highly flexible database schema to accommodate varying assessment types and candidate data.",
            "Ensuring security protocols for user data and preventing unauthorized access to assessment results.",
            "Optimizing complex PostgreSQL queries for speed when processing large volumes of applicant data.",
        ],
        learnings: [
            "Mastered advanced Django ORM techniques, including optimization strategies and custom managers.",
            "Gained proficiency in secure API design and authentication best practices.",
            "Improved rapid prototyping skills using Tailwind CSS for complex dashboard UIs.",
        ],
        overview: {
            purpose: "To provide HR professionals with an automated, AI-driven tool to efficiently manage the entire talent acquisition lifecycle.",
            userActions: "Users can apply for jobs, take timed assessments, and HR can create/manage job openings, review candidate scores, and manage talent pipelines.",
            limitations: "The current AI assessment is focused on pattern matching and domain-specific knowledge; it lacks true LLM conversational capabilities.",
            futurePlans: "Integrating LLMs for resume summarization and candidate interview simulations.",
        },
        links: {
            live: "https://talenttwister-live.vercel.app", 
            github: "https://github.com/Aryan18-dotcom/talent-twister", 
            social: null,
        }
    },
    // Add data for other project IDs here if needed
};