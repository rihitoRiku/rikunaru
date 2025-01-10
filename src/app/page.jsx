"use client";
import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";

import { motion, useInView } from "framer-motion";

import MySvg from "./../../public/myname.svg";
import meshBackground from "@/app/styles/background.module.css";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  // ANTD
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
  return (
    <>
      {/* Container */}
      <div
        className={`${meshBackground.background} h-screen w-full -z-50 absolute top-0 left-0`}
      ></div>
      <div className="max-w-screen-xl mx-auto text-primarytext font-rethink">
        {/* Main section */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
          <div className="flex flex-col w-fit justify-center h-screen gap-12 px-6">
            <div className="sm:w-[30rem] w-full">
              <h1 className="text-6xl sm:text-7xl font-semibold mb-4">
                I'm Rafi
              </h1>
              <p className="text-base text-gray-300">
                I am a motivated full-stack web developer with expertise in
                JavaScript, React, Next.js, Node.js, Express, databases, and
                cloud environments.
              </p>
            </div>
            {/* About me button */}
            <div className="">
              <button
                onMouseMove={handleMouseMove}
                className="flex relative px-6 py-3 border border-transparent text-white bg-none rounded-lg overflow-hidden"
              >
                <span className="relative z-10">About Me</span>
                <span
                  className="absolute w-28 h-28 bg-slate-800 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"
                  style={{
                    left: `${coords.x}px`,
                    top: `${coords.y}px`,
                    opacity: 1,
                  }}
                ></span>
                <ArrowDownOutlined className="ms-2 mt-1 z-10" />
              </button>
            </div>
            {/* Mini icons link */}
            <div className="flex gap-4" data-fade="4">
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
                  className="p-0.5 hover:text-neutral-400 transition-colors text-neutral-500 flex items-center justify-center rounded-sm cursor-newtab"
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
                  href=""
                  data-state="closed"
                  className="p-0.5 hover:text-neutral-400 transition-colors text-neutral-500 flex items-center justify-center rounded-sm cursor-newtab"
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
                  href=""
                  data-state="closed"
                  className="p-0.5 hover:text-neutral-400 transition-colors text-neutral-500 flex items-center justify-center rounded-sm cursor-newtab"
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
                  href=""
                  data-state="closed"
                  className="p-0.5 hover:text-neutral-400 transition-colors text-neutral-500 flex items-center justify-center rounded-sm cursor-newtab"
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
            </div>
          </div>
          {/* Framermotion Grid */}
          <div className="w-full relative flex flex-col items-center justify-center h-screen bg-zinc-950 lg:bg-transparent">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Grid Container */}
              <div className="grid grid-cols-2 grid-rows-2">
                <motion.div
                  className="absolute w-[0%] h-[2px] border-t-2 border-white top-1/2 left-0"
                  initial={{ width: "0%", opacity: 0.1 }}
                  animate={{ width: "100%", opacity: 0.4 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute h-[0%] w-[2px] border-dashed border-l-2 border-white left-1/2 top-0"
                  initial={{ height: "0%", opacity: 0.1 }}
                  animate={{ height: "100%", opacity: 0.4 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute p-6 left-0 bottom-0 w-[50%] h-[50%] flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  <p className="text-white text-2xl font-semibold text-center">
                    Data Analyst
                  </p>
                </motion.div>
                <motion.div
                  className="absolute p-6 right-0 bottom-0 w-[50%] h-[50%] flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  <p className="text-white text-2xl font-semibold text-center">
                    UI/UX Designer
                  </p>
                </motion.div>
                <motion.div
                  className="absolute p-6 left-0 top-0 w-[50%] h-[50%] flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="absolute w-16 h-16 border-dashed border-t-2 border-l-2 border-transparent border-white rounded-tl-full bottom-0 right-0 opacity-40"></div>
                </motion.div>
                <motion.div
                  className="absolute p-6 right-0 top-0 w-[50%] h-[50%] flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                >
                  <p className="text-white text-2xl font-semibold text-center">
                    Fullstack Developer
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="relative px-6">
          <div className="max-w-[38rem] mx-auto text-center mt-12 flex flex-col items-center gap-4 text-secondarytext">
            <div ref={ref} className="flex justify-center items-center w-full">
              <motion.div
                className="relative w-[24rem] h-[5rem] sm:w-[30rem] sm:h-[8rem]"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={isInView ? { clipPath: "inset(0 0 0 0)" } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image
                  src={MySvg}
                  alt="My SVG Image"
                  layout="fill"
                  objectFit=""
                />
              </motion.div>
            </div>
            <p>
              Hello! You can call me <strong className="text-primarytext">Rafi</strong> . I am a Software
              Engineer who works with the React ecosystem, dedicated to staying
              updated in the ever-evolving tech landscape and bringing
              innovative solutions to the table.
            </p>
            <p>
              I was born in 2002 in Purwakarta, Indonesia. Recently graduated
              with a degree in Computer Science from the University of
              Pendidikan Indonesia (UPI)
            </p>
            <p>here are my current favorite tech stack:</p>
            {/* Techstacks */}
            <div className="flex gap-4 flex-wrap w-max text-primarytext">
              <div>
                <button className="default-ring rounded-lg" data-state="closed">
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
                  className="default-ring rounded-lg animate-spin-slow"
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
                <button className="default-ring rounded-lg" data-state="closed">
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
                <button className="default-ring rounded-lg" data-state="closed">
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
          </div>
          {/* What I'm up to now */}
          <div className="w-full">
            <div
              className="border mt-12 rounded-xl mx-auto w-full max-w-screen-lg border-gray-400 flex flex-col md:flex-row justify-center items-center gap-8 p-12"
              style={{ borderColor: "rgba(107, 114, 128, 0.2)" }}
            >
              <p className="text-xl font-semibold flex-[1]">
                What I'm up to now
              </p>
              <ul className="text-secondarytext space-y-1.5 list-disc list-inside flex-[2]">
                <li>
                  Expertise in front-end development, building responsive and
                  dynamic web applications.
                </li>
                <li>
                  Knowledge in back-end with Node.js and integrating back-end
                  systems.
                </li>
                <li>
                  Experience in UI/UX design, using Figma to craft user-friendly
                  and intuitive interfaces.
                </li>
                <li>
                  Proficient in Excel and Phyton for data analysis, automation,
                  and visualization.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="relative px-6 mt-28 min-h-[32rem]">
          <div
            className="absolute inset-0 flex justify-center items-start text-7xl md:text-9xl font-bold -z-10 text-zinc-800/20"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              filter: "blur(8px)",
            }}
          >
            EDUCATION
          </div>

          <div className="absolute inset-0 flex justify-center items-start -z-10 text-zinc-800/20 w-full">
            <Image
              src="/bnwupi.png"
              width={350}
              height={350}
              alt="LogoUPI"
              style={{ filter: "grayscale(100%)", opacity: 0.02 }}
            />
          </div>

          <div className="absolute -z-10 pt-16 flex flex-col items-start h-1/3">
            <div className="ms-4 lg:ms-8">
              <div className="text-2xl lg:text-3xl font-semibold text-center">
                <div
                  className="border rounded-xl p-2 mb-2 w-fit bg-zinc-950"
                  style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
                >
                  <GiGraduateCap className="text-5xl lg:text-6xl" />
                </div>
                <span>Education</span>
              </div>
            </div>
            <div className="ms-4 lg:ms-8">
              <p className="text-3xl"></p>
            </div>

          </div>
        </div>

        {/* Experience */}
        {/* <div className="relative px-6 mt-28 min-h-screen">
          <div className="absolute inset-0 flex justify-center items-start text-7xl md:text-9xl font-bold -z-10 text-zinc-800/20">
            EXPERIENCE
          </div>
          <div className="relative z-10 pt-16">
            <div className="ms-4 lg:ms-8 text-3xl flex flex-col items-center justify-center font-semibold text-center">
              <div
                className="border rounded-xl p-2 mb-2 w-fit bg-zinc-950"
                style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
              >
                <MdOutlineWork className="text-5xl" />
              </div>
              <span>Experience</span>
            </div>
          </div>
        </div> */}

        <div className=""></div>
      </div>
    </>
  );
}
