const modules = {
  'weird-or-perfect': () => import('./weird-or-perfect.mdx'),
  'goals-as-directions': () => import('./goals-as-directions.mdx'),
  'marketing-is-hard': () => import('./marketing-is-hard.mdx'),
  'can-ai-think': () => import('./can-ai-think.mdx'),
  'infinite-knowledge': () => import('./infinite-knowledge.mdx'),
  'knowledge-synthesizing': () => import('./knowledge-synthesizing.mdx'),
  'my-anemoia': () => import('./my-anemoia.mdx'),
  'subtleties-scale': () => import('./subtleties-scale.mdx'),
  'what-about': () => import('./what-about.mdx'),
  'you-explore': () => import('./you-explore.mdx'),
  'rtfp-1': () => import('./rtfp-1.mdx'),

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