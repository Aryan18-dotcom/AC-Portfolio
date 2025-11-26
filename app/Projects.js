import Container from "@/components/helpingCompo/container";
import ProjectCard from "@/components/projectsSection/ProjectCard";
import SectionHeading from "@/components/sectionHeading/page";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
const projects = [
        {
            title: "Talent Twister",
            desc: "A full-featured Hiring and Talent Management Platform that leverages AI for automated testing and candidate assessment. Built with robust back-end and modern styling.",
            tech: ["Django", "Tailwind-css", "PostgreSQL"],
            // live: "https://talenttwister-live.vercel.app", 
            github: "https://github.com/Aryan18-dotcom/talent-twister", 
            social: "#", // Hidden if '#'
            image: "/Site-Banner/Tallent_Twister.png",
        },
        {
            title: "Stheic_14 (E-commerce)",
            desc: "A custom e-commerce website for an earring business (Stheic_14). Features a product catalog, smooth transitions, and integrated payment (Razorpay) and shipping (FedEx).",
            tech: [ "Django", "PostgreSQL", "Locomotive-js", "Gsap", "Razorpay"],
            // live: "https://www.stheic14.com", 
            github: "https://github.com/Aryan18-dotcom/stheic-14-ecom", 
            social: "https://www.instagram.com/sthetic_14",
            image: "/Site-Banner/Sthetic14.png",
        },
        {
            title: "Todo-App",
            desc: "Modern Todo application using Next.js (App Router) and MongoDB. Features full CRUD operations with polished UI/UX, including sophisticated animations.",
            tech: ["Next.js", "MongoDB", "Framer Motion"],
            live: "https://todo-app-ashy-three.vercel.app/", 
            github: "https://github.com/Aryan18-dotcom/nextjs-todo-app", 
            social: "#",
            image: "https://todo-app-ashy-three.vercel.app/banner.png",
        },
        {
            title: "Basic_AI_ResumeBuilder",
            desc: "A foundational AI-powered tool for quickly generating and customizing professional resumes, handling data storage and processing via a robust Python/Django backend.",
            tech: ["Django", "PostgreSQL", "Python"],
            // live: "https://ai-resume-builder-basic.app", 
            github: "https://github.com/Aryan18-dotcom/ai-resume-builder", 
            social: "#",
            image: "/Site-Banner/AI_Resume_Builder.png",
        },
    ];

    return (
        <Container className="w-full h-fit flex-col mb-16">
            <SectionHeading sectionTitle="Projects" />
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-6 mt-5">
                {projects.map((project, i) => (
                    <ProjectCard key={i} data={project} index={i} />
                ))}
            </div>

            <Link
                href={"/projects"}
                className="mt-6 py-2 px-4 border-[1px] border-neutral-300 dark:border-neutral-800 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:shadow-[inset_0px_1px_1px_1px_var(--color-neutral-300)] dark:hover:shadow-[inset_0px_1px_1px_1px_var(--color-neutral-700)] inline-flex items-center gap-2"
            >
                Show all Projects
                <MoveRight className="size-4" />
            </Link>

        </Container>
    );
}
