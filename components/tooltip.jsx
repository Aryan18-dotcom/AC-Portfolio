"use client";
import Link from "next/link";
import React from "react";

const Tooltip = ({ text, src, children }) => {
    return (
        <div className="relative group inline-block">
            <Link href={src} target="_blank" rel="noopener noreferrer">
                <div
                    className="
                        absolute left-1/2 -translate-x-1/2 -top-3 
                        -translate-y-full px-3 py-1.5 rounded-md 
                        bg-neutral-800 dark:bg-neutral-200 dark:text-neutral-600 text-white text-xs font-medium 
                        opacity-0 pointer-events-none
                        group-hover:opacity-100 group-hover:-translate-y-[110%]
                        transition-all duration-300 shadow-lg
                        whitespace-nowrap z-20
                    "
                >
                    {text}

                    {/* Tooltip Arrow */}
                    <div
                        className="
                            absolute left-1/2 -translate-x-1/2 top-full 
                            w-0 h-0 
                            border-l-4 border-r-4 border-t-4 
                            border-l-transparent border-r-transparent 
                            border-t-neutral-700
                        "
                    />
                </div>

                {/* Child (icon, button, anything) */}
                {children}
            </Link>
        </div>
    );
};

export default Tooltip;
