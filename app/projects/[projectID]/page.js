'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PROJECTS from '@/data/projects';
import Container from '@/components/helpingCompo/container';
import { motion } from 'motion/react'
import { ArrowLeft, BrainCircuitIcon, Building2Icon, CheckCircle2, Redo2Icon } from 'lucide-react';
import Link from 'next/link';
import NavBar from '@/app/navBar';
import Footer from '@/app/footer';

const fade = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Project = () => {
    const params = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const projectID = params.projectID;


    useEffect(() => {
        function loadData() {
            try {
                const found = PROJECTS.find((p) => String(p.slug) === projectID);
                setProject(found || null);
            } catch (err) {
                console.error("Error finding project:", err);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [projectID]);


    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-neutral-500 dark:text-neutral-400">
                Loading Project...
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center text-neutral-500 dark:text-neutral-400">
                <p className="text-lg">Project not found.</p>
                <button
                    onClick={() => window.history.back()}
                    className="mt-4 px-5 py-2 rounded-md bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <Container className='min-h-screen max-w-3xl mx-auto flex-col'>
            <NavBar />
            <div className='space-y-12 w-full px-4'>
                <div className='pt-14'>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:shadow-[inset_0px_-2px_3px_1px_var(--color-neutral-300)] dark:hover:bg-neutral-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Redo2Icon size={14} className="rotate-180" />
                        Back to Project
                    </Link>
                </div>

                <motion.div
                    {...fade}
                    className="rounded-2xl overflow-hidden shadow-lg bg-neutral-100 dark:bg-neutral-900"
                >
                    <img
                        src={project.image}
                        className="w-full h-full object-cover"
                        alt={project.title}
                    />

                    <div className="p-6">
                        <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                            {project.title}
                        </h1>

                        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                            {project.desc}
                        </p>

                        {/* STATUS BADGE */}
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200">
                            {project.status === "Completed" && <CheckCircle2 size={16} />}
                            {project.status === "Building" && <Building2Icon size={16} />}
                            {project.status === "Idea" && <BrainCircuitIcon size={16} />}
                            <span className="capitalize">{project.status}</span>
                        </div>

                        {/* NEW GRID DESIGN */}
                        <section className="grid gap-4 rounded-lg border bg-neutral-200/20 dark:bg-neutral-800/20 border-neutral-300 dark:border-neutral-700 p-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
                            <div>
                                <h5 className="text-sm font-semibold text-neutral-600/70 dark:text-neutral-400">Timeline</h5>
                                <p className="text-sm">{project.totalTime || "2 months"}</p>
                            </div>

                            <div>
                                <h5 className="text-sm font-semibold text-neutral-600/70 dark:text-neutral-400">Role</h5>
                                <p className="text-sm">{project.role || "Full Stack"}</p>
                            </div>

                            <div>
                                <h5 className="text-sm font-semibold text-neutral-600/70 dark:text-neutral-400">Team</h5>
                                <p className="text-sm">{project.team || "Solo"}</p>
                            </div>

                            <div>
                                <h5 className="text-sm font-semibold text-neutral-600/70 dark:text-neutral-400">Status</h5>
                                <span
                                    data-slot="badge"
                                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 text-xs border-transparent bg-neutral-800 dark:bg-neutral-200 dark:text-neutral-800 text-neutral-100"
                                >
                                    {project.status}
                                </span>
                            </div>
                        </section>

                        {/* Teck stack and Key's */}
                        <section className='grid grid-col-2 gap-4 mt-12 h-fit'>
                            <div className='col-span-2 flex flex-col gap-4 shadow-[0px_2px_15px_2px_var(--color-neutral-300)] dark:shadow-[0px_2px_15px_2px_var(--color-neutral-800)] p-4 rounded-md'>
                                <h3 className='text-2xl font-bold tracking-tighter mb-4 border-b border-neutral-300/70'>Tools & Librays Used.</h3>
                                <div className="flex flex-wrap items-center gap-2">
                                    {project.techUsed && project.techUsed.map((tech, idx) => (
                                        <div key={`tech-${idx}`} className="py-1.5 px-3 bg-neutral-200 dark:bg-neutral-700 shadow-[inset_0px_-2px_5px_2px_var(--color-neutral-300)] dark:shadow-none rounded-3xl text-sm">
                                            {tech}
                                        </div>
                                    ))}
                                </div>

                            </div>
                            {/* Flaws */}
                            <div className="shadow-[0px_2px_15px_2px_var(--color-neutral-300)] dark:shadow-[0px_2px_15px_2px_var(--color-neutral-800)] dark:bg-neutral-900/40 p-4 rounded-md">
                                <h3 className="text-xl font-bold tracking-tighter mb-4 border-b border-neutral-300/70 dark:border-neutral-700/70">
                                    Flaws
                                </h3>

                                <ul className="space-y-2 list-disc ml-5">
                                    {project.flaws?.map((flaw, idx) => (
                                        <li
                                            key={`flaw-${idx}`}
                                            className="text-sm px-3 py-2 rounded-md shadow-[inset_0px_-2px_5px_2px_var(--color-neutral-200)] dark:shadow-[0px_-2px_5px_2px_var(--color-neutral-800)] border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
                                        >
                                            {flaw}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div className="shadow-[0px_2px_15px_2px_var(--color-neutral-300)] dark:shadow-[0px_2px_15px_2px_var(--color-neutral-800)] dark:bg-neutral-900/20 p-4 rounded-md">
                                <h3 className="text-xl font-bold tracking-tighter mb-4 border-b border-neutral-300/70 dark:border-neutral-700/70">
                                    Cons
                                </h3>

                                <ul className="space-y-2 list-disc ml-5">
                                    {project.cons?.map((con, idx) => (
                                        <li
                                            key={`con-${idx}`}
                                            className="text-sm px-3 py-2 rounded-md shadow-[inset_0px_-2px_5px_2px_var(--color-neutral-200)] dark:shadow-[0px_-2px_5px_2px_var(--color-neutral-800)] border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-300"
                                        >
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </section>

                        {/* OverView */}
                        <section className="bg-white dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 p-8 rounded-lg shadow-md my-8 flex flex-col gap-4 mb-12">
                            <h3 className='text-3xl font-bold tracking-tighter mb-4'>
                                {project.title} - Overview
                            </h3>

                            {/* Overview */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold tracking-tighter mb-4 border-b border-neutral-300/70 dark:border-neutral-700/70">
                                    Overview.
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                                    {project.overview}
                                </p>
                            </div>

                            {/* What Users Can Do */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold tracking-tighter mb-4 border-b border-neutral-300/70 dark:border-neutral-700/70">
                                    What Users Can Do?
                                </h3>
                                <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300">
                                    {project.usersCanDo?.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Why I Built This */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold tracking-tighter mb-4 border-b border-neutral-300/70 dark:border-neutral-700/70">
                                    Why I Built This?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {project.whyBuilt}
                                </p>
                            </div>

                            {/* What Makes Me Different */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold tracking-tighter mb-4 border-b border-neutral-300/70 dark:border-neutral-700/70">
                                    What Makes Me Different from Others?
                                </h3>
                                <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300">
                                    {project.differences?.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Future Plans */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold tracking-tighter mb-4 border-b border-neutral-300/70 dark:border-neutral-700/70">
                                    Future Plans.
                                </h3>
                                <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300">
                                    {project.futurePlans?.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <div className='flex items-center justify-center mb-20'>
                            <Link href={'/projects'}>
                                <div className='py-2 px-4 bg-neutral-900 rounded-2xl text-neutral-200 shadow-[inset_0px_-2px_5px_2px_var(--color-neutral-500)] '>
                                    View All Projects
                                </div>
                            </Link>
                        </div>

                        <Footer />
                    </div>
                </motion.div>
            </div>
        </Container>
    );
}

export default Project;