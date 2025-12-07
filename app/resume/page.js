"use client"
import Container from "@/components/helpingCompo/container";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <Container className="min-h-screen md:max-w-3xl mx-auto flex-col md:px-0 px-4 py-12">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-8 text-center dark:text-white"
            >
                My Resume
            </motion.h1>

            {/* Resume PDF Viewer */}
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-4xl bg-white dark:bg-neutral-900 shadow-xl rounded-lg p-4 border border-gray-200 dark:border-neutral-700"
            >
                <embed
                    src="/Resume/ARYAN CHHEDA_RESUME 2025.pdf"
                    type="application/pdf"
                    className="w-full min-h-screen rounded"
                />

                {/* Fallback link */}
                <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                    If the PDF is not visible,{" "}
                    <a
                        className="text-blue-600 dark:text-blue-400 underline"
                        href="/Resume/ARYAN CHHEDA_RESUME 2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        click here to open it.
                    </a>
                </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8 flex justify-center items-center gap-4 flex-wrap"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/Resume/ARYAN CHHEDA_RESUME 2025.pdf"
                    download="Aryan_Resume.pdf"
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                    Download Resume
                </motion.a>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/"
                        className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow-md hover:bg-black transition dark:bg-neutral-700 dark:hover:bg-neutral-600"
                    >
                        Get Back Home
                    </Link>
                </motion.div>
            </motion.div>

        </Container>
    );
};

export default Resume;
