import DescItem from "@/components/experience/DescItem";
import ExperienceItem from "@/components/experience/ExperienceItem";
import Container from "@/components/helpingCompo/container";
import SectionHeading from "@/components/sectionHeading/page";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Experience = () => {
  return (
    <Container className="min-h-screen flex-col gap-4 md:mb-16 mb-12">
      <SectionHeading sectionTitle="Experiences" />

      <ExperienceItem
        defaultOpen={true}
        companyImg="/Company/techmicra.png"
        companyName="Good Day :3"
        role="Founding Frontend Engineer"
        start="August 2025"
        end="Present"
        location="United States (Remote)"
        tech={[
          {
            name: "Next.js",
            srcLight: "/Logos/nextjs2-light.svg",
            srcDark: "/Logos/nextjs2-dark.svg",
          },

          {
            name: "TailwindCSS",
            src: "/Logos/tailwind-css.png",
          },

          {
            name: "Postman",
            src: "/Logos/postman.png",
          },

          {
            name: "MongoDB",
            src: "/Logos/mongodb.png",
          },

          {
            name: "GithHub",
            src: "/Logos/github.png",
          },
        ]}



      >
        <DescItem>Architected and developed the frontend infrastructure.</DescItem>
        <DescItem>Led codebase refactoring for scalability.</DescItem>
        <DescItem>Integrated and optimized backend APIs with caching.</DescItem>
        <DescItem>Improved UI consistency and platform performance.</DescItem>
      </ExperienceItem>

      <ExperienceItem
        companyImg="/company/google.png"
        companyName="Google"
        role="Frontend Developer Intern"
        start="Jan 2024"
        end="June 2024"
        location="Bengaluru, India"
        tech={[
          { name: "React", src: "/Logos/react.png" },
          { name: "JavaScript", src: "/Logos/javascript.png" },
          { name: "Material UI", src: "/Logos/groq.png" },
        ]}
      >
        <DescItem>Built internal dashboards used by 20k+ employees.</DescItem>
        <DescItem>Developed reusable UI components following Google’s design system.</DescItem>
        <DescItem>Improved rendering speed by 34% using memoization and lazy loading.</DescItem>
        <DescItem>Collaborated with senior engineers during weekly code reviews.</DescItem>
      </ExperienceItem>

      <ExperienceItem
        companyImg="/company/microsoft.png"
        companyName="Microsoft"
        role="Software Engineer Intern"
        start="July 2024"
        end="Dec 2024"
        location="Hyderabad, India"
        tech={[
          { name: "Azure", srcLight: "/Logos/azure-light.svg", srcDark: "/Logos/azure-dark.svg" },
          { name: ".NET", srcLight: "/Logos/dotnet-light.svg", srcDark: "/Logos/dotnet-dark.svg" },
          { name: "C#", srcLight: "/Logos/csharp-light.svg", srcDark: "/Logos/csharp-dark.svg" },
        ]}
      >
        <DescItem>Optimized cloud API performance by reducing payload size 40%.</DescItem>
        <DescItem>Worked on security-centric backend microservices.</DescItem>
        <DescItem>Contributed to internal tools used across global engineering teams.</DescItem>
        <DescItem>Integrated logging + monitoring using Azure Application Insights.</DescItem>
      </ExperienceItem>

      <Link
        href={"/works"}
        className="mt-6 py-2 px-4 border-[1px] border-neutral-300 dark:border-neutral-800 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:shadow-[inset_0px_1px_1px_1px_var(--color-neutral-300)] dark:hover:shadow-[inset_0px_1px_1px_1px_var(--color-neutral-700)] inline-flex items-center gap-2"
      >
        Explore all the work experiances 
        <MoveRight className="size-4" />
      </Link>

    </Container>
  );
};

export default Experience;
