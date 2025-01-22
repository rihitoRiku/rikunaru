"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Tooltip, Timeline, Tag } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import MySvg from "./../../public/myname.svg";
import meshBackground from "@/styles/background.module.css";
import { BlurFade } from "@/components/ui/blur-fade";
import { WordRotate } from "@/components/ui/word-rotate";

export default function Home() {
  const slugs = [
    "html5",
    "css3",
    "sass", // SCSS is represented as 'sass'
    "javascript", // JavaScript ES6 can use the default 'javascript' slug
    "typescript",
    "php",
    "python",
    "react",
    "nextdotjs", // Next.js
    "vuejs", // Vue
    "vite",
    "restapi", // Custom icon for Rest API if supported, otherwise use 'api'
    "mysql",
    "mongodb",
    "laravel",
    "tailwindcss", // Tailwind
    "mui", // Material-UI
    "antdesign", // Ant Design
    "bootstrap",
    "framermotion", // Framer Motion
    "git", // Git & GitHub can use 'git'
    "figma",
    "cloudinary",
    "miro",
    "trello",
    "vercel",
    "googlecloud", // Google Cloud Platform
    "canva",
    "firebase",
    "agile", // Agile Methodologies, if supported
    "microsoftoffice", // MS Office
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  const svgRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  const isSvgInView = useInView(svgRef, { once: true });
  const isLineRefInView = useInView(lineRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });
  const isTextInView2 = useInView(textRef2, { once: true });
  const isTextInView3 = useInView(textRef3, { once: true });
  const isEducationInView = useInView(educationRef, { once: true });
  const isExperienceInView2 = useInView(experienceRef, { once: true });

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const [arrow, setArrow] = useState("Show");
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.querySelectorAll(".ant-timeline-item-tail").forEach((el) => {
        el.style.borderLeft = "1px solid #16a34a";
      });
    }
  }, []);

  return (
    <>
      {/* Background */}
      <div
        className={`${meshBackground.background} absolute left-0 top-0 -z-10 h-screen w-full`}
      />
      <div className="w-full font-rethink">
        <div className="mx-auto max-w-screen-xl text-primarytext">
          {/* Main section */}
          <div className="">
            <div className="flex flex-col gap-0 lg:flex-row lg:gap-4">
              <div className="flex h-screen w-fit flex-col justify-center gap-12 px-6">
                <div className="w-full sm:w-[30rem]">
                  <motion.h1
                    className="mb-4 flex items-center text-6xl font-semibold sm:text-7xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    I'm
                    <WordRotate className="ms-4" words={["Rafi", "Riku"]} />
                  </motion.h1>
                  <motion.p
                    className="text-base text-gray-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      delay: 0.1,
                    }}
                  >
                    Computer science fresh graduate who enthusiast in fullstack
                    web development with expertise in React, Next.js, Node.js,
                    Express, databases, and cloud environments.
                  </motion.p>
                </div>
                {/* Resume button */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
                >
                  <Tooltip
                    styles={{ body: { color: "white" } }}
                    color="#1e293b"
                    placement="right"
                    title="Download Resume"
                    arrow={mergedArrow}
                  >
                    <button
                      onMouseMove={handleMouseMove}
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href =
                          "./../../public/CV_Muhammad Rafi Shidiq_ATS.pdf";
                        link.download = "CV_Muhammad Rafi Shidiq_ATS.pdf";
                        link.click();
                      }}
                      className="relative flex overflow-hidden rounded-lg border border-borderColorTransparent bg-none px-6 py-3 text-white"
                    >
                      <span className="relative z-10">My Resume</span>
                      <span
                        className="absolute h-28 w-28 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-800 opacity-0 blur-2xl transition-opacity duration-300"
                        style={{
                          left: `${coords.x}px`,
                          top: `${coords.y}px`,
                          opacity: 1,
                        }}
                      ></span>
                      <ArrowDownOutlined className="z-10 ms-2 mt-1" />
                    </button>
                  </Tooltip>
                </motion.div>
                {/* Mini icons link */}
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
                  <Tooltip
                    styles={{ body: { color: "white" } }}
                    color="#1e293b"
                    placement="bottom"
                    title="GitHub"
                    arrow={mergedArrow}
                  >
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
                  </Tooltip>
                  <Tooltip
                    styles={{ body: { color: "white" } }}
                    color="#1e293b"
                    placement="bottom"
                    title="LinkedIn"
                    arrow={mergedArrow}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/mrfshidiq/"
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
                  </Tooltip>
                  <Tooltip
                    styles={{ body: { color: "white" } }}
                    color="#1e293b"
                    placement="bottom"
                    title="Medium"
                    arrow={mergedArrow}
                  >
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
                  </Tooltip>
                  <Tooltip
                    styles={{ body: { color: "white" } }}
                    color="#1e293b"
                    placement="bottom"
                    title="Instagram"
                    arrow={mergedArrow}
                  >
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
                  </Tooltip>
                </motion.div>
              </div>
              {/* Framermotion Grid */}
              <div className="relative flex h-screen w-full flex-col items-center justify-center bg-zinc-950 lg:bg-transparent">
                <div className="relative flex h-full w-full items-center justify-center">
                  {/* Grid Container */}
                  <div className="grid grid-cols-2 grid-rows-2">
                    <motion.div
                      className="absolute left-0 top-1/2 h-[2px] w-[0%] border-t-2 border-white"
                      initial={{ width: "0%", opacity: 0.1 }}
                      animate={
                        isLineRefInView ? { width: "100%", opacity: 0.4 } : {}
                      }
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute left-1/2 top-0 h-[0%] w-[2px] border-l-2 border-dashed border-white"
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
                        Data Analyst
                      </p>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 right-0 flex h-[50%] w-[50%] items-center justify-center p-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isLineRefInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 1, delay: 2.5 }}
                    >
                      <p className="text-center text-2xl font-semibold text-white">
                        UI/UX Designer
                      </p>
                    </motion.div>
                    <motion.div
                      className="absolute left-0 top-0 flex h-[50%] w-[50%] items-center justify-center p-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isLineRefInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-full border-l-2 border-t-2 border-dashed border-transparent border-white opacity-40"></div>
                    </motion.div>
                    <motion.div
                      ref={lineRef}
                      className="absolute right-0 top-0 flex h-[50%] w-[50%] items-center justify-center p-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isLineRefInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 1, delay: 2 }}
                    >
                      <p className="text-center text-2xl font-semibold text-white">
                        Fullstack Developer
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {/* Signature */}
            <div className="relative px-6">
              <div className="mx-auto mt-12 max-w-[38rem] text-center text-secondarytext">
                <div
                  ref={svgRef}
                  className="flex w-full items-center justify-center"
                >
                  <motion.div
                    className="relative h-[5rem] w-[24rem] sm:h-[8rem] sm:w-[30rem]"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={isSvgInView ? { clipPath: "inset(0 0 0 0)" } : {}}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                  >
                    <Image
                      src={MySvg}
                      alt="My SVG Image"
                      layout="fill"
                      objectFit=""
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="flex flex-col items-center gap-4"
                  ref={textRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                >
                  <p>
                    Hello! You can call me{" "}
                    <strong className="text-primarytext">Rafi</strong> I am a
                    Software Engineer specializing in fullstack web development,
                    dedicated to staying updated in the ever-evolving tech
                    landscape and bringing innovative solutions to the table.
                  </p>
                  <p>
                    I was born in 2002 in Purwakarta, Indonesia. Recently
                    graduated with a degree in Computer Science from the
                    University of Pendidikan Indonesia (UPI)
                  </p>
                  <p>here are my current favorite tech stacks:</p>
                  {/* Techstacks */}
                  <div className="flex w-max flex-wrap gap-4 text-primarytext">
                    <div>
                      <button
                        className="default-ring rounded-lg"
                        data-state="closed"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          role="img"
                          viewBox="0 0 24 24"
                          className="size-8"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button
                        className="default-ring animate-spin-slow rounded-lg"
                        data-state="closed"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          role="img"
                          viewBox="0 0 24 24"
                          className="size-8"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button
                        className="default-ring rounded-lg"
                        data-state="closed"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          role="img"
                          viewBox="0 0 24 24"
                          className="size-8"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button
                        className="default-ring rounded-lg"
                        data-state="closed"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          role="img"
                          viewBox="0 0 24 24"
                          className="size-8"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* What I'm up to now */}
              <motion.div
                className="w-full"
                ref={textRef2}
                initial={{ opacity: 0, y: 50 }}
                animate={isTextInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              >
                <div
                  className="mx-auto mt-12 flex w-full max-w-screen-lg flex-col items-center justify-center gap-8 rounded-xl border border-gray-400 p-12 md:flex-row"
                  style={{ borderColor: "rgba(107, 114, 128, 0.2)" }}
                >
                  <p className="flex-[1] text-2xl font-semibold">
                    What I'm up to now
                  </p>
                  <ul className="flex-[2] list-inside list-disc space-y-1.5 text-sm text-secondarytext">
                    <li>
                      Expertise in front-end development, building responsive
                      and dynamic web applications.
                    </li>
                    <li>
                      Knowledge in back-end with Node.js and integrating
                      back-end systems.
                    </li>
                    <li>
                      Experience in UI/UX design, using Figma to craft
                      user-friendly and intuitive interfaces.
                    </li>
                    <li>
                      Proficient in Excel and Phyton for data analysis,
                      automation, and visualization.
                    </li>
                  </ul>
                </div>
              </motion.div>
              {/* Skills */}

              <motion.div
                className="mt-12 flex flex-col items-center text-secondarytext"
                ref={textRef3}
                initial={{ opacity: 0, y: 50 }}
                animate={isTextInView3 ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              >
                <p className="text-base">several tools I'm experienced with:</p>
                <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden">
                  <div style={{ transform: "scale(1.3)" }}>
                    <IconCloud images={images} />
                  </div>
                </div>
                {/* <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm">
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  HTML5
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  CSS3
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  SCSS
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  JavaScript ES6
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  TypeScript
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  PHP
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Python
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  React
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Next.js
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Vue
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Vite
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Rest API
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  MySQL
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  MongoDB
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Laravel
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Tailwind
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  MUI
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  AntD
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Bootstrap
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Framer Motion
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Git & GitHub
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Figma
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Cloudinary
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Miro
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Trello
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Vercel
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Google Cloud Platform
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Canva
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Firebase
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Agile Methodologies (Scrum)
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Ms.Office (Word, Powerpoint, Excel)
                </span>
              </div> */}

                <p className="mt-6 text-base">
                  some of the soft skills I've mastered:
                </p>
                <section id="header">
                  <BlurFade delay={0.25 * 2} inView direction="right">
                    <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm">
                      <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                        Time Management
                      </span>
                      <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                        Critical & Analytical Thinking
                      </span>
                      <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                        Communication
                      </span>
                      <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                        Problem Solving
                      </span>
                      <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                        Adaptability
                      </span>
                      <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                        Fast Learning
                      </span>
                      <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                        Project Management
                      </span>
                      <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                        Leadership
                      </span>
                    </div>
                  </BlurFade>
                </section>
                {/* <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm">
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Time Management
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Critical & Analytical Thinking
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Communication
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Problem Solving
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Adaptability
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Fast Learning
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Project Management
                </span>
                <span className="rounded-md border border-borderColorTransparent px-2 py-1">
                  Leadership
                </span>
              </div> */}
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div className="">
            <motion.div
              className="relative mt-28"
              ref={educationRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <div className="relative z-0">
                {/* Background Text */}
                <div
                  className="absolute inset-0 flex items-start justify-center text-7xl font-bold text-zinc-800/20 md:text-9xl"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    filter: "blur(5px)",
                  }}
                >
                  EDUCATION
                </div>
                {/* Background Image */}
                <div className="absolute inset-0 flex w-full items-start justify-center text-zinc-800/20">
                  <Image
                    src="/bnwupi.png"
                    width={350}
                    height={350}
                    alt="LogoUPI"
                    style={{ filter: "grayscale(100%)", opacity: 0.02 }}
                  />
                </div>

                <div className="relative flex w-full flex-col items-start px-4 pt-16 lg:px-8">
                  {/* Education Header */}
                  <div className="relative z-0 text-white">
                    <div className="text-center text-xl font-semibold lg:text-3xl">
                      <div className="mb-2 w-fit rounded-xl border border-borderColorTransparent bg-zinc-950 p-2">
                        <GiGraduateCap className="text-5xl" />
                      </div>
                      <span>Education</span>
                    </div>
                  </div>
                  {/* New Content - Desktop */}
                  <div className="relative mt-3 w-full gap-8 md:flex">
                    {/* Left Column */}
                    <div className="w-full md:max-w-[36rem]">
                      {/* Education Description */}
                      <div className="w-full text-justify font-light text-secondarytext md:max-w-[36rem]">
                        <p>
                          As a fresh graduate of{" "}
                          <strong className="text-primarytext">
                            Computer Science
                          </strong>{" "}
                          (S.Kom.) from{" "}
                          <strong className="text-primarytext hover:text-white">
                            <a
                              target="_blank"
                              href="https://www.topuniversities.com/universities/universitas-pendidikan-indonesia"
                            >
                              Indonesia University of Education (UPI)
                            </a>
                          </strong>{" "}
                          (2020 - 2024), I have developed a strong foundation in
                          programming, covering algorithms, object-oriented
                          programming (OOP), databases, and web development.
                          Graduating with a{" "}
                          <strong className="text-primarytext">
                            GPA 3.85 of 4.00
                          </strong>{" "}
                          (Cumlaude), I balanced academic coursework with
                          hands-on experience, taking on the role of an
                          assistant lecturer and actively collaborating on
                          projects. These experiences have enhanced both my
                          technical expertise and teamwork skills, preparing me
                          to contribute effectively in a professional setting.
                        </p>
                      </div>

                      {/* New Content - Desktop Only */}
                      <div className="mt-8 hidden text-secondarytext md:block">
                        <div className="">
                          <h3 className="mb-4 text-xl font-semibold text-primarytext">
                            Competition
                          </h3>
                          <Timeline
                            className="font-rethink text-secondarytext"
                            items={[
                              {
                                color: "#16a34a",
                                children: (
                                  <a href="https://www.figma.com/design/O6dXWBa8XhMsblbsY4FqwR/SCS%3A-Student-Science-Club?node-id=0-1&t=y1RgObO6YfG1mPBz-1">
                                    <p className="text-primarytext underline hover:text-white">
                                      GEMASTIK XV 2022
                                    </p>
                                    <p className="text-secondarytext">
                                      Our team tackled SDG 4 (Quality Education)
                                      by designing the Student Collaboration
                                      System (SCS) through Figma. SCS is a
                                      platform for students and lecturers to
                                      build profiles, manage portfolios, upload
                                      certificates, connect across faculties or
                                      universities, and collaborate on academic
                                      projects.
                                    </p>
                                  </a>
                                ),
                              },
                              {
                                color: "#16a34a",
                                children: (
                                  <div>
                                    <p className="text-primarytext">
                                      Comfest Cyber Security CTF
                                    </p>
                                    <p>
                                      Our team engaged in solving complex
                                      cybersecurity challenges, including
                                      cryptography, reverse engineering, web
                                      exploitation, and forensic analysis. The
                                      competition tested our technical skills,
                                      critical thinking, and teamwork as we
                                      raced to uncover hidden flags and secure
                                      points.
                                    </p>
                                  </div>
                                ),
                              },
                              {
                                color: "#16a34a",
                                children: (
                                  <div>
                                    <p className="text-primarytext">
                                      DINAMIK 18 computer programming
                                      competition (CP)
                                    </p>
                                    <p>
                                      Participated in tackling algorithmic
                                      challenges, solving problems in areas such
                                      as data structures, OOP, dynamic
                                      programming, and graph theory. The
                                      competition tested our coding skills,
                                      problem-solving abilities, and time
                                      management under pressure
                                    </p>
                                  </div>
                                ),
                              },
                              {
                                color: "#16a34a",
                                children: (
                                  <div>
                                    <p className="text-primarytext">
                                      Scavenger Hunt
                                    </p>
                                    <p>
                                      In the Scavenger Hunt, we combined
                                      adventure with intellect by solving coding
                                      and algorithmic challenges alongside
                                      traditional riddles and tasks. The event
                                      tested our programming skills,
                                      problem-solving abilities, and teamwork as
                                      we deciphered clues and tackled technical
                                      puzzles to progress.
                                    </p>
                                  </div>
                                ),
                              },
                            ]}
                          />
                        </div>
                        <div className="">
                          <h3 className="mb-4 text-xl font-semibold text-primarytext">
                            Publication
                          </h3>
                          <Timeline
                            className="font-rethink text-secondarytext"
                            items={[
                              {
                                color: "#16a34a",
                                children: (
                                  <>
                                    <a
                                      href="http://repository.upi.edu/id/eprint/124309"
                                      className="text-primarytext underline hover:text-white hover:underline"
                                    >
                                      Implementation of Bayesian Knowledge
                                      Tracing in a TOEFL Learning Application
                                      Based on Gamification with The Octalysis
                                      Framework
                                    </a>
                                    <p>
                                      Acknowledge{" "}
                                      <a
                                        target="_blank"
                                        className="text-blue-400 hover:text-blue-300"
                                        href="https://scholar.google.com/citations?user=aUezWxYAAAAJ&hl=id&oi=ao"
                                      >
                                        Prof. Dr. Munir, M.IT.
                                      </a>{" "}
                                      and{" "}
                                      <a
                                        target="_blank"
                                        className="text-blue-400 hover:text-blue-300"
                                        href="https://scholar.google.com/citations?user=noUN9GIAAAAJ&hl=id&oi=ao"
                                      >
                                        Dr. Rasim, M.T.
                                      </a>{" "}
                                      and as a contributor
                                    </p>
                                  </>
                                ),
                              },
                              {
                                color: "#16a34a",
                                children: (
                                  <a
                                    target="_blank"
                                    href="https://jurnal.mdp.ac.id/index.php/forbiswira/article/view/3822"
                                    className="text-primarytext underline hover:text-white hover:underline"
                                  >
                                    Analisis Pengaruh Metode Penjualan Terhadap
                                    Tingkat Penjualan Barang
                                  </a>
                                ),
                              },
                              {
                                color: "#16a34a",
                                children: (
                                  <p className="text-primarytext">
                                    Nutriast: Aplikasi Monitoring Gizi dan
                                    Prediksi Penyakit Cardiovaskular
                                  </p>
                                ),
                              },
                            ]}
                          />
                        </div>
                        <div className="rounded-xl border border-borderColorTransparent p-6">
                          <h3 className="mb-4 text-xl font-semibold text-primarytext">
                            Organization
                          </h3>
                          <ul className="ms-2 list-inside list-disc space-y-1 text-sm text-secondarytext">
                            <li>
                              <span className="text-primarytext">
                                Google Developer Student Club (GDSC)
                              </span>{" "}
                              - Active member of the Indonesia student
                              programmer community, collaborating on projects,
                              attending workshops, and enhancing skills in web
                              development and cloud computing.
                            </li>
                            <li>
                              <span className="text-primarytext">Ostric</span> –
                              Tutor for web development and cloud computing,
                              mentoring students, providing hands-on guidance,
                              and contributing to a collaborative learning
                              environment.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Assistant Lecturer Card */}
                    <div className="flex w-full justify-center md:mt-[-7rem]">
                      <div className="relative mt-8 h-[28rem] cursor-pointer overflow-hidden rounded-xl border border-borderColorTransparent p-6 transition-colors md:mt-0 md:min-w-[24rem] md:max-w-[28rem]">
                        {/* Card content remains the same */}
                        <div className="absolute -bottom-4 -right-2 select-none text-[120px] font-bold leading-none text-white/5">
                          2022
                        </div>

                        <div className="relative z-10 text-primarytext">
                          <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center text-sm text-secondarytext">
                              <span>College Experience</span>
                            </div>
                            <div className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-green-500">
                              2 semester / 1 year
                            </div>
                          </div>

                          <div className="relative -mx-6 my-6">
                            <div
                              className="h-[1px]"
                              style={{
                                backgroundColor: "rgba(107, 114, 128, 0.1)",
                              }}
                            ></div>
                          </div>

                          <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">
                              Assistant Lecturer
                            </h2>
                            <p className="text-sm text-secondarytext">
                              I have experience in curriculum design, teaching
                              over 50 students, and laboratory management. My
                              responsibilities have included:
                            </p>
                            <ul className="ms-2 list-inside list-disc space-y-1 text-sm text-secondarytext">
                              <li>
                                Developed lesson plans, modules, and exam
                                materials of computer networking and RPL.
                              </li>
                              <li>
                                Taught practical sessions and supervised student
                                competitions.
                              </li>
                              <li>
                                Conducted exams and assessed student
                                performance.
                              </li>
                              <li>
                                Facilitated software development life cycle
                                (SDLC) tutorials
                              </li>
                              <li>
                                Managed and maintained the computer laboratory.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* New Content - Mobile Only */}
                  <div className="mt-8 w-full text-secondarytext md:hidden">
                    <div className="">
                      <h3 className="mb-4 text-xl font-semibold">
                        Competition
                      </h3>
                      <Timeline
                        className="font-rethink text-secondarytext"
                        items={[
                          {
                            color: "#16a34a",
                            children: (
                              <a href="https://www.figma.com/design/O6dXWBa8XhMsblbsY4FqwR/SCS%3A-Student-Science-Club?node-id=0-1&t=y1RgObO6YfG1mPBz-1">
                                <p className="text-primarytext underline hover:text-white">
                                  GEMASTIK XV 2022
                                </p>
                                <p className="text-secondarytext">
                                  Our team tackled SDG 4 (Quality Education) by
                                  designing the Student Collaboration System
                                  (SCS) through Figma. SCS is a platform for
                                  students and lecturers to build profiles,
                                  manage portfolios, upload certificates,
                                  connect across faculties or universities, and
                                  collaborate on academic projects.
                                </p>
                              </a>
                            ),
                          },
                          {
                            color: "#16a34a",
                            children: (
                              <div>
                                <p className="text-primarytext">
                                  Comfest Cyber Security CTF
                                </p>
                                <p>
                                  Our team engaged in solving complex
                                  cybersecurity challenges, including
                                  cryptography, reverse engineering, web
                                  exploitation, and forensic analysis. The
                                  competition tested our technical skills,
                                  critical thinking, and teamwork as we raced to
                                  uncover hidden flags and secure points.
                                </p>
                              </div>
                            ),
                          },
                          {
                            color: "#16a34a",
                            children: (
                              <div>
                                <p className="text-primarytext">
                                  DINAMIK 18 computer programming competition
                                  (CP)
                                </p>
                                <p>
                                  Participated in tackling algorithmic
                                  challenges, solving problems in areas such as
                                  data structures, OOP, dynamic programming, and
                                  graph theory. The competition tested our
                                  coding skills, problem-solving abilities, and
                                  time management under pressure
                                </p>
                              </div>
                            ),
                          },
                          {
                            color: "#16a34a",
                            children: (
                              <div>
                                <p className="text-primarytext">
                                  Scavenger Hunt
                                </p>
                                <p>
                                  In the Scavenger Hunt, we combined adventure
                                  with intellect by solving coding and
                                  algorithmic challenges alongside traditional
                                  riddles and tasks. The event tested our
                                  programming skills, problem-solving abilities,
                                  and teamwork as we deciphered clues and
                                  tackled technical puzzles to progress.
                                </p>
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>
                    <div className="">
                      <h3 className="mb-4 text-xl font-semibold">
                        Publication
                      </h3>
                      <Timeline
                        className="font-rethink text-secondarytext"
                        items={[
                          {
                            color: "#16a34a",
                            children: (
                              <>
                                <a
                                  href="http://repository.upi.edu/id/eprint/124309"
                                  className="text-primarytext underline hover:text-white hover:underline"
                                >
                                  Implementation of Bayesian Knowledge Tracing
                                  in a TOEFL Learning Application Based on
                                  Gamification with The Octalysis Framework
                                </a>
                                <p>
                                  Acknowledge{" "}
                                  <a
                                    target="_blank"
                                    className="text-blue-400 hover:text-blue-300"
                                    href="https://scholar.google.com/citations?user=aUezWxYAAAAJ&hl=id&oi=ao"
                                  >
                                    Prof. Dr. Munir, M.IT.
                                  </a>{" "}
                                  and{" "}
                                  <a
                                    target="_blank"
                                    className="text-blue-400 hover:text-blue-300"
                                    href="https://scholar.google.com/citations?user=noUN9GIAAAAJ&hl=id&oi=ao"
                                  >
                                    Dr. Rasim, M.T.
                                  </a>{" "}
                                  and as a contributor
                                </p>
                              </>
                            ),
                          },
                          {
                            color: "#16a34a",
                            children: (
                              <a
                                target="_blank"
                                href="https://jurnal.mdp.ac.id/index.php/forbiswira/article/view/3822"
                                className="text-primarytext underline hover:text-white hover:underline"
                              >
                                Analisis Pengaruh Metode Penjualan Terhadap
                                Tingkat Penjualan Barang
                              </a>
                            ),
                          },
                          {
                            color: "#16a34a",
                            children: (
                              <p className="text-primarytext">
                                Nutriast: Aplikasi Monitoring Gizi dan Prediksi
                                Penyakit Cardiovaskular
                              </p>
                            ),
                          },
                        ]}
                      />
                    </div>
                    <div className="rounded-xl border border-borderColorTransparent p-6">
                      <h3 className="mb-4 text-xl font-semibold">
                        Organization
                      </h3>
                      <ul className="ms-2 list-inside list-disc space-y-1 text-sm text-secondarytext">
                        <li>
                          {" "}
                          <span className="text-primarytext">
                            {" "}
                            Google Developer Student Club (GDSC)
                          </span>
                          – Active member of the Indonesia student programmer
                          community, collaborating on projects, attending
                          workshops, and enhancing skills in web development and
                          cloud computing.
                        </li>
                        <li>
                          {" "}
                          <span className="text-primarytext">Ostric</span>–
                          Tutor for web development and cloud computing,
                          mentoring students, providing hands-on guidance, and
                          contributing to a collaborative learning environment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience */}
          <div className="">
            <motion.div
              className="relative mt-28 px-6"
              ref={experienceRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isExperienceInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              {/* Text Background */}
              <div className="absolute inset-0 z-0 flex items-start justify-center text-5xl font-bold text-zinc-800/20 md:text-9xl">
                EXPERIENCE
              </div>
              {/* Header */}
              <div className="relative z-0 pt-16 text-white">
                <div className="ms-4 flex flex-col items-center justify-center text-center text-xl font-semibold lg:ms-8 lg:text-3xl">
                  <div className="mb-2 w-fit rounded-xl border border-borderColorTransparent bg-zinc-950 p-2">
                    <MdOutlineWork className="text-4xl" />
                  </div>
                  <span>Experience</span>
                </div>
              </div>
              {/* Content */}
              <div className="mx-auto mt-16 flex max-w-screen-lg flex-col gap-8 text-sm text-primarytext">
                <div className="grid gap-4 md:grid-cols-[250px,1fr] md:gap-8">
                  <p className="mt-1 text-sm font-light text-secondarytext">
                    SEP 2023 - DEC 2023
                  </p>
                  <div className="text-secondarytext">
                    <p className="text-2xl font-medium text-white">
                      System Analyst Intern
                    </p>
                    <p>
                      <span className="text-primarytext">
                        Telkom Indonesia Tbk
                      </span>{" "}
                      - Bandung, Indonesia
                    </p>
                    <div className="mt-2">
                      <p>
                        Assist the development of Ingenium, an HR web
                        application for managing employee processes like tenure
                        tracking and recruitment. Built a Project Management &
                        Proposal System to streamline project creation,
                        approvals, and role assignments.{" "}
                      </p>
                      <ul className="mt-2 list-disc space-y-2 pl-5 text-secondarytext">
                        <li>
                          Managed end-to-end HC project and processes, from
                          analysis, design, to coding/development.
                        </li>
                        <li>
                          Collaborated closely with development teams (project
                          manager, front-end & back-end web developers, dev-ops,
                          and data) to translate business needs into system
                          features.
                        </li>
                        <li>
                          Contributed to the development of user stories, use
                          cases, system specifications, and design interfaces to
                          guide the development process
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-[250px,1fr] md:gap-8">
                  <p className="mt-1 text-sm font-light text-secondarytext">
                    SEP 2023 - DEC 2023
                  </p>
                  <div className="text-secondarytext">
                    <p className="text-2xl font-medium text-white">
                      Cloud Computing Cohort
                    </p>
                    <p>
                      <span className="text-primarytext">
                        Bangkit Academy Led by Google, GoTo, & Traveloka
                      </span>
                      - Remote
                    </p>
                    <div className="mt-2">
                      <p>
                        Completed several courses related to cloud and backend
                        development. I have also undergone training in soft
                        skills. In addition, I have successfully completed
                        numerous projects, both individually and as part of a
                        team. All of my classes and training were conducted
                        entirely in English. I also graduated with distinction
                        honored.
                      </p>
                      <ul className="mt-2 list-disc space-y-2 pl-5 text-secondarytext">
                        <li>
                          Gained proficiency in web development fundamentals,
                          JavaScript, creating back-end applications with Google
                          Cloud, and becoming a Google Cloud Engineer.
                        </li>
                        <li>
                          Completed several projects, such as creating
                          responsive websites, UI/UX design, developing backend
                          REST APIs, and deploying applications on the Google
                          Cloud Platform.
                        </li>
                        <li>
                          Successfully completed capstone project based as
                          co-leader, overseeing cloud environment, backend app,
                          data, and AI/machine learning.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Footer */}
        <div className="border border-zinc-950 pb-12 pt-24">
          <div className="4 mb-8 h-[1px] w-full shrink-0 bg-gradient-to-r from-[#171717] via-[#525252] to-[#171717]"></div>
          <div className="text-center font-rethink text-sm text-neutral-500">
            Copyright © 2025 Muhammad Rafi Shidiq.
            <span className="block sm:inline"> All rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
}
