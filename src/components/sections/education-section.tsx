"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GiGraduateCap } from "react-icons/gi";
import { motion, useInView } from "framer-motion";

export default function EducationSection() {
  const educationRef = useRef(null);
  const isEducationInView = useInView(educationRef, { once: true });
  return (
    <motion.div
      className="mt-24"
      ref={educationRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: 0.2,
      }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="lg:flex">
          {/* Content */}
          <div className="">
            <div className="relative size-full rounded-lg p-8 text-xl">
              <div
                className="absolute top-0 -z-10 flex items-start justify-start text-9xl font-bold text-neutral-800/50"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  filter: "",
                }}
              >
                EDUCATION
              </div>
              <div className="absolute inset-0 -z-10 flex w-full items-start justify-end ps-48 pe-8">
                <Image
                  src="/assets/bnwupi.png"
                  width={350}
                  height={350}
                  alt="LogoUPI"
                  className=""
                  style={{ filter: "grayscale(100%)", opacity: 0.05 }}
                />
              </div>
              <div className="relative text-neutral-100">
                <div className="text-xl font-semibold lg:text-3xl">
                  <div className="border-trsp mb-2 w-fit rounded-xl border bg-neutral-900 p-2">
                    <GiGraduateCap className="text-5xl" />
                  </div>
                  <span>Education</span>
                </div>
              </div>
              <div className="z-10 mt-8 w-full max-w-[44rem] text-base font-light text-neutral-200">
                <p>
                  As a fresh graduate of{" "}
                  <strong className="font-medium text-emerald-200">
                    Computer Science
                  </strong>{" "}
                  (S.Kom.) from{" "}
                  <strong className="font-medium text-emerald-200 hover:text-emerald-100">
                    <a
                      target="_blank"
                      href="https://www.topuniversities.com/universities/universitas-pendidikan-indonesia"
                    >
                      Indonesia University of Education (UPI)
                    </a>
                  </strong>{" "}
                  (2020 - 2024), I have developed a strong foundation in
                  programming, covering algorithms, object-oriented programming
                  (OOP), databases, and web development. Graduating with a{" "}
                  <strong className="font-medium text-emerald-200">
                    GPA 3.85 of 4.00
                  </strong>{" "}
                  , I balanced academic coursework with hands-on experience,
                  taking on the role of an assistant lecturer and actively
                  collaborating on projects.
                </p>
                {/* Competition */}
                <div className="">
                  <h3 className="mt-8 text-xl font-semibold text-neutral-100">
                    Competition
                  </h3>
                  <Accordion
                    type="multiple"
                    className="mt-3 w-full text-neutral-200"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="cursor-pointer">
                        GEMASTIK XV 2022 UI/UX Design
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>
                          Our team tackled SDG 4 (Quality Education) by
                          designing the Student Collaboration System (SCS)
                          through Figma. SCS is a platform for students and
                          lecturers to build profiles, manage portfolios, upload
                          certificates, connect across faculties or
                          universities, and collaborate on academic projects.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="cursor-pointer">
                        Comfest Cyber Security CTF
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>
                          {" "}
                          Our team engaged in solving complex cybersecurity
                          challenges, including cryptography, reverse
                          engineering, web exploitation, and forensic analysis.
                          The competition tested our technical skills, critical
                          thinking, and teamwork as we raced to uncover hidden
                          flags and secure points.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="cursor-pointer">
                        DINAMIK 18 Computer Programming (CP)
                      </AccordionTrigger>
                      <AccordionContent>
                        Participated in tackling algorithmic challenges, solving
                        problems in areas such as data structures, OOP, dynamic
                        programming, and graph theory. The competition tested
                        our coding skills, problem-solving abilities, and time
                        management under pressure
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="cursor-pointer">
                        Scavenger Hunt
                      </AccordionTrigger>
                      <AccordionContent>
                        In the Scavenger Hunt, we combined adventure with
                        intellect by solving coding and algorithmic challenges
                        alongside traditional riddles and tasks. The event
                        tested our programming skills, problem-solving
                        abilities, and teamwork as we deciphered clues and
                        tackled technical puzzles to progress.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          <div>
            <div className="size-full rounded-lg px-4 text-xl lg:mt-24">
              <div className="border-trsp relative min-w-[24rem] rounded-xl border bg-neutral-900 p-6 transition-colors md:max-w-[28rem] md:min-w-[24rem]">
                <div className="absolute right-0 -bottom-4 text-[120px] leading-none font-bold text-white/5 select-none">
                  2022
                </div>

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center text-sm text-neutral-200">
                      <span>College Experience</span>
                    </div>
                    <div className="rounded-full bg-green-500/10 px-2 py-1 text-xs text-emerald-200">
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
                    <h2 className="text-2xl font-semibold text-neutral-100">
                      Assistant Lecturer
                    </h2>
                    <p className="text-sm text-neutral-200">
                      I have experience in curriculum design, teaching over 50
                      students, and laboratory management. My responsibilities
                      have included:
                    </p>
                    <ul className="ms-2 list-inside list-disc space-y-1 text-sm text-neutral-200">
                      <li>
                        Developed lesson plans, modules, and exam materials of
                        computer networking and RPL.
                      </li>
                      <li>
                        Taught practical sessions and supervised student
                        competitions.
                      </li>
                      <li>Conducted exams and assessed student performance.</li>
                      <li>
                        Facilitated software development life cycle (SDLC)
                        tutorials
                      </li>
                      <li>Managed and maintained the computer laboratory.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Publication */}
        <div className="p-6">
          <h3 className="mt-8 text-xl font-semibold text-neutral-100">
            Publication
          </h3>
          <div className="mt-4 flex flex-wrap gap-6">
            <div className="border-trsp h-fit rounded-lg border bg-neutral-900 p-4 text-sm md:w-[20rem]">
              <a
                href="http://repository.upi.edu/id/eprint/124309"
                className="text-neutral-100 hover:text-white"
              >
                Implementation of Bayesian Knowledge Tracing in a TOEFL Learning
                Application Based on Gamification with The Octalysis Framework.
              </a>
              <p className="mt-2 text-neutral-400">
                - Acknowledge{" "}
                <a
                  target="_blank"
                  className="text-emerald-300 hover:text-emerald-200"
                  href="https://scholar.google.com/citations?user=aUezWxYAAAAJ&hl=id&oi=ao"
                >
                  Prof. Dr. Munir, M.IT.
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  className="text-emerald-300 hover:text-emerald-200"
                  href="https://scholar.google.com/citations?user=noUN9GIAAAAJ&hl=id&oi=ao"
                >
                  Dr. Rasim, M.T.
                </a>{" "}
                and as a contributor
              </p>
            </div>
            <div className="border-trsp h-fit rounded-lg border bg-neutral-900 p-4 text-sm md:w-[20rem]">
              <a
                href="http://repository.upi.edu/id/eprint/124309"
                className="text-neutral-100 hover:text-white"
              >
                Analisis Pengaruh Metode Penjualan Terhadap Tingkat Penjualan
                Barang
              </a>
            </div>
            <div className="border-trsp h-fit rounded-lg border bg-neutral-900 p-4 text-sm md:w-[20rem]">
              <a
                target="_blank"
                href="https://jurnal.mdp.ac.id/index.php/forbiswira/article/view/3822"
                className="text-neutral-100 hover:text-white"
              >
                Nutriast: Aplikasi Monitoring Gizi dan Prediksi Penyakit
                Cardiovascular.
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
