const modules = {
  'weird-or-perfect': () => import('./weird-or-perfect.mdx'),
  'goals-as-directions': () => import('./goals-as-directions.mdx'),
  'marketing-is-hard': () => import('./marketing-is-hard.mdx'),
};

export async function getAllPosts() {
  const entries = await Promise.all(
    Object.entries(modules).map(async ([slug, loader]) => {
      const mod = await loader();
      const meta = mod.metadata || {};
      return { slug, ...meta };
    })
  );
  return entries;
}

export async function getPost(slug) {
  const loader = modules[slug];
  if (!loader) return null;
  const mod = await loader();
  return { slug, component: mod.default, ...(mod.metadata || {}) };
}