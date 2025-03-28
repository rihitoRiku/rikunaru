"use client";
import React, { useState } from "react";

export default function AtelierBento() {
  const [imageLoaded, setImageLoaded] = useState({
    paper: false,
    color: false,
    neuron: false,
  });

  // Handler to update loading state when an image loads
  const handleImageLoad = (key: keyof typeof imageLoaded) => {
    setImageLoaded((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div>
      <div className="mx-auto h-[620px] max-w-screen-md p-4">
        <div className="mx-auto mt-4 grid h-[500px] w-full max-w-4xl grid-cols-2 gap-4">
          {/* Left column */}
          <div
            data-aos="zoom-in"
            className="border-trsp relative h-[320px] overflow-hidden rounded-lg border"
          >
            <div
              className="border-trsp absolute -top-20 -left-20 h-96 w-96 rounded-full border"
              style={{
                backgroundImage: "url('/assets/paper.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Placeholder */}
              {!imageLoaded.paper && (
                <div className="absolute inset-0 shimmer opacity-75" />
              )}
            </div>
            {/* Hidden img tag to detect loading */}
            <img
              src="/assets/paper.jpg"
              alt="preload"
              className="hidden"
              onLoad={() => handleImageLoad("paper")}
            />
            <div className="relative flex h-full items-end justify-end px-4 pb-8 lg:px-8">
              <h2 className="text-end text-2xl font-bold sm:text-3xl">
                Professional
                <br />
                Standard
              </h2>
            </div>
          </div>

          {/* Right column */}
          <div className="grid h-[320px] grid-rows-2 gap-4">
            {/* Image container */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="border-trsp relative overflow-hidden rounded-lg border"
              style={{
                backgroundImage: "url('/assets/color.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {!imageLoaded.color && (
                <div className="absolute inset-0 shimmer opacity-75" />
              )}
              <img
                src="/assets/color.jpg"
                alt="preload"
                className="hidden"
                onLoad={() => handleImageLoad("color")}
              />
              <div className="absolute inset-0" />
            </div>

            {/* Clean Code & Design container */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="border-trsp relative rounded-lg border"
            >
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <h3 className="text-lg text-neutral-100">
                  Clean Code &<br />
                  Design
                </h3>
                <p className="text-sm text-neutral-200">
                  Focused on clean, maintainable code & scalable design.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row - full width */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="border-trsp relative col-span-2 h-[240px] overflow-hidden rounded-lg border"
          >
            <div
              className="clip-path-custom absolute top-0 right-0 h-full w-1/2"
              style={{
                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
                backgroundImage: "url('/assets/neuron.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {!imageLoaded.neuron && (
                <div className="absolute inset-0 shimmer opacity-75" />
              )}
            </div>
            {/* Hidden img tag to detect loading */}
            <img
              src="/assets/neuron.jpg"
              alt="preload"
              className="hidden"
              onLoad={() => handleImageLoad("neuron")}
            />
            <div className="relative flex h-full max-w-[25rem] flex-col justify-between p-8">
              <h3 className="text-2xl text-neutral-100">
                User Experience
                <br />
                Centric
              </h3>
              <p className="text-sm text-neutral-200">
                Delivering scalable solutions user-first design and a focus on
                client satisfaction and exceptional user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
