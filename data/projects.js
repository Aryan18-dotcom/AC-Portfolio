const PROJECTS = [
  {
    id: "talent-twister",
    title: "Talent Twister",
    desc: "A full-featured Hiring and Talent Management Platform that leverages AI for automated testing and candidate assessment. Built with robust back-end and modern styling.",
    status: "ready",
    github: "https://github.com/Aryan18-dotcom/talent-twister",
    live: "",
    social: "",
    image: "/Site-Banner/Tallent_Twister.png",
    size: "large",
    slug: "tallent-twister",
    tech: ["Django", "Tailwind-css", "PostgreSQL"],

    fullDescription:
      "Talent Twister is a powerful AI-driven talent management system offering resume screening, automated testing, and smooth team collaboration workflows. Built to streamline HR and employee management.",

    timeline: {
      idea: "1 Week",
      design: "5 Days",
      build: "40 Days",
      completed: "10 Jan 2025",
    },

    techUsed: [
      "Django",
      "Python",
      "PostgreSQL",
      "TailwindCSS",
      "GSAP",
      "Locomotive",
      "WebSockets",
    ],

    totalTime: "45 days",

    flaws: [
      "Full dashboard may load slow on very low-end devices",
      "Advanced analytics still in progress",
    ],

    cons: [
      "Heavy backend requires good hosting",
      "Real-time features need strong internet connection",
    ],

    challenges:
      "Building a scalable multi-role system, managing real-time features, optimizing dashboard performance.",

    learnings:
      "Improved understanding of multi-user systems, real-time APIs, complex model relations, and UI/UX transitions.",

    overview:
      "An AI-powered hiring and employee management platform designed to automate company workflows.",
    usersCanDo: [
      "Take AI aptitude tests",
      "Apply for jobs",
      "Manage employees and teams",
      "Track tasks and productivity",
    ],
    whyBuilt:
      "To centralize employee management and recruitment, removing dependence on multiple apps.",
    differences: [
      "AI-powered evaluation",
      "Real-time team communication",
      "Multi-company support",
    ],
    futurePlans: [
      "Full analytics dashboard",
      "Voice-enabled candidate screening",
      "Company-specific customizations",
    ],
  },

  {
    id: "sthetic-14-ecomm",
    title: "Stheic_14 (E-commerce)",
    desc: "A custom e-commerce website for an earring business featuring smooth transitions, product catalog, Razorpay payments, and FedEx shipping.",
    status: "ready",
    github: "https://github.com/Aryan18-dotcom/stheic-14-ecom",
    live: "",
    social: "",
    image: "/Site-Banner/Sthetic14.png",
    size: "medium",
    slug: "sthetic-14-ecomm",
    tech: ["Django", "PostgreSQL", "Locomotive-js", "Gsap", "Razorpay"],

    fullDescription:
      "A fully functional e-commerce platform with payment gateway, admin panel, product gallery, and animation-rich UI for a smooth shopping experience.",

    timeline: {
      idea: "3 Days",
      design: "4 Days",
      build: "2 Weeks",
      completed: "5 Feb 2025",
    },

    techUsed: [
      "Django",
      "Python",
      "PostgreSQL",
      "TailwindCSS",
      "Locomotive",
      "GSAP",
      "Razorpay",
    ],

    totalTime: "20 days",

    flaws: ["No wishlist feature yet", "No order-tracking dashboard"],
    cons: [
      "Admin panel requires technical knowledge",
      "Animations may feel heavy on small devices",
    ],
    challenges:
      "Payment integration, SEO optimization, and smooth locomotive transitions.",
    learnings:
      "Mastered payment gateway integration and advanced front-end animation flow.",

    overview: "An animation-rich e-commerce experience for unique jewelry items.",
    usersCanDo: [
      "Purchase products",
      "Browse collections",
      "Make payments via Razorpay",
    ],
    whyBuilt: "To help a small business build its online presence.",
    differences: ["Smooth animations", "Minimal UI", "Fast checkout flow"],
    futurePlans: ["Add wishlist", "Add order-tracking", "Add customer reviews"],
  },

  {
    id: "todo-app",
    title: "Todo-App",
    desc: "Modern Todo application using Next.js and MongoDB with polished UI/UX and animations.",
    status: "ready",
    github: "https://github.com/Aryan18-dotcom/nextjs-todo-app",
    live: "https://todo-app-ashy-three.vercel.app/",
    social: "https://todo-app-ashy-three.vercel.app/",
    image: "https://todo-app-ashy-three.vercel.app/banner.png",
    size: "medium-tall",
    slug: "todo-app",
    tech: ["Next.js", "MongoDB", "Motion React"],

    fullDescription:
      "A modern, clean, and fast todo app built for productivity with real-time animations and smooth UI.",

    timeline: {
      idea: "1 Day",
      design: "1 Day",
      build: "4 Days",
      completed: "20 Jan 2025",
    },

    techUsed: ["Next.js", "MongoDB", "TailwindCSS", "Motion React"],

    totalTime: "6 days",

    flaws: ["No user login system", "No dark mode toggle"],
    cons: ["Limited to single user", "Basic reminder system only"],
    challenges: "Smooth animation handling and database syncing.",
    learnings: "Mastered Next.js App Router, Motion, and DB structuring.",

    overview: "A clean and modern todo-management tool.",
    usersCanDo: ["Add tasks", "Delete tasks", "Mark tasks done"],
    whyBuilt: "To create a personal productivity tool.",
    differences: ["Smooth animations", "Clean UI", "Super-fast CRUD"],
    futurePlans: ["Add user login", "Add reminders", "Add categories"],
  },

  {
    id: "basic-ai-resumebuilder",
    title: "Basic_AI_ResumeBuilder",
    desc: "AI-powered resume generator with strong backend architecture.",
    status: "ready",
    github: "https://github.com/Aryan18-dotcom/ai-resume-builder",
    live: "",
    social: "",
    image: "/Site-Banner/AI_Resume_Builder.png",
    size: "small",
    slug: "basic-ai-resumebuilder",
    tech: ["Django", "PostgreSQL", "Python"],

    fullDescription:
      "A simple yet powerful AI-driven resume generator allowing fast creation of structured and clean resumes.",

    timeline: {
      idea: "2 Days",
      design: "2 Days",
      build: "6 Days",
      completed: "12 Jan 2025",
    },

    techUsed: ["Django", "Python", "PostgreSQL", "OpenAI API"],

    totalTime: "10 days",

    flaws: ["Limited resume templates", "Requires internet for AI"],
    cons: ["Heavy backend loads for multiple users"],
    challenges: "Formatting templates dynamically.",
    learnings:
      "Improved understanding of Django PDF generation & AI integration.",

    overview: "A quick and clean AI-based resume generator.",
    usersCanDo: ["Create resumes", "Download resumes", "Auto-fill details"],
    whyBuilt: "To help users build resumes quickly.",
    differences: ["Fast", "Clean UI", "AI-based generation"],
    futurePlans: ["Add more templates", "Add dark mode", "Add export formats"],
  },

  {
    id: "ai-resume-ranker",
    title: "AI_Resume_Ranker",
    desc: "AI tool for ranking resumes and extracting key insights.",
    status: "ready",
    github: "https://github.com/Aryan18-dotcom/AI_Resume_Ranker",
    live: "",
    social: "",
    image: "/Site-Banner/AI_Resume_Ranker.png",
    size: "medium-tall",
    slug: "ai-resume-ranker",
    tech: ["Django", "PostgreSQL", "Python"],

    fullDescription:
      "AI-powered ranking tool that analyzes resumes and extracts key skills, experience, and summary.",

    timeline: {
      idea: "3 Days",
      design: "2 Days",
      build: "7 Days",
      completed: "18 Jan 2025",
    },

    techUsed: ["Django", "Python", "PostgreSQL", "OpenAI API"],

    totalTime: "12 days",

    flaws: ["Cannot parse poorly formatted resumes"],
    cons: ["Large PDFs slow analysis"],
    challenges: "Complex text extraction.",
    learnings: "Improved NLP processing and data mapping.",

    overview: "AI-based resume ranking and extraction tool.",
    usersCanDo: [
      "Upload resumes",
      "Get ranking score",
      "Extract key details automatically",
    ],
    whyBuilt: "To automate resume screening.",
    differences: ["Fast AI ranking", "Structured data extraction"],
    futurePlans: ["Add job-matching engine", "Add multi-resume batch analysis"],
  },

  {
    id: "chat-app",
    title: "ChatApp",
    desc: "Full-stack WebSocket chat app for instant communication.",
    status: "ready",
    github: "https://github.com/Aryan18-dotcom/Django_ChatApp",
    live: "",
    social: "",
    image: "/Site-Banner/Chat_App.png",
    size: "small",
    slug: "chat-app",
    tech: ["Python", "Django", "FastApi", "PostMan"],

    fullDescription:
      "A simple yet fast real-time chat app using WebSockets for instant messaging.",

    timeline: {
      idea: "1 Day",
      design: "1 Day",
      build: "3 Days",
      completed: "30 Jan 2025",
    },

    techUsed: ["Python", "Django", "WebSockets", "FastAPI"],

    totalTime: "5 days",

    flaws: ["No group chat", "No file sending"],
    cons: ["Basic UI only"],
    challenges: "Real-time message syncing.",
    learnings: "Mastered Django Channels & websockets.",

    overview: "A clean and simple real-time chat tool.",
    usersCanDo: ["Send messages", "Chat in real time"],
    whyBuilt: "To explore WebSocket architecture.",
    differences: ["Super fast", "Simple UI", "Clean backend"],
    futurePlans: ["Add group chat", "Add voice messages"],
  },

  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    desc: "Generate clean, high-quality QR codes instantly with a simple and fast UI.",
    status: "Completed",
    github: "https://github.com/Aryan18-dotcom/OR_Code_Generator",
    live: "",
    social: "",
    image: "/Site-Banner/QR_Genrator.png",
    size: "large",
    slug: "qr-code-generator",
    tech: ["Python", "Django", "QrGenrator"],

    fullDescription:
      "A lightweight Django-based QR generator with instant preview, export, and customization features.",

    timeline: {
      idea: "2 Days",
      design: "1 Day",
      build: "3 Days",
      completed: "15 Jan 2025",
    },

    techUsed: [
      "Django",
      "Python",
      "Gsap",
      "Locomotive-js",
      "PostgreSQL",
      "TailwindCSS",
      "PostMan",
    ],

    totalTime: "30 days",

    flaws: [
      "No batch QR generation",
      "Limited styling options",
      "Preview may lag on huge text",
    ],

    cons: ["Limited export formats", "Cannot customize QR shapes"],
    challenges: "Maintaining high resolution and fast generation.",
    learnings: "Deepened understanding of dynamic image generation.",

    overview: "Fast QR generator with minimalistic UI.",
    usersCanDo: [
      "Generate QR",
      "Export PNG/SVG",
      "View instant preview",
    ],
    whyBuilt: "To offer a fast, ad-free QR generator.",
    differences: ["Lightweight", "Fast", "Supports multiple exports"],
    futurePlans: ["Add color QR", "Add logo support", "Add batch QR"],
  },

  {
    id: "jarvis-ai-assistant",
    title: "Jarvis AI Assistant",
    desc: "A voice-controlled desktop assistant built using Python.",
    status: "building",
    github: "https://github.com/Aryan18-dotcom/Jarvis-AI-Desktop-Assistant",
    live: "",
    social: "",
    image: "/Site-Banner/Jarvis_AI_Desk_Assistant.png",
    size: "large",
    slug: "jarvis-ai-assistant",
    tech: ["Python", "SpeechRecognition", "PyTTSx3"],

    fullDescription:
      "A natural voice-controlled assistant that performs system tasks, searches web, automates actions, and responds via speech output.",

    timeline: {
      idea: "1 Week",
      design: "3 Days",
      build: "Work in Progress",
      completed: "—",
    },

    techUsed: [
      "Python",
      "SpeechRecognition",
      "PyAudio",
      "OpenAI API",
      "Text-to-Speech",
    ],

    totalTime: "In Progress",

    flaws: [
      "Accuracy drops in noisy environments",
      "Depends heavily on internet",
    ],

    cons: [
      "Not suitable for low-end systems",
      "Accent-based recognition issues",
    ],

    challenges: "Real-time voice detection with stable response.",
    learnings:
      "Mastered audio streams, threading, and integrating AI APIs.",

    overview:
      "A real-time interactive desktop assistant that listens and performs tasks.",
    usersCanDo: [
      "Search the web",
      "Open apps",
      "Ask questions",
      "Perform system tasks",
    ],
    whyBuilt: "To build a personal voice assistant like Jarvis.",
    differences: [
      "Real-time recognition",
      "AI-generated responses",
      "Desktop command automation",
    ],
    futurePlans: [
      "Add GUI dashboard",
      "Add hotword detection",
      "Improve offline mode",
    ],
  },
];

export default PROJECTS;
