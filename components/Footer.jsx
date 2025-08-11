import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative h-[50vh] bg-noir flex items-center justify-center overflow-hidden text-gentle">
      <span 
        className="leading-[500px] pointer-events-none select-none
        absolute inset-0 flex items-center justify-center text-[#C084FC] 
        font-syne font-bold text-[8vw] text-mist whitespace-nowrap">
        ALL KONSTADE
      </span>
      <div className="relative z-10 text-center text-black space-y-1 font-bold">
        <p>©2025</p>
      </div>
      <div className='bg-[#C084FC] absolute bottom-0 flex items-center justify-center w-full h-7'>
        <Link
          href='https://github.com/IsidorManning/'
          className='hover:scale-[1.05] transition'
        >
          <Image 
            width={25}
            height={25}
            alt='Github Profile'
            src="/brand-github.svg"
            className='w-6 h-6 text-white '
          />
        </Link>
        <Link
          href='mailto:isidormanning@gmail.com'
          className='ml-2 hover:scale-[1.05] transition'
        >
          <Image 
            width={25}
            height={25}
            alt='Github Profile'
            src="/mail.svg"
            className='w-6 h-6 text-white font-white white c-white '
          />
        </Link>

      </div>
    </footer>
  );
}