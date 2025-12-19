'use client'
import Container from '@/components/helpingCompo/container';
import React from 'react';
import NavBar from '../navBar';
import ExperienceItem from '@/components/experience/ExperienceItem';
import DescItem from '@/components/experience/DescItem';
import Footer from '../footer';
import { localIcons } from '@/utils/data/social-icons';

const workHistory = [
  {
    companyName: "TechMicra",
    companyImg: localIcons["techmicra"],
    role: "Full-Stack Developer Intern",
    start: "Jan 2025",
    end: "Apr 2025",
    location: "Ahmedabad, India",
    locationLink: "https://maps.app.goo.gl/TechMicraAhmedabad", // Placeholder: replace with actual link
    website: "https://techmicra.com",
    linkedin: "https://linkedin.com/in/aryanchheda",
    github: "https://github.com/aryanchheda22",
    desc: [
      "Served as team leader and senior developer for internal module development.",
      "Optimized SQL queries and enhanced database scalability for high-performance modules.",
      "Strengthened leadership and cross-team communication in an agile environment."
    ],
    tech: [
      { name: "Python", src: "/Logos/python.png" },
      { name: "Django", src: "/Logos/django.png" },
      { name: "SQL", src: "/Logos/sql.png" },
    ],
    project: {
      name: "Talent Twister",
      role: "Lead Backend Architect",
      details: "A comprehensive Job Hiring & Employee Management Platform built to streamline recruitment workflows.",
      features: [
        "Built scalable backend architecture using Django and FastAPI.",
        "Designed API-driven workflows for employee onboarding and recruitment tracking.",
        "Integrated automated status updates and candidate filtering logic."
      ]
    }
  },
  {
    companyName: "Payval Technologies",
    companyImg: localIcons["payval"],
    role: "Python Developer (Flask) Intern",
    start: "Dec 2025",
    end: "Present",
    location: "Ahmedabad, India",
    locationLink: "https://maps.app.goo.gl/PayvalAhmedabad",
    desc: [
      "Architected NoSQL database schemas for real-time financial tracking.",
      "Performed detailed EDA on user data to provide spending insights via dashboards."
    ],
    tech: [
      { name: "Flask", src: "/Logos/flask.png" },
      { name: "MongoDB", src: "/Logos/mongodb.png" },
      { name: "Pandas", src: "/Logos/pandas.png" },
    ],
    project: {
      name: "Expense Split Tracker",
      role: "Full-Stack Developer",
      details: "A real-life financial tool for tracking and splitting group expenses seamlessly.",
      features: [
        "Integrated Flask with MongoDB for flexible, high-speed data retrieval.",
        "Implemented secure CRUD logic for user expense management.",
        "Designed responsive UI using Tailwind CSS for real-time data visualization."
      ]
    }
  },
  {
    companyName: "BrainyBeam",
    companyImg: localIcons["brainybeam"],
    role: "Data Analyst Intern",
    start: "May 2024",
    end: "Aug 2024",
    location: "Ahmedabad, India",
    locationLink: "https://maps.app.goo.gl/BrainyBeamAhmedabad",
    desc: [
      "Cleaned and transformed complex datasets using Python and Pandas.",
      "Performed Exploratory Data Analysis (EDA) to extract key business insights.",
      "Developed interactive dashboards and analytical reports for data visualization.",
      "Managed database integrity through consistent CRUD operations."
    ],
    tech: [
      { name: "Python", src: "/Logos/python.png" },
      { name: "Pandas", src: "/Logos/pandas.png" },
      { name: "Jupyter", src: "/Logos/jupyter.png" },
      { name: "MySQL", src: "/Logos/mysql.png" },
    ],
    // No nested project for this one as requested
    project: null 
  }
];

const freelanceProjects = [
  {
    title: "Sthetic_14",
    role: "Full-Stack Freelance Developer",
    location: "Remote / Freelance",
    github: "https://github.com/aryanchheda22/Sthetic_14",
    desc: [
      "Full-stack eCommerce web app featuring smooth GSAP animations and secure payment gateways.",
      "Integrated Razorpay for transactions, Google Mail API for automation, and FedEx API for shipping.",
      "Optimized the database layer for high-performance product indexing and user management."
    ],
    tech: [
      { name: "Django", src: "/Logos/django.png" },
      { name: "GSAP", src: "/Logos/gsap.png" },
      { name: "Tailwind", src: "/Logos/tailwind-css.png" },
      { name: "Razorpay", src: "/Logos/razorpay.png" },
    ]
  },
  {
    title: "Jarvis AI Assistant",
    role: "AI Developer",
    location: "Personal Project",
    desc: [
      "Voice-controlled desktop AI capable of system control, web automation, and intelligent responses.",
      "Integrated SpeechRecognition and LLM logic for human-like interaction.",
    ],
    tech: [
      { name: "Python", src: "/Logos/python.png" },
      { name: "LLM", src: "/Logos/llm.png" },
      { name: "SpeechRecognition", src: "/Logos/python.png" },
    ]
  }
];

const Works = () => {
  return (
    <Container className='min-h-screen max-w-3xl mx-auto flex-col'>
      <NavBar />

      <div className='py-16 space-y-12 w-full'>
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Professional Works</h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
            Professional internships and independent engineering projects.
          </p>
          <div className='w-full h-px bg-neutral-200 dark:bg-neutral-800'></div>
        </div>

        {/* Section 1: Professional Internships */}
        <div className="flex flex-col gap-16">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Internships</h2>
          {workHistory.map((item, index) => (
            <div key={index} className="space-y-6">
              <ExperienceItem
                defaultOpen={index === 0}
                companyImg={item.companyImg}
                companyName={item.companyName}
                role={item.role}
                start={item.start}
                end={item.end}
                location={
                  <a href={item.locationLink} target="_blank" rel="noreferrer" className="hover:text-blue-500 underline decoration-dotted">
                    {item.location} (View Map)
                  </a>
                }
                tech={item.tech}
                website={item.website}
                github={item.github}
                linkedin={item.linkedin}
              >
                {item.desc.map((point, idx) => (
                  <DescItem key={idx}>{point}</DescItem>
                ))}

                {item.project && (
                  <div className="mt-6 p-5 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/30">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">🚀 Project: {item.project.name}</h4>
                      <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full font-bold">{item.project.role}</span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 italic">{item.project.details}</p>
                    <ul className="space-y-2">
                      {item.project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm flex gap-2 text-neutral-700 dark:text-neutral-300">
                          <span className="text-blue-500">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </ExperienceItem>
            </div>
          ))}
        </div>

        {/* Section 2: Freelance & Personal Projects */}
        <div className="flex flex-col gap-10 pt-10">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Freelance & Personal Projects</h2>
          {freelanceProjects.map((item, index) => (
            <ExperienceItem
              key={index}
              companyImg={item.title === "Sthetic_14" ? "/Logos/django.png" : "/Logos/python.png"}
              companyName={item.title}
              role={item.role}
              location={item.location}
              tech={item.tech}
              github={item.github}
            >
              {item.desc.map((point, idx) => (
                <DescItem key={idx}>{point}</DescItem>
              ))}
            </ExperienceItem>
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Works;