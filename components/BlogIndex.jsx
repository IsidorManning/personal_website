'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function BlogIndex({ posts }) {
  const [order, setOrder] = useState('desc');

  const sorted = [...posts].sort((a, b) => {
    const d1 = new Date(a.date);
    const d2 = new Date(b.date);
    return order === 'asc' ? d1 - d2 : d2 - d1;
  });

  const categories = {};
  for (const post of sorted) {
    if (!categories[post.category]) categories[post.category] = [];
    categories[post.category].push(post);
  }

  return (
    <div className="max-w-prose mx-auto py-8">
      <div className="mb-6">
        <label className="mr-2">Sort:</label>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="desc">Newest first</option>
          <option value="asc">Oldest first</option>
        </select>
      </div>
      {Object.entries(categories).map(([cat, list]) => (
        <details key={cat} className="mb-4">
          <summary className="cursor-pointer font-semibold">{cat}</summary>
          <ul className="ml-4 mt-2 space-y-1">
            {list.map((p) => (
              <li key={p.slug} className="flex gap-2">
                <Link href={`/blog/${p.slug}`} className="underline">
                  {p.title}
                </Link>
                <span className="text-sm text-gray-500">{p.date}</span>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}