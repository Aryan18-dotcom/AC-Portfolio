'use client'
import Container from '@/components/helpingCompo/container'
import SectionHeading from '@/components/sectionHeading/page'
import Tooltip from '@/components/tooltip'
import { BrainCircuitIcon, GithubIcon, InstagramIcon, LinkedinIcon, LocateIcon, MailIcon, PhoneCallIcon, Sparkles } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'

const stackItems = [
  { name: "Next.js", srcLight: "/Logos/nextjs2-dark.svg", srcDark: "/Logos/nextjs2-light.svg", href: "https://nextjs.org/" },
  { name: "JavaScript", src: "/Logos/javascript.png", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Tailwind CSS", src: "/Logos/tailwind-css.png", href: "https://tailwindcss.com/" },
  { name: "GSAP", src: "/Logos/gsap.png", href: "https://greensock.com/gsap/" },

  { name: "Python", src: "/Logos/python.png", href: "https://www.python.org/" },
  { name: "Django", src: "/Logos/django.png", href: "https://www.djangoproject.com/" },

  { name: "Git", src: "/Logos/git.png", href: "https://git-scm.com/" },
  { name: "GitHub", src: "/Logos/github.png", href: "https://github.com/" },
  { name: "Postman", src: "/Logos/postman.png", href: "https://www.postman.com/" },
];

const variant = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 50, 0, -50, 0, 50, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};


