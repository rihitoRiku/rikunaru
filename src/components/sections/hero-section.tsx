"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { WordRotate } from "@/components/magicui/word-rotate";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HeroSection() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const lineRef = React.useRef(null);
  const isLineRefInView = useInView(lineRef);

  const handleMouseMove = (e: any) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-4">
          <div className="flex h-screen w-fit flex-col justify-center gap-12 px-6">
            <div className="w-full sm:w-[30rem]">
              <motion.h1
                className="mb-4 flex items-center text-6xl font-semibold text-neutral-100 sm:text-7xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                I'm
                <WordRotate className="ms-4" words={["Rafi", "Riku"]} />
              </motion.h1>
              <motion.p
                className="text-base text-neutral-200"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: 0.1,
                }}
              >
                Computer science fresh graduate who enthusiast in fullstack web
                development with expertise in React, Next.js, Node.js, Rest API,
                databases, and cloud environments.
              </motion.p>
            </div>
            {/* Resume button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
            >
              <button
                onMouseMove={handleMouseMove}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "./../../public/CV_Muhammad Rafi Shidiq_ATS.pdf";
                  link.download = "CV_Muhammad Rafi Shidiq_ATS.pdf";
                  link.click();
                }}
                className="border-trsp relative flex cursor-pointer overflow-hidden rounded-lg border bg-none px-6 py-3 text-neutral-200"
              >
                <span className="relative z-10">Download Resume</span>
                <span
                  className="absolute h-28 w-28 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-neutral-800 opacity-0 blur-2xl transition-opacity duration-300"
                  style={{
                    left: `${coords.x}px`,
                    top: `${coords.y}px`,
                    opacity: 1,
                  }}
                ></span>
              </button>
            </motion.div>
            {/* Mini icons links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="flex gap-4"
              data-fade="4"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/rihitoRiku"
                      data-state="closed"
                      className="cursor-newtab flex items-center justify-center rounded-sm p-0.5 text-neutral-500 transition-colors hover:text-neutral-400"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="mb-2 bg-neutral-800 text-white">
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/muhammadrafishidiq/"
                      data-state="closed"
                      className="cursor-newtab flex items-center justify-center rounded-sm p-0.5 text-neutral-500 transition-colors hover:text-neutral-400"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="3"
                          ry="3"
                        ></rect>
                        <line x1="8" y1="11" x2="8" y2="16"></line>
                        <line x1="8" y1="8" x2="8" y2="8.01"></line>
                        <path d="M12 16v-5a2 2 0 0 1 4 0v5"></path>
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="mb-2 bg-neutral-800 text-white">
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/@rikunaru"
                      data-state="closed"
                      className="cursor-newtab flex items-center justify-center rounded-sm p-0.5 text-neutral-500 transition-colors hover:text-neutral-400"
                    >
                      <span className="sr-only">Medium</span>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="7" cy="12" r="3"></circle>
                        <circle cx="17" cy="12" r="3"></circle>
                        <path d="M10 12h4"></path>
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="mb-2 bg-neutral-800 text-white">
                    <p>Medium</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/rikunaruu/"
                      data-state="closed"
                      className="cursor-newtab flex items-center justify-center rounded-sm p-0.5 text-neutral-500 transition-colors hover:text-neutral-400"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="mb-2 bg-neutral-800 text-white">
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://rikustore.vercel.app/"
                      data-state="closed"
                      className="cursor-newtab flex items-center justify-center rounded-sm p-0.5 text-neutral-500 transition-colors hover:text-neutral-400"
                    >
                      <span className="sr-only">Shop</span>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="mb-2 bg-neutral-800 text-white">
                    <p>Shop</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </div>
          {/* Framermotion Grid */}
          <div className="relative flex h-screen w-full flex-col items-center justify-center">
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="grid grid-cols-2 grid-rows-2">
                <motion.div
                  className="absolute top-1/2 left-0 h-[2px] w-[0%] border-t-2 border-white"
                  initial={{ width: "0%", opacity: 0.1 }}
                  animate={
                    isLineRefInView ? { width: "100%", opacity: 0.4 } : {}
                  }
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute top-0 left-1/2 h-[0%] w-[2px] border-l-2 border-dashed border-white"
                  initial={{ height: "0%", opacity: 0.1 }}
                  animate={
                    isLineRefInView ? { height: "100%", opacity: 0.4 } : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 flex h-[50%] w-[50%] items-center justify-center p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLineRefInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 3 }}
                >
                  <p className="text-center text-2xl font-semibold text-white">
                    Fullstack Developer
                  </p>
                </motion.div>
                <motion.div
                  className="absolute right-0 bottom-0 flex h-[50%] w-[50%] items-center justify-center p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLineRefInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  <p className="text-center text-2xl font-semibold text-white">
                    UI/UX Designer
                  </p>
                </motion.div>
                <motion.div
                  className="absolute top-0 left-0 flex h-[50%] w-[50%] items-center justify-center p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLineRefInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="absolute right-0 bottom-0 h-16 w-16 rounded-tl-full border-t-2 border-l-2 border-dashed opacity-40"></div>
                </motion.div>
                <motion.div
                  ref={lineRef}
                  className="absolute top-0 right-0 flex h-[50%] w-[50%] items-center justify-center p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLineRefInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 2 }}
                >
                  <p className="text-center text-2xl font-semibold text-white">
                    Front End Developer
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
