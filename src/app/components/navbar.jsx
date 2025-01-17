"use client";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="relative mx-auto w-fit bg-neutral-800/60 backdrop-blur-sm rounded-lg mt-8 px-3 text-sm md:text-base">
          <ul className="flex items-center gap-4 font-rethink">
            <a href="/" className="py-3 px-2 transition-colors">
              Career
            </a>
            <a href="/atelier" className="py-3 px-2 transition-colors">
              Atelier
            </a>
            <a href="/" className="py-3 px-2 transition-colors">
              Caleidoscope
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
