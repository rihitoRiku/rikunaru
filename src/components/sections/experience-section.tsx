"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MdOutlineWork } from "react-icons/md";

export default function ExperienceSection() {
  const experienceRef = useRef(null);
  const isExperienceInView2 = useInView(experienceRef, { once: true });
  return (
    <div>
      {/* Experience */}
      <div className="">
        <motion.div
          className="relative mt-20 px-6"
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
          <div className="absolute inset-0 -z-10 flex items-start justify-center text-6xl font-bold text-neutral-800/50 blur-xs md:text-9xl">
            EXPERIENCE
          </div>
          {/* Header */}
          <div className="relative z-0 mb-8 pt-16 text-neutral-100">
            <div className="flex flex-col items-center justify-center text-center text-xl font-semibold lg:text-3xl">
              <div className="border-trsp relative mb-2 w-fit rounded-xl border p-2">
                {/* <MdOutlineWork className="text-4xl" /> */}
                <Image
                  alt=""
                  src="/assets/experience2.png"
                  width={48}
                  height={48}
                />
              </div>
              <span>Experience</span>
            </div>
          </div>
          {/* Content */}
          <div className="mx-auto mt-8 flex max-w-screen-lg flex-col gap-8">
            <div className="grid gap-4 md:grid-cols-[250px,1fr]">
              <p className="mt-1 text-end text-sm font-light text-neutral-400">
                SEP 2023 - DEC 2023
              </p>
              <div className="">
                <p className="text-2xl font-medium text-neutral-100">
                  System Analyst Intern
                </p>
                <div className="flex items-start gap-2">
                  <Image
                    src="/assets/telkom.png"
                    className="mt-1 rounded-[3px]"
                    alt="telkom-icon"
                    width={16}
                    height={16}
                  />
                  <p>
                    <span className="text-sm text-neutral-200">
                      Telkom Indonesia Tbk
                    </span>{" "}
                    - Bandung, Indonesia
                  </p>
                </div>

                <div className="mt-2">
                  <p>
                    Assisted in the development of two projects: an HR web
                    application for managing employee processes, such as tenure
                    tracking and recruitment, and a Project Management &
                    Proposal System to streamline project creation, approvals,
                    and role assignments.
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-neutral-400">
                    <li>
                      Acted as a mediator between stakeholders and the
                      development team to align business needs with technical
                      implementation, from analysis, design, to
                      coding/development.
                    </li>
                    <li>
                      Collaborated closely with development teams (project
                      manager, front-end & back-end web developers, dev-ops, and
                      data) to translate business needs into system features.
                    </li>
                    <li>
                      Making user stories, use cases, system specifications
                      (Flowchart and ERD), and design interfaces (UI/UX).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[250px,1fr]">
              <p className="mt-1 text-end text-sm font-light text-neutral-400">
                FEB 2023 - JUL 2023
              </p>
              <div className="">
                <p className="text-2xl font-medium text-neutral-100">
                  Cloud Computing Cohort
                </p>

                <div className="flex items-start gap-2">
                  <Image
                    src="/assets/bangkit.png"
                    className="mt-1 rounded-[3px]"
                    alt="bangkit-icon"
                    width={16}
                    height={16}
                  />
                  <p>
                    <span className="text-sm text-neutral-200">
                      Bangkit Academy Led by Google, GoTo, & Traveloka
                    </span>
                    - Remote
                  </p>
                </div>
                <div className="mt-2">
                  <p>
                    Completed several courses related to cloud and backend
                    development. I have also undergone training in soft skills.
                    In addition, I have successfully completed numerous
                    projects, both individually and as part of a team. All of my
                    classes and training were conducted entirely in English. I
                    also graduated with distinction honored.
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-neutral-400">
                    <li>
                      Gained proficiency in web development fundamentals,
                      JavaScript, creating back-end applications with Google
                      Cloud, and becoming a Google Cloud Engineer.
                    </li>
                    <li>
                      Completed several projects, such as creating responsive
                      websites, UI/UX design, developing backend REST APIs, and
                      deploying applications on the Google Cloud Platform.
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
  );
}
