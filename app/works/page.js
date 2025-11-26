'use client'
import Container from '@/components/helpingCompo/container';
import React from 'react';
import NavBar from '../navBar';
import { motion } from 'framer-motion';
import Loader from '../loader';
import ExperienceItem from '@/components/experience/ExperienceItem';
import DescItem from '@/components/experience/DescItem';
import Footer from '../footer';

// --- WORK LIST (4 DUMMY DATA AS YOU REQUESTED) ---
const works = [
  {
    title: "E-commerce Store",
    companyImg: "/Company/ecom.png",
    role: "Full Stack Developer",
    start: "Jan 2024",
    end: "March 2024",
    location: "Remote",
    desc: [
      "Developed product catalog, cart, checkout, and payment modules.",
      "Integrated Razorpay & FedEx APIs for seamless transactions.",
      "Used Locomotive + GSAP to build fluid animations.",
      "Optimized database structure using PostgreSQL."
    ],
    tech: [
      { name: "Django", src: "/Logos/django.png" },
      { name: "PostgreSQL", src: "/Logos/postgresql.png" },
      { name: "TailwindCSS", src: "/Logos/tailwind-css.png" },
      { name: "Razorpay", src: "/Logos/razorpay.png" },
    ]
  },
  {
    title: "AI Resume Builder",
    companyImg: "/Company/resume.png",
    role: "Backend Developer",
    start: "April 2024",
    end: "June 2024",
    location: "Remote",
    desc: [
      "Built AI-powered resume creation & ranking API.",
      "Implemented OCR + ML-based resume extraction.",
      "Designed secure user authentication system.",
      "Improved model accuracy through dataset tuning."
    ],
    tech: [
      { name: "Python", src: "/Logos/python.png" },
      { name: "Django", src: "/Logos/django.png" },
      { name: "Machine Learning", src: "/Logos/ml.png" }
    ]
  },
  {
    title: "Chat Application",
    companyImg: "/Company/chat.png",
    role: "Full Stack Developer",
    start: "July 2024",
    end: "Aug 2024",
    location: "On-site",
    desc: [
      "Built real-time chat using Django Channels.",
      "Implemented one-to-one & group messaging.",
      "Designed clean UI with TailwindCSS.",
      "Optimized WebSocket performance."
    ],
    tech: [
      { name: "Django", src: "/Logos/django.png" },
      { name: "FastAPI", src: "/Logos/fastapi.png" },
      { name: "WebSockets", src: "/Logos/websocket.png" },
    ]
  },
  {
    title: "Jarvis Desktop AI",
    companyImg: "/Company/jarvis.png",
    role: "AI Developer",
    start: "Sept 2024",
    end: "Ongoing",
    location: "Remote",
    desc: [
      "Developing a voice-controlled desktop AI assistant.",
      "Implemented web search, automation & voice responses.",
      "Integrated speech recognition and TTS system.",
      "Working on adding personalized memory features."
    ],
    tech: [
      { name: "Python", src: "/Logos/python.png" },
      { name: "SpeechRecognition", src: "/Logos/speech.png" },
      { name: "PyTTSx3", src: "/Logos/tts.png" },
    ]
  }
];

const Works = () => {
  return (
    <Container className='min-h-screen max-w-3xl mx-auto flex-col'>
      <Loader />
      <NavBar />

      <div className='py-16 space-y-16 w-full'>
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            My Works
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
            These are some of the projects & experiences that shaped my journey.
          </p>
          <div className='w-full h-px bg-neutral-200 dark:bg-neutral-800'></div>
        </div>

        {/* Work List */}
        <div className="flex flex-col gap-12">
          {works.map((item, index) => (
            <ExperienceItem
              key={index}
              defaultOpen={true}
              companyImg={item.companyImg}
              companyName={item.title}
              role={item.role}
              start={item.start}
              end={item.end}
              location={item.location}
              tech={item.tech}
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
