"use client";
import Container from "@/components/helpingCompo/container";
import SectionHeading from "@/components/sectionHeading/page";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Pin } from "lucide-react";
import BLOGS from "@/data/blogs";

const HomeBlogs = () => {
  const [loading, setLoading] = useState(true);

  // --- Filtering logic ---
  const pinned = BLOGS.filter((b) => b.isPinned);
  const unpinned = BLOGS.filter((b) => !b.isPinned);

  // Take first 4 → pinned first, then fill with unpinned
  const blogs = [...pinned, ...unpinned].slice(0, 4);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const BlogSkeleton = () => (
    <div className="flex flex-col gap-2 p-2 bg-neutral-200 rounded-2xl animate-pulse">
      <div className="w-full h-40 bg-neutral-300 rounded-xl" />
      <div className="flex flex-col gap-2 p-2">
        <div className="h-4 w-2/3 bg-neutral-300 rounded"></div>
        <div className="h-3 w-1/3 bg-neutral-300 rounded"></div>
      </div>
    </div>
  );

  return (
    <Container className="flex h-fit flex-col mb-16">
      <SectionHeading sectionHeader="Featured" sectionTitle="Blogs" />

      {/* --- RESPONSIVE GRID CHANGE: grid-cols-1 on small, md:grid-cols-2 on medium+ --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-6 px-2 gap-4">

        {/* Skeleton Loading */}
        {loading &&
          // Changed Array(3) to Array(4) to better represent the final blog count
          [...Array(4)].map((_, i) => <BlogSkeleton key={i} />)} 

        {/* Render Blogs */}
        {!loading &&
          blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
            >
              <Link
                href={blog.link || "#"}
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
                      <time>{blog.date || "Coming Soon"}</time>
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