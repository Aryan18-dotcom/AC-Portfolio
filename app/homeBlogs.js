"use client";
import Container from "@/components/helpingCompo/container";
import SectionHeading from "@/components/sectionHeading/page";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Pin } from "lucide-react";


const blogs = [
  {
    id: 1,
    title: "Mastering GSAP Scroll Animations in Modern UI",
    image: "/WebPhoto/p1.png",
    date: "14.08.2025",
    link: "/",
    isPinned: true,
  },
  {
    id: 2,
    title: "How I Designed a Fully Animated Portfolio in Next.js",
    image: "/WebPhoto/p3.png",
    date: "02.08.2025",
    link: "/",
    isPinned: true,
  },
  {
    id: 3,
    title: "Understanding Tailwind CSS at a Pro Level",
    image: "/WebPhoto/p5.png",
    date: "28.07.2025",
    link: "/",
    isPinned: true,
  },
  {
    id: 4,
    title: "Building Scalable Backend Systems with Django",
    image: "/WebPhoto/p7.png",
    date: "19.07.2025",
    link: "/",
    isPinned: false,
  },
];


const BlogSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 p-2 bg-neutral-200 rounded-2xl animate-pulse">
      <div className="w-full h-40 bg-neutral-300 rounded-xl" />
      <div className="flex flex-col gap-2 p-2">
        <div className="h-4 w-2/3 bg-neutral-300 rounded"></div>
        <div className="h-3 w-1/3 bg-neutral-300 rounded"></div>
      </div>
    </div>
  );
};

const HomeBlogs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay (remove when using real API)
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="flex h-fit flex-col mb-16">
      <SectionHeading sectionHeader="Featured" sectionTitle="Blogs" />

      <div className="grid grid-cols-2 py-6 px-2 gap-4">
        {/* If Loading → Show Skeletons */}
        {loading &&
          [...Array(3)].map((_, i) => <BlogSkeleton key={i} />)}

        {/* If Loaded → Show Blogs */}
        {!loading &&
          blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
            >
              <Link
                href={blog.link}
                className="relative group flex flex-col gap-2 p-2 bg-neutral-200 dark:bg-neutral-800 rounded-2xl shadow-[inset_0px_-2px_5px_1px_var(--color-neutral-300)] dark:shadow-[inset_0px_-2px_5px_1px_var(--color-neutral-700)] transition hover:scale-[1.02]"
              >
                {/* PIN ICON */}
                {blog.isPinned && (
                  <div className="bg-neutral-300 dark:bg-neutral-700 p-1 flex items-center absolute top-2 z-10 right-2 rounded-lg">
                    <Pin
                      size={18}
                      className="text-neutral-700 dark:text-neutral-300 rotate-45"
                    />
                  </div>
                )}

                {/* Image */}
                <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
                  <Image
                    src={blog.image}
                    width={1200}
                    height={1200}
                    alt={blog.title}
                    className="object-cover size-full rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 p-2">
                  <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover:underline">
                    {blog.title}
                  </h3>

                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm text-neutral-600 dark:text-neutral-400">
                      <time>{blog.date}</time>
                    </dd>
                  </dl>
                </div>
              </Link>
            </motion.div>
          ))}

      </div>

      <Link
        href={"/blogs"}
        className="mt-6 py-2 px-4 border-[1px] border-neutral-300 dark:border-neutral-800 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:shadow-[inset_0px_1px_1px_1px_var(--color-neutral-300)] dark:hover:shadow-[inset_0px_1px_1px_1px_var(--color-neutral-700)] inline-flex items-center gap-2"
      >
        See all the Blogs
        <MoveRight className="size-4" />
      </Link>
    </Container>
  );
};

export default HomeBlogs;