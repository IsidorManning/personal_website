import React from 'react';

export default function Footer() {
  return (
    <footer className="relative h-[50vh] bg-noir flex items-center justify-center overflow-hidden text-gentle">
      <span 
        className="leading-[500px] pointer-events-none select-none
        absolute inset-0 flex items-center justify-center text-[#C084FC] 
        font-syne font-bold text-[8vw] text-mist whitespace-nowrap">
        ALL KONSTADE
      </span>
      <div className="relative z-10 text-center space-y-1 font-bold">
        <p className="text-sm">isidormanning@gmail.com</p>
        <p>©2025</p>
      </div>
    </footer>
  );
}