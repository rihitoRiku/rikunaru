"use client"
import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-full">
        <div className="relative mx-auto mt-8 w-fit rounded-lg bg-neutral-800/60 px-3 text-sm backdrop-blur-sm md:text-base">
          <ul className="font-rethink flex items-center gap-4">
            <Link prefetch href="/" className="px-2 py-3 transition-colors">
              Career
            </Link>
            <Link
              prefetch
              href="/atelier"
              className="px-2 py-3 transition-colors"
            >
              Atelier
            </Link>
            <Link href="/caleidoscop" className="px-2 py-3 transition-colors">
              Caleidoscop
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
