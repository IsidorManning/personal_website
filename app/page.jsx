import Link from 'next/link'
import AnimatedLink from '@/components/AnimatedLink'

export default function Home() {
  return (
    <main className="max-w-prose mt-20 h-screen w-screen mx-auto py-20 px-4 flex flex-col items-left">
      <h1 className="text-6xl mb-4">Konstade</h1>
      <p className="mb-8">
        This is my personal corner of the internet where I explore ideas and share notes.
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