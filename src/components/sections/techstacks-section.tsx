"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { IconCloud } from "@/components/magicui/icon-cloud";

export default function TechstacksSection() {
  const slugs = [
    "html5",
    "css3",
    "sass",
    "javascript",
    "typescript",
    "php",
    "python",
    "react",
    "nextdotjs",
    "vuejs",
    "vite",
    "restapi",
    "mysql",
    "mongodb",
    "laravel",
    "tailwindcss",
    "mui",
    "antdesign",
    "bootstrap",
    "framermotion",
    "git",
    "figma",
    "cloudinary",
    "miro",
    "trello",
    "vercel",
    "googlecloud",
    "canva",
    "firebase",
    "agile",
    "microsoftoffice",
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  const textRef3 = useRef(null);
  const isTextInView3 = useInView(textRef3, { once: true });
  return (
    <div>
      <motion.div
        className="text-secondarytext mt-12 flex flex-col items-center px-2"
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

        <p className="mt-6 text-base">some of the soft skills I've mastered:</p>
        <section id="header" className="mt-4">
          <BlurFade delay={0.25 * 2} inView direction="right">
            <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm">
              <span className="border-trsp rounded-md border px-2 py-1">
                Time Management
              </span>
              <span className="border-trsp rounded-md border px-2 py-1">
                Critical & Analytical Thinking
              </span>
              <span className="border-trsp rounded-md border px-2 py-1">
                Communication
              </span>
              <span className="border-trsp rounded-md border px-2 py-1">
                Problem Solving
              </span>
              <span className="border-trsp rounded-md border px-2 py-1">
                Adaptability
              </span>
              <span className="border-trsp rounded-md border px-2 py-1">
                Fast Learning
              </span>
              <span className="border-trsp rounded-md border px-2 py-1">
                Project Management
              </span>
              <span className="border-trsp rounded-md border px-2 py-1">
                Leadership
              </span>
            </div>
          </BlurFade>
        </section>
      </motion.div>
    </div>
  );
}
