import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Quote() {
  const words = [
    {
      text: "simplicity",
    },
    {
      text: "of",
    },
    {
      text: "heart,",
      className: "text-emerald-200",
    },
    {
      text: "serenity",
    },
    {
      text: "of",
    },
    {
      text: "mind,",
      className: "text-emerald-200",
    },
    {
      text: "and",
    },
    {
      text: "tranquility",
    },
    {
      text: "of",
    },
    {
      text: "soul.",
      className: "text-emerald-200",
    },
  ];

  return (
    <div className="">
      <div className="hidden h-[32rem] flex-col items-center justify-center lg:flex">
        <p className="text-base text-neutral-200 lg:text-lg">
          True peace comes from within, not from the world around us.
        </p>
        <TypewriterEffectSmooth
          words={words}
          cursorClassName="bg-emerald-500"
        />
      </div>
      <div className="p-8 lg:hidden">
        <p className="text-sm text-neutral-200 mb-4">
          true peace comes from within, not from the world around us.
        </p>
        <p className="text-3xl font-bold">
          The simplicity of <span className="text-emerald-200">heart</span>,
          serenity of <span className="text-emerald-200">mind</span>, &
          tranquility of <span className="text-emerald-200">soul</span>
        </p>
      </div>
    </div>
  );
}
