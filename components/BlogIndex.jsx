'use client';
import { useState } from 'react';
import AnimatedLink from './AnimatedLink.jsx';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion.jsx';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select.jsx';

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
    <div className="max-w-prose mx-auto py-8 h-screen mt-20">
      <div className="mb-6">
        <Select value={order} onValueChange={setOrder}>
          <SelectTrigger className="w-[160px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Newest first</SelectItem>
            <SelectItem value="asc">Oldest first</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(categories).map(([cat, list]) => (
          <AccordionItem key={cat} value={cat} className="mb-2">
            <AccordionTrigger className="font-semibold text-2xl">(+) {cat}</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-4 mt-2 space-y-1">
                {list.map((p) => (
                  <li key={p.slug} className="flex gap-2">
                    <AnimatedLink className="text-md" href={`/blog/${p.slug}`}>{p.title}</AnimatedLink>
                    <span className="text-sm text-gray-400">{p.date}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}