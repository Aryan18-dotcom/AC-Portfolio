import DescItem from "@/components/experience/DescItem";
import ExperienceItem from "@/components/experience/ExperienceItem";
import Container from "@/components/helpingCompo/container";
import SectionHeading from "@/components/sectionHeading/page";
import { localIcons } from "@/utils/data/social-icons";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Experience = () => {
  return (
    <Container className="min-h-screen flex-col gap-4 md:mb-16 mb-12">
      <SectionHeading sectionTitle="Experiences" />

      {/* TechMicra Internship */}
      <ExperienceItem
        defaultOpen={true}
        companyImg={localIcons["techmicra"]}
        companyName="TechMicra"
        role="Full-Stack Developer Intern"
        start="Jan 2025"
        end="Apr 2025"
        location="Ahmedabad, India"
        website="https://techmicra.co.in/"
        linkedin="https://www.linkedin.com/company/techmicra/"
        tech={[
          { name: "Python", src: "/Logos/python.png", href: "https://www.python.org/" },
          { name: "Django", src: "/Logos/django.png", href: "https://www.djangoproject.com/" },
          { name: "TailwindCSS", src: "/Logos/tailwind-css.png", href: "https://tailwindcss.com/" },
          { name: "GitHub", src: "/Logos/github.png", href: "https://github.com/" },
          { name: "Git", src: "/Logos/git.png", href: "https://git-scm.com/" },
        ]}
      >
        <DescItem>Served as team leader and senior developer for internal module development.</DescItem>
        <DescItem>Improved UI responsiveness and ensured aesthetic, interactive, and user-friendly designs[cite: 11].</DescItem>
        <DescItem>Enhanced database scalability and optimized SQL queries for performance.</DescItem>
        <DescItem>Contributed to Git/GitHub workflows, code reviews, and team collaboration.</DescItem>
      </ExperienceItem>

      {/* Payval Technologies Internship */}
      <ExperienceItem
        companyImg={localIcons["payval"]}
        companyName="Payval Technologies"
        role="Python Developer (Flask) Intern"
        start="Dec 2025"
        end="Present"
        location="Ahmedabad, India"
        website="https://www.payvaltech.com/"
        linkedin="https://www.linkedin.com/company/payvaltechnologies"
        tech={[
          { name: "Python", src: "/Logos/python.png", href: "https://www.python.org/" },
          { name: "Flask", src: "/Logos/flask.png", href: "https://flask.palletsprojects.com/en/stable/" },
          { name: "Tailwind-Css", src: "/Logos/tailwind-css.png", href: "https://tailwindcss.com/" },
          { name: "Github", src: "/Logos/github.png", href: "https://github.com/" },
          { name: "Git", src: "/Logos/git.png", href: "https://git-scm.com/" },
          { name: "MongoDB", src: "/Logos/mongodb.png", href: "https://www.mongodb.com/" },
        ]}
      >
        <DescItem>Developed a full-stack Expense Split Tracker application using Flask and MongoDB.</DescItem>
        <DescItem>Architected NoSQL database schemas and implemented seamless MongoDB integration with Flask backends.</DescItem>
        <DescItem>Built and managed CRUD operations to ensure data integrity for real-time user expenses.</DescItem>
        <DescItem>Designed responsive frontend interfaces using Tailwind CSS to enhance user experience.</DescItem>
        <DescItem>Performed data transformation and EDA to provide users with visual spending insights.</DescItem>
      </ExperienceItem>

      {/* BrainyBeam Internship */}
      <ExperienceItem
        companyImg={localIcons["brainybeam"]}
        companyName="BrainyBeam"
        role="Data Analyst Intern"
        start="May 2024"
        end="Aug 2024"
        location="Ahmedabad, India"
        website="https://www.brainybeam.com/"
        linkedin="https://www.linkedin.com/company/brainybeam-technologies-pvt-ltd/"
        tech={[
          { name: "Python", src: "/Logos/python.png", href: "https://www.python.org/" },
          { name: "Pandas", src: "/Logos/pandas-icon.png", href: "https://pandas.pydata.org/" },
          { name: "Jupyter", src: "/Logos/jupyter.png", href: "https://jupyter.org/" },
        ]}
      >
        <DescItem>Cleaned and transformed datasets using Python & Pandas to ensure data quality.</DescItem>
        <DescItem>Extracted business insights through detailed EDA processes.</DescItem>
        <DescItem>Developed a comprehensive business insights dashboard using Jupyter Notebook.</DescItem>
        <DescItem>Performed database CRUD operations to maintain data flow.</DescItem>
      </ExperienceItem>

      <Link
        href={"/works"}
        className="mt-6 py-2 px-4 border-[1px] border-neutral-300 dark:border-neutral-800 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:shadow-[inset_0px_1px_1px_1px_var(--color-neutral-300)] dark:hover:shadow-[inset_0px_1px_1px_1px_var(--color-neutral-700)] inline-flex items-center gap-2"
      >
        Explore all the work experiences 
        <MoveRight className="size-4" />
      </Link>

    </Container>
  );
};

export default Experience;