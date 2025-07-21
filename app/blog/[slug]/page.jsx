import { getPost } from '../posts/index.js';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug)
  if (!post) notFound()
  const Component = post.component
  return (
    <article className="mx-auto max-w-prose px-4 py-8 min-h-screen mt-20">
      <header className="mb-8 border-b border-muted pb-4">
        <h2 className=" text-3xl font-bold">{post.title}</h2>
        {post.date && (
          <p className="mt-1 text-sm text-accentgray">{post.date}</p>
        )}
      </header>
      <div className="post-content leading-relaxed">
        <Component />
      </div>
    </article>
  );
}