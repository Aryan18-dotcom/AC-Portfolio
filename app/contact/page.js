"use client";
import Container from "@/components/helpingCompo/container";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import NavBar from "../navBar";
// FIX: Changed import to default export and use a common method to get the list
import countryCodes from "country-codes-list";

// Helper function to create the list of countries and codes
const getCountryOptions = () => {
    // This creates an array of objects like: { code: 'IN', name: 'India', dial_code: '91' }
    const list = countryCodes.all();
    return list.map(c => ({
        code: c.countryCode,
        name: c.countryNameEn,
        dial_code: c.countryCallingCode,
    }));
};

const Contact = () => {
    const [form, setForm] = useState({
        full_name: "",
        email: "",
        country_code: "+91", // Default to India's code as in original
        phone_no: "",
        contact_reason: "",
        message: "",
        company_name: "",
        job_role: "",
        project_title: "",
        project_type: "",
        budget: "", // Not used in the existing JSX but kept in state
        timeline: "", // Not used in the existing JSX but kept in state
        other_title: "",
        other_description: "",
    });

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ type: "", message: "" });

    // Use useMemo to generate the country options only once
    const countryOptions = useMemo(() => getCountryOptions(), []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0] || null);
    };

    const showToast = (type, message) => {
        setToast({ type, message });
        setTimeout(() => setToast({ type: "", message: "" }), 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setToast({ type: "", message: "" });

        try {
            const formData = new FormData();

            // Append all form fields
            Object.keys(form).forEach((key) => {
                // Only append non-empty fields to keep the payload clean
                if (form[key] !== "" && form[key] !== null) {
                    formData.append(key, form[key]);
                }
            });

            // Append file if selected
            if (file) formData.append("file", file);

            // NOTE: This assumes you have an API route set up at /api/contact
            const res = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                showToast("error", data.error || "Failed to send message.");
            } else {
                showToast("success", "Message sent successfully!");
                // Reset form fields to initial state
                setForm({
                    full_name: "",
                    email: "",
                    country_code: "+91",
                    phone_no: "",
                    contact_reason: "",
                    message: "",
                    company_name: "",
                    job_role: "",
                    project_title: "",
                    project_type: "",
                    budget: "",
                    timeline: "",
                    other_title: "",
                    other_description: "",
                });
                setFile(null);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            showToast("error", "Network error. Please try again.");
        }
        setLoading(false);
    };


    const selected = form.contact_reason;

    return (
        <Container className="min-h-screen md:max-w-3xl mx-auto flex-col md:px-0 px-4 py-10 relative">
            <NavBar />

            {/* TOAST */}
            <AnimatePresence>
                {toast.message && (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 10, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl shadow-lg text-white font-medium z-50
            ${toast.type === "success" ? "bg-green-600" : "bg-red-500"}`}
                    >
                        {toast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col gap-4 mt-16 w-full md:w-3/4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-6 text-center dark:text-white"
                >
                    Contact Me
                </motion.h1>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className={`space-y-5 mx-auto w-full ${loading ? "cursor-not-allowed" : ""}`}
                >
                    {/* BASIC INPUT FIELDS */}
                    {[
                        {
                            label: "Full Name",
                            type: "text",
                            placeholder: "Your full name",
                            name: "full_name",
                            required: true,
                        },
                        {
                            label: "Email Address",
                            type: "email",
                            placeholder: "your@email.com",
                            name: "email",
                            required: true,
                        },
                    ].map((field, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <label className="block font-medium mb-1 dark:text-gray-200">
                                {field.label}
                            </label>

                            <motion.input
                                whileFocus={!loading ? { scale: 1.01 } : {}}
                                type={field.type}
                                placeholder={field.placeholder}
                                name={field.name}
                                disabled={loading}
                                required={field.required}
                                value={form[field.name]}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                            />
                        </motion.div>
                    ))}

                    {/* PHONE WITH COUNTRY CODE - CORRECTED */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <label className="block font-medium mb-1 dark:text-gray-200">Phone Number</label>
                        <div className="flex gap-2">
                            <select
                                name="country_code"
                                value={form.country_code}
                                onChange={handleChange}
                                disabled={loading}
                                className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-800 dark:text-white w-32"
                            >
                                {/* Corrected iteration logic */}
                                {countryOptions.map((c) => (
                                    <option key={c.code} value={`+${c.dial_code}`}>
                                        {c.name} (+{c.dial_code})
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                name="phone_no"
                                placeholder="Enter phone number"
                                disabled={loading}
                                value={form.phone_no}
                                onChange={handleChange}
                                className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-800 dark:text-white"
                            />
                        </div>
                    </motion.div>

                    {/* SELECT REASON */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                    >
                        <label className="block font-medium mb-1 dark:text-gray-200">
                            Reason for Contact
                        </label>

                        <motion.select
                            name="contact_reason"
                            disabled={loading}
                            value={form.contact_reason}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                            bg-white dark:bg-neutral-800 dark:text-white"
                        >
                            <option value="">Select a reason</option>
                            <option>Hiring / Work Opportunity</option>
                            <option>Collaboration</option>
                            <option>Portfolio Feedback</option>
                            <option>General Inquiry</option>
                            <option>Other...</option>
                        </motion.select>
                    </motion.div>

                    {/* ===========================
            CONDITIONAL FIELDS
            ============================ */}
                    <AnimatePresence>
                        {/* HIRING */}
                        {selected === "Hiring / Work Opportunity" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-4"
                            >
                                <h3 className="font-semibold text-lg dark:text-gray-200">
                                    Additional Details (Hiring)
                                </h3>

                                <input
                                    type="text"
                                    name="company_name"
                                    placeholder="Company / HR Name"
                                    disabled={loading}
                                    value={form.company_name}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white"
                                    required
                                />

                                <input
                                    type="text"
                                    name="job_role"
                                    placeholder="Job Role / Position"
                                    disabled={loading}
                                    value={form.job_role}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white"
                                    required
                                />

                                <label className="block dark:text-gray-200">
                                    Upload Resume or Job Description (PDF/Image)
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf,.jpg,.png,.jpeg"
                                    disabled={loading}
                                    onChange={handleFileChange}
                                    className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white"
                                />
                            </motion.div>
                        )}

                        {/* COLLABORATION */}
                        {selected === "Collaboration" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-4"
                            >
                                <h3 className="font-semibold text-lg dark:text-gray-200">
                                    Collaboration Details
                                </h3>

                                <input
                                    type="text"
                                    name="project_title"
                                    placeholder="Project Title"
                                    disabled={loading}
                                    value={form.project_title}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white"
                                    required
                                />

                                <select
                                    name="project_type"
                                    disabled={loading}
                                    value={form.project_type}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white"
                                    required
                                >
                                    <option value="">Project Type</option>
                                    <option>Website</option>
                                    <option>Mobile App</option>
                                    <option>UI / UX Design</option>
                                    <option>Marketing</option>
                                    <option>Other</option>
                                </select>

                                <label className="block dark:text-gray-200">
                                    Upload Reference File or Image
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf,.jpg,.png,.jpeg"
                                    disabled={loading}
                                    onChange={handleFileChange}
                                    className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white"
                                />
                            </motion.div>
                        )}

                        {/* OTHER... */}
                        {selected === "Other..." && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-4"
                            >
                                <h3 className="font-semibold text-lg dark:text-gray-200">
                                    Additional Details (Other)
                                </h3>

                                <input
                                    type="text"
                                    name="other_title"
                                    placeholder="Subject / Title"
                                    disabled={loading}
                                    value={form.other_title}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white"
                                    required
                                />

                                <textarea
                                    name="other_description"
                                    rows="3"
                                    placeholder="Describe your query..."
                                    disabled={loading}
                                    value={form.other_description}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white resize-none"
                                    required
                                ></textarea>

                                <label className="block dark:text-gray-200">
                                    Upload File (Optional)
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf,.jpg,.png,.jpeg"
                                    disabled={loading}
                                    onChange={handleFileChange}
                                    className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* MESSAGE (General Message field) */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <label className="block font-medium mb-1 dark:text-gray-200">
                            Message
                        </label>

                        <motion.textarea
                            rows="5"
                            name="message"
                            disabled={loading}
                            value={form.message}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg dark:bg-neutral-800 dark:text-white resize-none"
                            placeholder="Write your message here..."
                        ></motion.textarea>
                    </motion.div>

                    {/* BUTTONS */}
                    <motion.div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
                        <motion.button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md 
                                ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"}
                                dark:bg-blue-500 dark:hover:bg-blue-600`}
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                            ) : (
                                "Send Message"
                            )}
                        </motion.button>

                        <motion.div>
                            <Link
                                href="/"
                                className={`px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow-md dark:bg-neutral-700 
                                    ${loading
                                        ? "opacity-50 pointer-events-none"
                                        : "hover:bg-black dark:hover:bg-neutral-600"
                                    }`}
                            >
                                Get Back Home
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.form>
            </div>
        </Container>
    );
};

export default Contact;