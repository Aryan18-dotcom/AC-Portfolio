"use client";

import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

const components = {
  h1: (props) => <h1 className="text-4xl font-bold my-4 text-neutral-200" {...props} />,
  p: (props) => <p className="text-lg leading-relaxed mb-4 text-neutral-400" {...props} />,
};

export default function MdxRenderer({ source }) {
  if (!source) {
    return (
        <div className="py-10 text-center text-red-500">
            <h1>Error: MDX Source not found.</h1>
        </div>
    );
  }
  
  return <MDXRemote {...source} components={components} />;
}