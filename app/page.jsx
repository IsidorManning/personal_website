import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-prose mx-auto py-20 px-4 bg-obsidian">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <p className="mb-8">
        This is my personal corner of the internet where I explore ideas and share notes.
      </p>
      <ul className="space-y-2">
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </main>
  )
}