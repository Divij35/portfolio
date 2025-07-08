'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  slug: string;
  brief: string;
  readTimeInMinutes: number;
  coverImage: {
    url: string;
  };
};

export default function HashnodeSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/hashnode')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-slate-300 mb-6">All Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="rounded-xl overflow-hidden bg-slate-800 text-white shadow-lg hover:shadow-xl transition">
            {post.coverImage?.url && (
              <Image
                src={post.coverImage.url || ''}
                alt={post.title}
                width={600}
                height={300}
                className="object-cover w-full h-48"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-slate-400 mb-2">{post.brief}</p>
              <p className="text-xs text-slate-500 mb-3">⏱️ {post.readTimeInMinutes} min read</p>
              <Link
                href={`https://divij.hashnode.dev/${post.slug}`}
                target="_blank"
                className="text-purple-400 hover:underline text-sm"
              >
                Read Full →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
