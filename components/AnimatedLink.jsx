'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function AnimatedLink({ href, className, children, ...props }) {
  return (
    <Link
      href={href}
      className={cn(
        'relative inline-block transition-colors duration-200 after:absolute after:text-[#C084FC] after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}