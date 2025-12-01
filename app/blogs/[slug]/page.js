import NavBar from '@/app/navBar';
import Container from '@/components/helpingCompo/container';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import MdxRenderer from '@/components/MDX/MdxRenderer';

// Define the content directory path
const BLOGS_PATH = path.join(process.cwd(), 'blogs'); 

export const getBlogBySlug = async (slug) => {
  const fullPath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, 'utf8');

  // Serialize the content for client-side consumption
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
  });

  return mdxSource; // This returns a serializable object, not a component.
};

// This is an async Server Component.
export default async function SingleBlog({ params }) {
  
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    // Standard error handling
    return <p>Error: No slug provided</p>;
  }

  let mdxSource;
  try {
    // FIX: Get serializable source using a server utility
    mdxSource = await getBlogBySlug(slug);
    
  } catch (err) {
    // This handles file not found and compilation errors
    console.error(`Error loading blog: ${slug}`, err); 
    
    // Fallback UI
    return (
      <Container className="min-h-screen flex flex-col items-center justify-center py-20">
        <NavBar />
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold">Blog Not Found</h1>
          <p className="text-neutral-500 mt-2">
            The requested blog ({slug}) does not exist.
          </p>
          <p className="text-neutral-500 mt-2 text-sm text-red-500">Error: {err.message}</p>
          <Link
            href="/blogs"
            className="mt-4 inline-block px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Back to Blogs
          </Link>
        </div>
      </Container>
    );
  }

  // Pass the serializable MDX source to the client component for safe rendering
  return (
    <Container className="min-h-screen max-w-3xl mx-auto flex-col py-10">
      <NavBar />
      <div className="py-10">
        <MdxRenderer source={mdxSource} />
      </div>
    </Container>
  );
}