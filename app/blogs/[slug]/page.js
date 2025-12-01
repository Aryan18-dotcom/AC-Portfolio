import NavBar from '@/app/navBar';
import Container from '@/components/helpingCompo/container';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import MdxRenderer from '@/components/MDX/MdxRenderer';

const BLOGS_PATH = path.join(process.cwd(), 'blogs'); 

export const getBlogBySlug = async (slug) => {
  const fullPath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, 'utf8');

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
  });

  return mdxSource;
};

export default async function SingleBlog({ params }) {
  
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    return <p>Error: No slug provided</p>;
  }

  let mdxSource;
  try {
    mdxSource = await getBlogBySlug(slug);
    
  } catch (err) {
    console.error(`Error loading blog: ${slug}`, err); 
    
    return (
      <Container className="min-h-screen mx-auto max-w-3xl flex flex-col items-center">
        <NavBar />
        <div className="max-w-2xl text-center py-20">
          <h1 className="text-3xl font-bold">Blog Not Found</h1>
          <p className="text-neutral-500 mt-2">
            The requested blog ({slug}) does not exist.
          </p>
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

  return (
    <Container className="min-h-screen max-w-3xl mx-auto flex-col py-10">
      <NavBar />
      <div className="py-10">
        <MdxRenderer source={mdxSource} />
      </div>
    </Container>
  );
}