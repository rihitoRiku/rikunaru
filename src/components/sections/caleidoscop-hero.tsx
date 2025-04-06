"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { EvervaultCard } from "@/components/ui/evervault";
import { FlipWords } from "@/components/ui/flip-words";
import { GoHomeFill } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function CaleidoscopHeroSectionDemo() {
  const features = [
    {
      title: "<>404: He is nameless entity</>",
      description:
        "Just ordinary one, nobody who romanticize his slow-life. Seeking to always serve humanity through meaningful work.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-trsp border-trsp",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-trsp",
    },
    {
      title: "Read our Article on Medium",
      description:
        "Engage with our deep handwritten literature, poetry, and find helpful guides in our latest Medium posts.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-trsp",
    },
    {
      title: "Ask Anything!",
      description:
        "Note: I’m also developing an AI chatbot that’ll join this section soon to make this space even more fun and helpful.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none border-trsp",
    },
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl pt-40">
      <div className="px-8">
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-neutral-100 lg:text-5xl lg:leading-tight">
          Welcome to Kuro Space, Nerds:3
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base">
          This little realm contains personal story of him, the good sire xD. Have a nice day!
        </p>
      </div>

      <div className="relative">
        <div className="xl:border-trsp mt-12 grid grid-cols-1 rounded-md lg:grid-cols-6 xl:border">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative overflow-hidden p-4 sm:p-8`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto max-w-5xl text-left text-xl tracking-tight text-neutral-200 md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-lg text-left text-sm md:text-base",
        "text-center font-normal text-neutral-500",
        "mx-0 my-2 text-left md:text-sm",
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div className="h-full w-full">
        <EvervaultCard text="R1hi70 5iKu" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-neutral-950 via-transparent to-transparent" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    // <Link
    //   href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
    //   target="__blank"
    //   className="group/image relative flex h-full gap-10"
    // >
    //   <div className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
    //     <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
    //       {/* TODO */}
    //       <IconBrandYoutubeFilled className="absolute inset-0 z-10 m-auto h-20 w-20 text-red-500" />
    //       <Image
    //         src="https://assets.aceternity.com/fireship.jpg"
    //         alt="header"
    //         width={800}
    //         height={800}
    //         className="aspect-square h-full w-full rounded-sm object-cover object-center blur-none transition-all duration-200 group-hover/image:blur-md"
    //       />
    //     </div>
    //   </div>
    // </Link>
    <Link
      href="https://medium.com/@rikunaru"
      target="__blank"
      className="group/image relative flex h-full gap-10"
    >
      <div className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
        <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
          {/* Overlay Image */}
          <Image
            src="/assets/medium.svg"
            alt="overlay"
            width={80}
            height={80}
            className="absolute inset-0 z-10 m-auto h-20 w-20"
          />

          {/* Background Image */}
          <Image
            src="/assets/medium.png"
            alt="header"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-left blur-none transition-all duration-200 group-hover/image:blur-md"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const words = ["Existentialist", "Writer", "Artist", "Programmer", "Gamer"];
  return (
    <div className="relative flex h-full flex-col items-start gap-10 overflow-hidden pt-28">
      {/* TODO */}
      {/* <div className="relative h-[16rem] w-full">
        <Image
          src="/assets/battler.gif"
          fill
          className="object-cover"
          alt="SeeYa"
        />
      </div> */}
      <div className="flex h-[12rem] w-full items-center justify-start">
        <div className="text-2xl font-normal text-neutral-400">
          An authentic
          <FlipWords className="text-4xl" words={words} /> <br />
          who flow with the universe
        </div>
      </div>

      <div className="px-8 text-sm text-neutral-400 lg:px-4">
        <p>
          Born in October 2002, in Purwakarta, Indonesia. I am the oldest of two
          siblings raised in a modest family. I graduated with a degree in
          computer science at the end of 2024 and am committed to focusing on
          the field of technology.
        </p>
        <p>
          I dreamed of becoming a teacher and have written my own
          books. I am deeply grateful for my life, which I also fill with
          reading and writing. My interests in philosophy and arts have led
          me on a spiritual journey of deeper self-understanding.{" "}
        </p>
        <p>
          As a lifelong learner, I am enthusiast to explore and learn
          new things.
        </p>
      </div>

      <ul className="mb-20 px-8 text-sm text-neutral-400 lg:mb-0 lg:px-4">
        <li className="flex items-center gap-2">
          {" "}
          <GoHomeFill /> Lives in Bandung
        </li>
        {/* <li>Pronouns: he/him/sir</li> */}
        <li className="flex items-center gap-2">
          {" "}
          <MdAlternateEmail /> muhammadrafishidiq@gmail.com
        </li>
        <Link
          href="https://www.facebook.com/rihitoRiku/"
          target="__blank"
          className="flex items-center gap-2"
        >
          {" "}
          <FaFacebook /> facebook
        </Link>
        <Link
          href="https://www.instagram.com/rikunaruu/"
          target="__blank"
          className="flex items-center gap-2"
        >
          {" "}
          <RiInstagramFill /> instagram
        </Link>
      </ul>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-neutral-950 to-transparent" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative mt-10 flex h-60 flex-col items-center bg-transparent md:h-60 dark:bg-transparent">
      {/* <Globe className="absolute -right-10 -bottom-80 md:-right-10 md:-bottom-72" /> */}
    </div>
  );
};
