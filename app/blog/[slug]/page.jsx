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
    <article className="prose prose-invert mx-auto py-8">
      <h1 className="mb-4 font-bold text-3xl font-syne">
        {post.title}
      </h1>
      <Component />
    </article>
  );
}