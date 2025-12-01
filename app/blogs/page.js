import Container from '@/components/helpingCompo/container';
import NavBar from '../navBar';
import Loader from '../loader';
import Link from 'next/link';
import { Calendar, Clock, Link2, Bell } from 'lucide-react';
import BLOGS from '@/data/blogs';

const BlogCard = ({ blog }) => {
  return (
    <div
      className="
        bg-neutral-200/80 dark:bg-neutral-800 rounded-xl shadow-lg 
        border border-neutral-200 dark:border-neutral-700 
        transition-all duration-300 hover:shadow-2xl 
        dark:hover:shadow-neutral-700/50 overflow-hidden 
        flex flex-col group relative
      "
    >
      {/* Blog Thumbnail */}
      <div className="relative w-full h-48 lg:h-56 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-full transition duration-500 group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">

        {/* Meta Row */}
        <div className="flex items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={13} /> {blog.date || "Jan 2025"}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} /> {blog.readTime || "3 min read"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors leading-snug">
          {blog.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 my-3 line-clamp-3">
          {blog.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="
                px-2 py-0.5 text-[11px] font-medium rounded-full 
                bg-blue-500/10 text-blue-500 
                dark:bg-blue-300/10 dark:text-blue-300
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="mt-auto pt-4 border-t border-neutral-300/50 dark:border-neutral-700 flex flex-wrap items-center gap-3">

          {/* External Link */}
          {blog.link && (
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 
                dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 
                hover:bg-blue-100 dark:hover:bg-blue-900/40 
                transition-all text-sm
              "
            >
              <Link2 size={15} />
              Full Article
            </a>
          )}

          {/* Social */}
          {blog.social && (
            <a
              href={blog.social}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-50 
                dark:bg-pink-900/20 text-pink-600 dark:text-pink-300 
                hover:bg-pink-100 dark:hover:bg-pink-900/40 
                transition-all text-sm
              "
            >
              <Bell size={15} />
              Social
            </a>
          )}

          {/* In-depth Blog Page */}
          <Link
            href={`/blogs/${blog.slug}`}
            className="
              w-full sm:w-auto mt-1 flex items-center gap-2 text-sm font-medium 
              text-blue-600 dark:text-blue-400 hover:text-blue-800 
              dark:hover:text-blue-200 transition-colors justify-end
            "
          >
            Read in Depth
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <Container className="min-h-screen max-w-3xl mx-auto flex-col">
      <Loader />
      <NavBar />

      <div className="py-16 space-y-10">

        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            My Blogs
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
            Thoughts, stories, experiences, and technical breakdowns from my development journey.
          </p>
          <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Grid (same layout as old Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-7xl">
          {BLOGS.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>

      </div>
    </Container>
  );
};

export default Blogs;
