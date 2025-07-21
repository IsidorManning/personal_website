import BlogIndex from '@/components/BlogIndex.jsx';
import { getAllPosts } from './posts/index.js';

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogIndex posts={posts} />;
}