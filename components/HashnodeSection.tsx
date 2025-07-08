'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Post = {
  title: string;
  brief: string;
  slug: string;
  readTimeInMinutes: number;
  coverImage: {
    url: string;
  } | null;
  dateAdded: string;
};

export default function HashnodeSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/hashnode')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 w-full">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 2).map((post, index) => (
          <Link
            key={index}
            href={`https://divij.hashnode.dev/${post.slug}`}
            target="_blank"
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            {post.coverImage?.url && (
              <Image 
              src={post.coverImage.url} 
              alt={post.title}
              objectFit='cover'
              width={600}
              height={300}
              className="w-full h-52 object-cover" />
            )}
            <div className="p-4 bg-slate-800 text-white">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-slate-400">{post.brief}</p>
              <p className="text-xs text-slate-500 mt-2">⏱️ {post.readTimeInMinutes} min read</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
  <Link
    href="/blog"
    className="bg-gradient-to-r from-[#393b67] to-[#6c2dff] text-white px-6 py-3 rounded shadow hover:shadow-lg transition"
  >
    Read more
  </Link>
</div>

    </div>
  );
}