const AboutMe = () => {
  const { theme } = useTheme();

  return (
    <Container className='flex h-fit flex-col mb-16'>
      <SectionHeading sectionHeader='About' sectionTitle='Me' />

      <div className='size-full grid grid-cols-2 gap-4 rounded-xl px-2 bg-neutral-100 dark:bg-neutral-900 shadow-[0_4px_18px_rgba(0,0,0,0.08)]'>
        <div className='col-span-2 grid grid-cols-3 gap-4'>
          {/* Image */}
          <div className='row-span-3 rounded-2xl p-1 overflow-hidden bg-neutral-200/60 dark:bg-neutral-800/60 border border-neutral-400/30 dark:border-neutral-800 shadow-[inset_1px_-2px_5px_1px_var(--color-neutral-300)]
          dark:shadow-[inset_0px_-2px_12px_3px_var(--color-neutral-700)]'>
            <Image
              src='/prof-pic.jpg'
              width={1200}
              height={1200}
              alt='Aryan Chheda'
              className='size-full object-cover bg-neutral-200/60 dark:bg-neutral-800/60 object-left rounded-xl'
            />
          </div>

          {/* Main Intro */}
          <motion.div whileHover="animate" initial="initial" className='col-span-2 row-span-3 bg-neutral-200/60 dark:bg-neutral-800/60 p-6 rounded-xl border border-neutral-400/30 dark:border-neutral-700 shadow-[inset_1px_-2px_5px_1px_var(--color-neutral-300)]
          dark:shadow-[inset_0px_-2px_12px_3px_var(--color-neutral-700)]'>
            <h3 className='text-3xl font-bold text-neutral-700 dark:text-neutral-300 tracking-tight'>Aryan Chheda</h3>
            <p className='mt-4 text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm'>
              <motion.span variants={variant} className='inline'>👋</motion.span> Hey there! ,I'am a Full-Stack developer who loves making things look awesome, animated and thats work like magic. <span className='inline-block mt-2'>Basically, I build useful stuff that feels genuinely fun to click on.</span>
            </p>
            <div className='flex items-center gap-4 mt-4 text-neutral-100 dark:text-neutral-900'>
              <motion.div initial={{ y: 0, scale: 1 }} whileHover={{ y: -2, scale: 1.02 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                <Link href="/" className='px-4 py-1 rounded-xl bg-neutral-800 dark:bg-neutral-200 border border-neutral-600/50 shadow-[inset_0px_-2px_6px_1px_rgba(0,0,0,0.3)]'>
                  Let's Connect
                </Link>
              </motion.div>
              <motion.div initial={{ y: 0, scale: 1 }} whileHover={{ y: -2, scale: 1.02 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                <Link href="/projects" className='px-4 py-1 rounded-xl bg-neutral-800 dark:bg-neutral-200 border border-neutral-600/50 shadow-[inset_0px_-2px_6px_1px_rgba(0,0,0,0.3)]'>
                  See Work
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* What I Do */}
          <div className='col-span-2 bg-neutral-200/60 dark:bg-neutral-800/60 p-5 rounded-xl border border-neutral-400/30 dark:border-neutral-700 shadow-[inset_1px_-2px_5px_1px_var(--color-neutral-300)]
          dark:shadow-[inset_0px_-2px_12px_3px_var(--color-neutral-700)]'>
            <h3 className='text-xl font-semibold text-neutral-700 dark:text-neutral-300'>What I Do</h3>
            <p className='text-neutral-500 dark:text-neutral-400 text-sm mt-2 leading-5'>
              My focus is on full-cycle product engineering and MVP delivery. I handle the complete development pipeline, specializing in architecting highly scalable and resilient backend systems. Simultaneously, I design and implement pixel-perfect, accessible user interfaces. I am committed to leveraging modern, optimized tooling and writing clean, maintainable code to ensure maximum performance, minimal load times, and a superior user experience.
            </p>
          </div>

          {/* Tech I Love */}
          <div className='bg-neutral-200/60 dark:bg-neutral-800/60 p-5 rounded-xl border border-neutral-400/30 dark:border-neutral-700 shadow-[inset_1px_-2px_5px_1px_var(--color-neutral-300)]
          dark:shadow-[inset_0px_-2px_12px_3px_var(--color-neutral-700)]'>
            <h3 className='text-xl font-semibold text-neutral-700 dark:text-neutral-300'>
              Tech I Love
            </h3>

            <div className='mt-4 flex flex-wrap gap-3 items-center'>
              {stackItems.map((item, index) => {
                const imageSrc =
                  item.srcDark && item.srcLight
                    ? theme === "dark"
                      ? item.srcLight
                      : item.srcDark
                    : item.src;

                return (
                  <Tooltip key={index} text={item.name} src={item.href}>
                    <Image
                      src={imageSrc}
                      alt={item.name}
                      width={28}
                      height={28}
                      className="cursor-pointer rounded-md object-contain"
                    />
                  </Tooltip>
                );
              })}
            </div>
          </div>

          <div className='col-span-3 grid grid-cols-4 gap-2'>

            {/* CONTACT DETAILS */}
            <div className='col-span-2 flex flex-col gap-4 bg-neutral-200/60 dark:bg-neutral-800/60 p-5 rounded-xl border border-neutral-400/30 dark:border-neutral-700 shadow-[inset_1px_-2px_5px_1px_var(--color-neutral-300)]
          dark:shadow-[inset_0px_-2px_12px_3px_var(--color-neutral-700)]'>
              <h4 className='text-lg font-semibold text-neutral-700 dark:text-neutral-300'>
                Contact Details
              </h4>

              <div className='flex flex-col gap-3 mt-2 text-neutral-500 dark:text-neutral-400 text-sm'>
                {/* Email */}
                <div className='flex items-center gap-2'>
                  <MailIcon className='text-neutral-500 size-4' />
                  <span>aryan.chheda03@gmail.com</span>
                </div>

                {/* Phone */}
                <div className='flex items-center gap-2'>
                  <PhoneCallIcon className='text-neutral-500 size-4' />
                  <span>+91 98765 43210</span>
                </div>

                {/* Location */}
                <div className='flex items-center gap-2'>
                  <LocateIcon className='text-neutral-500 size-4' />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </div>


            {/* SOCIAL LINKS */}
            <div className='col-span-2 flex flex-col gap-4 bg-neutral-200/60 dark:bg-neutral-800/60 p-5 rounded-xl border border-neutral-400/30 dark:border-neutral-700 shadow-[inset_1px_-2px_5px_1px_var(--color-neutral-300)]
          dark:shadow-[inset_0px_-2px_12px_3px_var(--color-neutral-700)]'>
              <h4 className='text-lg font-semibold text-neutral-700 dark:text-neutral-300'>
                Social Presence
              </h4>

              <div className='flex flex-col gap-3 text-neutral-500 dark:text-neutral-400 text-sm'>
                {/* GitHub */}
                <a href="https://github.com/Aryan" target="_blank" className='flex items-center gap-2 hover:opacity-80 transition'>
                  <GithubIcon className='text-neutral-500 size-4' />
                  <span>github.com/Aryan</span>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/aryan" target="_blank" className='flex items-center gap-2 hover:opacity-80 transition'>
                  <LinkedinIcon className='text-neutral-500 size-4' />
                  <span>linkedin.com/in/aryan</span>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/_aryan" target="_blank" className='flex items-center gap-2 hover:opacity-80 transition'>
                  <InstagramIcon className='text-neutral-500 size-4' />
                  <span>@_aryan</span>
                </a>

                {/* Portfolio */}
                <a href="https://aryan.dev" target="_blank" className='flex items-center gap-2 hover:opacity-80 transition'>
                  <BrainCircuitIcon className='text-neutral-500 size-4' />
                  <span>aryan.dev</span>
                </a>
              </div>
            </div>

          </div>

          {/* <div className='mt-4 p-3 bg-neutral-300 dark:bg-neutral-700 rounded-lg text-center shadow-md'>
              <Sparkles className='size-5 text-blue-500 dark:text-yellow-300 inline-block mr-1 animate-pulse-slow' />
              <span className='text-sm font-semibold text-gray-700 dark:text-gray-300'>Let's connect and build something beautiful together.</span>
            </div> */}

        </div>
      </div>
    </Container>
  )
}

export default AboutMe;