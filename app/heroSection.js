"use client"
import Socials from '@/components/hereroSection/socials'
import Image from 'next/image'
import React from 'react'
import CTAs from '@/components/hereroSection/ctas'
import HeadingAnimation from '@/components/hereroSection/headingAnim'

export const HeroSection = () => {
  return (
    <div className="mx-auto md:px-4 min-h-screen py-14">

      {/* Profile image */}
      <div className="relative inline-block">
        <Image
          src="/prof-pic.jpg"
          alt="Aryan's profile pic"
          height={120}
          width={120}
          className="size-30 md:size-32 rounded-full dark:bg-neutral-700 bg-neutral-300"
        />
      </div>

      <div className="container mx-auto mt-8">
        
        {/* Name + Title */}
        <HeadingAnimation />

        {/* Skills Row – Manual version */}
        <div className="mt-2 md:mt-8 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-xs md:text-lg text-neutral-500 whitespace-pre-wrap">
          
          <span>I build interactive web apps using </span>

          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center text-xs bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 md:py-1 md:px-2 p-1 rounded-md skill-inner-shadow text-black dark:text-white"
          >
            <Image src="/Logos/nextjs2-dark.svg" height={16} width={16} alt="Next.js" />
            <p className="ml-1 text-xs font-bold">Next.js</p>
          </a>

          <span>, </span>

          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center text-xs bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 md:py-1 md:px-2 p-1 rounded-md skill-inner-shadow text-black dark:text-white"
          >
            <Image src="/Logos/react.png" height={16} width={16} alt="React" />
            <p className="ml-1 text-xs font-bold">React</p>
          </a>

          <span>, </span>

          <a
            href="https://www.djangoproject.com/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center text-xs bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 md:py-1 md:px-2 p-1 rounded-md skill-inner-shadow text-black dark:text-white"
          >
            <Image src="/Logos/django.png" height={16} width={16} alt="Django" />
            <p className="ml-1 text-xs font-bold">Django</p>
          </a>

          <span>, integrated with </span>

          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center text-xs bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 md:py-1 md:px-2 p-1 rounded-md skill-inner-shadow text-black dark:text-white"
          >
            <Image src="/Logos/mongodb.png" height={16} width={16} alt="MongoDB" />
            <p className="ml-1 text-xs font-bold">MongoDB</p>
          </a>

          <span>, </span>

          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center text-xs bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 md:py-1 md:px-2 p-1 rounded-md skill-inner-shadow text-black dark:text-white"
          >
            <Image src="/Logos/python.png" height={16} width={16} alt="Python" />
            <p className="ml-1 text-xs font-bold">Python</p>
          </a>

          <span>. With a strong focus on </span>
          <b className="text-primary">UI</b>
          <span> design. Enthusiastic about </span>
          <b className="text-primary">smooth, animated, responsive web experiences.</b>
          <span>Driven by a keen eye for aesthetics and design.</span>
        </div>

        {/* CTAs */}
        <CTAs />

        {/* Socials */}
        <Socials />
      </div>
    </div>
  )
}
