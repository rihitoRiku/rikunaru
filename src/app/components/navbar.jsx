import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="relative mx-auto w-fit bg-neutral-800/60 backdrop-blur-sm rounded-lg mt-8 px-3 text-sm md:text-base">
          <ul className="flex items-center gap-4">
            <a href="/" className="py-3 px-2 font-rethink transition-colors">
              Career
            </a>
            <a href="/atelier" className="py-3 px-2 font-rethink transition-colors">
              Atelier
            </a>
            <a href="/" className="py-3 px-2 font-rethink transition-colors">
              Caleidoscope
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};
