import Container from '@/components/helpingCompo/container';
import NavBar from '../navBar';
import Loader from '../loader';
import Link from 'next/link';
import { Bell, Link2 } from 'lucide-react';
import PROJECTS from '@/data/projects';

const StatusIndicator = ({ status }) => {
  let color, message;

  switch (status) {
    case 'ready':
      color = 'bg-green-500';
      message = 'Ready to Use';
      break;
    case 'progress':
      color = 'bg-yellow-500';
      message = 'Work in Progress';
      break;
    case 'building':
      color = 'bg-red-500';
      message = 'Building the Idea';
      break;
    default:
      color = 'bg-gray-500';
      message = 'Status Unknown';
  }

  return (
    <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
      <div className="relative flex h-3 w-3">
        {/* Pulsing ring animation */}
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`}></span>
        {/* Solid circle */}
        <span className={`relative inline-flex rounded-full h-3 w-3 ${color}`}></span>
      </div>
      <span>{message}</span>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`
                bg-neutral-200/80 dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700
                transition-all duration-300 hover:shadow-2xl dark:hover:shadow-neutral-700/50 
                overflow-hidden flex flex-col group relative

            `}
    >
      {/* 1. Project Image */}
      <div className="relative w-full h-48 lg:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition duration-500 group-hover:scale-[1.05]"
          loading="lazy"
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* 5. Status Notice */}
        <div className="absolute top-3 right-3 p-2 bg-neutral-900/70 rounded-lg backdrop-blur-sm">
          <StatusIndicator status={project.status} />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        {/* 2. Title */}
        <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>

        {/* 3. Description */}
        <p className="text-sm text-gray-600 dark:text-neutral-400 mb-3 flex-grow">
          {project.desc}
        </p>

        {/* 4. Tech Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-300/10 dark:text-blue-300">
              {tech}
            </span>
          ))}
        </div>

        {/* 6. View in Depth / Action Link */}
        {/* project.github || project.live */}
        <div className="mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-wrap items-center gap-3">

            {/* GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 
        text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 
        transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.55-3.88-1.55-.52-1.3-1.28-1.65-1.28-1.65-1.05-.7.08-.68.08-.68 1.17.08 1.79 1.2 1.79 1.2 1.03 1.79 2.7 1.27 3.36.97.1-.75.4-1.27.72-1.57-2.55-.29-5.24-1.3-5.24-5.82 0-1.29.46-2.36 1.2-3.19-.12-.3-.52-1.53.12-3.18 0 0 .97-.31 3.18 1.21a10.9 10.9 0 0 1 5.8 0c2.2-1.52 3.18-1.21 3.18-1.21.64 1.65.24 2.88.12 3.18.74.83 1.2 1.9 1.2 3.2 0 4.53-2.7 5.52-5.26 5.8.41.35.78 1.04.78 2.1v3.11c0 .32.21.67.8.55A10.93 10.93 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                GitHub
              </a>
            )}

            {/* Live */}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 
        text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 
        transition-all text-sm"
              >
                <Link2 size={15} />
                Live
              </a>
            )}

            {/* Social */}
            {project.social && (
              <a
                href={project.social}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-50 dark:bg-pink-900/20 
        text-pink-600 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/40 
        transition-all text-sm"
              >
                <Bell size={15} />
                Social
              </a>
            )}

            {/* View in Depth — goes to next line when needed */}
            <Link
              href={`/projects/${project.slug}`}
              className="w-full sm:w-auto mt-1 flex items-center gap-2 text-sm font-medium 
      text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 
      transition-colors justify-end"
            >
              View in Depth
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};


const Projects = () => {
  return (
    <Container className='min-h-screen max-w-3xl mx-auto flex-col'>
      <Loader />
      <NavBar />
      <div className='py-16 space-y-10'>
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            My Projects
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
            A curated showcase of projects across full-stack development, AI, and modern UI/UX principles.
          </p>
          <div className='w-full h-px bg-neutral-200 dark:bg-neutral-800'></div>
        </div>

        {/* Bento Grid Container */}
        <div
          className="
                        grid 
                        grid-cols-1 
                        md:grid-cols-2
                        gap-6
                        mx-auto max-w-7xl
                    "
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Projects;