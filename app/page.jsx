import AnimatedLink from '@/components/AnimatedLink'

export default function Home() {
  return (
    <main className="max-w-prose mt-20 h-screen w-screen mx-auto py-20 px-4 flex flex-col items-left">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-4">Konstade</h1>
      <p className="mb-8">
        My name is Isidor Manning and this is my personal website. I am curious about computer science, AI, mathematics, physics, and philosophy. This is a place for me and my passions.  
      </p>
      <ul className="space-y-2">
        <li>
          <AnimatedLink href="/blog">Blog </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/about">About Me</AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/imagery">Imagery </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/nyfic">Nyfic </AnimatedLink>
        </li>
      </ul>
    </main>
  )
}