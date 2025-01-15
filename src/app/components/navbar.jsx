import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="fixed w-screen">
        <div className="relative mx-auto w-fit bg-neutral-800/60 rounded-lg mt-8 px-3 text-sm md:text-base z-30">
          <ul className="flex items-center gap-4">
            <a href="/" className="py-3 px-2 font-rethink transition-colors">
              Home
            </a>
            <a href="/" className="py-3 px-2 font-rethink transition-colors">
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
