"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Tooltip from "@/components/tooltip";
import SectionHeading from "@/components/sectionHeading/page";


const stackItems = [
    // =========================
    // 🎨 UI / FRONTEND
    // =========================
    { name: "JavaScript", src: "/Logos/javascript.png", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Tailwind CSS", src: "/Logos/tailwind-css.png", href: "https://tailwindcss.com/" },
    { name: "Motion", src: "/Logos/motion.png", href: "https://motion.dev/" },
    { name: "GSAP", src: "/Logos/gsap.png", href: "https://greensock.com/gsap/" },

    // =========================
    // ⚛️ FRAMEWORKS / LIBRARIES
    // =========================
    { name: "React", src: "/Logos/react.png", href: "https://react.dev/" },
    { name: "React Router", src: "/Logos/react-router.png", href: "https://reactrouter.com/" },
    { name: "React Navigation", src: "/Logos/react-navigation.svg", href: "https://reactnavigation.org/" },
    { name: "Next.js", srcLight: "/Logos/nextjs2-dark.svg", srcDark: "/Logos/nextjs2-light.svg", href: "https://nextjs.org/" },
    { name: "Node.js", src: "/Logos/nodejs.svg", href: "https://nodejs.org/" },

    // =========================
    // 🐍 BACKEND / PYTHON
    // =========================
    { name: "Python", src: "/Logos/python.png", href: "https://www.python.org/" },
    { name: "FastAPI", src: "/Logos/fast-api.png", href: "https://fastapi.tiangolo.com/" },
    { name: "Django", src: "/Logos/django.png", href: "https://www.djangoproject.com/" },
    { name: "Django REST Framework", src: "/Logos/drf.png", href: "https://www.django-rest-framework.org/" },
    { name: "Pandas", srcDark: "/Logos/pandas-icon.png", srcLight: "/Logos/pandas-light.png", href: "https://pandas.pydata.org/" },

    // =========================
    // 🤖 AI & LLM
    // =========================
    { name: "LLM (Groq)", src: "/Logos/groq.png", href: "https://groq.com/" },
    { name: "ChatGPT", srcLight: "/Logos/chatgpt-dark.svg", srcDark: "/Logos/chatgpt-light.svg", href: "https://chatgpt.com" },
    { name: "Gemini", src: "/Logos/gemini.png", href: "https://gemini.com" },

    // =========================
    // 🗄 DATABASES
    // =========================
    { name: "MongoDB", src: "/Logos/mongodb.png", href: "https://www.mongodb.com/" },
    { name: "MySQL", srcDark: "/Logos/mysql-light.svg", srcLight: "/Logos/mysql-dark.png", href: "https://www.mysql.com/" },

    // =========================
    // ⚒️ DEV TOOLS
    // =========================
    { name: "Git", src: "/Logos/git.png", href: "https://git-scm.com/" },
    { name: "GitHub", src: "/Logos/github.png", href: "https://github.com/" },
    { name: "Postman", src: "/Logos/postman.png", href: "https://www.postman.com/" },

    // =========================
    // 🎨 DESIGN TOOLS
    // =========================
    { name: "Adobe Photoshop", src: "/Logos/ps.svg", href: "https://www.adobe.com/products/photoshop.html" },
    { name: "Canva", src: "/Logos/canva.png", href: "https://www.canva.com/" },
];



const Stack = () => {
    const { theme } = useTheme();
    

    return (
        <div className="container-coll md:mb-16 mb-12 w-full">
            <SectionHeading sectionTitle="Stack" />

            <div className="px-6 py-8 [--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center bg-zinc-950/0.75 dark:bg-white/0.75 rounded-tr-2xl rounded-bl-2xl dark:shadow-[inset_-3px_-2px_4px_2px_var(--color-neutral-700)] shadow-[inset_-3px_-2px_4px_2px_var(--color-neutral-200)]">
                <ul className="flex flex-wrap gap-4 select-none">

                    {stackItems.map((item, index) => {
                        const imageSrc =
                            item.srcDark && item.srcLight
                                ? theme === "dark"
                                    ? item.srcLight
                                    : item.srcDark
                                : item.src;

                        return (
                            <li key={index} className="flex items-center">
                                <Tooltip text={item.name} src={item.href}>
                                    <Image key={item.name} src={imageSrc} alt={item.name} width={36} height={36} className="md:h-10 md:w-10 h-6 w-6 cursor-pointer rounded-md" />
                                </Tooltip>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Stack;