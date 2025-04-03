"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import createGlobe from "cobe";
import { useEffect, useRef } from "react";
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
      title: "I am nameless entity",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta?",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-trsp border-trsp",
    },
    {
      title: "",
      description:
        "",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-trsp",
    },
    {
      title: "Read our Article on Medium",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quisquam itaque quidem?",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-trsp",
    },
    {
      title: "Ask Anything!",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sequi cupiditate nisi eum illum assumenda dolor deleniti atque! A, nesciunt id quas iste ullam quo.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none border-trsp",
    },
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-40">
      <div className="px-8">
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-neutral-100 lg:text-5xl lg:leading-tight">
          Welcome to Black Space, Nerds!
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
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
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "text-center font-normal text-neutral-500",
        "mx-0 my-2 max-w-sm text-left md:text-sm",
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      {/* <div className="group mx-auto h-full w-full bg-neutral-950 p-5 shadow-2xl ">
        <div className="flex h-full w-full flex-1 flex-col space-y-2">
          <Image
            src="/assets/programminghero.jpeg"
            alt="header"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-left-bottom"
          />
        </div>
      </div> */}
      <div className="h-full w-full">
        {/* <EvervaultCard text="Welcome Nerds" /> */}
        <EvervaultCard text="R1hi70 5iKu" />
        <h2 className="mt-4 text-sm font-light text-black dark:text-white">
          Hover over this card to reveal an awesome effect. Running out of copy
          here.
        </h2>
        <p className="mt-4 rounded-full border border-black/[0.2] px-2 py-0.5 text-sm font-light text-black dark:border-white/[0.2] dark:text-white">
          Watch me hover
        </p>
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
  const words = ["Existentialist", "Writer", "Programmer", "Gamer"];
  // const images = [
  //   "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ];

  // const imageVariants = {
  //   whileHover: {
  //     scale: 1.1,
  //     rotate: 0,
  //     zIndex: 100,
  //   },
  //   whileTap: {
  //     scale: 1.1,
  //     rotate: 0,
  //     zIndex: 100,
  //   },
  // };
  return (
    <div className="relative flex h-full flex-col items-start gap-10 overflow-hidden">
      {/* TODO */}
      {/* <div className="-ml-20 flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="border-trsp mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border p-1 bg-neutral-950"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="border-trsp mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border p-1 bg-neutral-950"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div> */}
      <div className="relative h-[16rem] w-full">
        <Image
          src="/assets/battler.gif"
          fill
          className="object-cover"
          alt="SeeYa"
        />
      </div>
      <div className="flex h-[12rem] w-full items-center justify-start lg:mb-16">
        <div className="text-2xl font-normal text-neutral-400">
          An authentic
          <FlipWords className="text-4xl" words={words} /> <br />
          who flow with the universe
        </div>
      </div>

      <div className="px-8 text-base text-neutral-400 lg:px-0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis
          assumenda, labore saepe est aperiam nihil temporibus provident omnis
          illo, eos suscipit odit aspernatur nobis reprehenderit sunt odio? Est,
          nisi?
          <br />
          That's all. You don't know me.
        </p>
      </div>

      <ul className="mb-20 px-8 text-base text-neutral-400 lg:mb-0 lg:px-4">
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

// export const Globe = ({ className }: { className?: string }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     let phi = 0;

//     if (!canvasRef.current) return;

//     const globe = createGlobe(canvasRef.current, {
//       devicePixelRatio: 2,
//       width: 600 * 2,
//       height: 600 * 2,
//       phi: 0,
//       theta: 0,
//       dark: 1,
//       diffuse: 1.2,
//       mapSamples: 16000,
//       mapBrightness: 6,
//       baseColor: [0.3, 0.3, 0.3],
//       markerColor: [0.1, 0.8, 1],
//       glowColor: [1, 1, 1],
//       markers: [
//         // longitude latitude
//         { location: [37.7595, -122.4367], size: 0.03 },
//         { location: [40.7128, -74.006], size: 0.1 },
//       ],
//       onRender: (state) => {
//         // Called on every animation frame.
//         // `state` will be an empty object, return updated params.
//         state.phi = phi;
//         phi += 0.01;
//       },
//     });

//     return () => {
//       globe.destroy();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
//       className={className}
//     />
//   );
// };