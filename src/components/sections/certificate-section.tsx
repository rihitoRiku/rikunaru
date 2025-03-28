"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PiCertificateFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";

export default function CertificateSection() {
  

  const badgeImages = Array.from({ length: 13 }, (_, i) => i + 1);
  const getRandomDelay = () => {
    const delays = ["delay-0", "delay-1", "delay-2", "delay-3", "delay-4"];
    return delays[Math.floor(Math.random() * delays.length)];
  };

  // modal image preview
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const openPreview = (src: string) => {
    setPreviewImage(src);
  };
  const closePreview = () => {
    setPreviewImage(null);
  };
  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  // modal preview image animation
  const [isExiting, setIsExiting] = useState(false);
  const handleClosePreview = () => {
    setIsExiting(true);
  };
  useEffect(() => {
    if (isExiting && previewImage) {
      const timer = setTimeout(() => {
        closePreview(); // Your original close function
        setIsExiting(false);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isExiting, previewImage]);

  return (
    <div>
      <div
        id="certificate"
        className="relative mx-auto mt-20 max-w-screen-lg text-sm"
      >
        <div className="absolute inset-0 -z-10 flex items-start justify-center text-5xl font-bold text-neutral-800/40 md:text-9xl">
          CERTIFICATE
        </div>
        <div className="relative -z-10 pt-16 text-neutral-100">
          <div className="ms-4 flex flex-col items-center justify-center text-center text-xl font-semibold lg:ms-8 lg:text-3xl">
            <div
              className="mb-2 w-fit rounded-xl border p-2"
              style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
            >
              <PiCertificateFill className="text-4xl" />
            </div>
            <span>Certificate</span>
          </div>
        </div>
        <div className="mt-4 px-4 text-center text-base text-neutral-200">
          A collection of certifications earned through completing courses and
          hands-on projects on Dicoding, Coursera, and Google Cloud.
        </div>

        <div
          data-aos="zoom-in"
          className="mt-20 flex w-full flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-8 md:px-0"
        >
          <div className="relative w-full max-w-[24rem] rounded-lg">
            {!loadedImages["/assets/certificates/b.png"] && (
              <div className="shimmer absolute inset-0 rounded-lg opacity-75" />
            )}
            <Image
              width={500}
              height={300}
              className="animate-breathe inset-0 cursor-pointer rounded-lg border object-contain"
              src="/assets/certificates/b.png"
              alt="Cert"
              onClick={() => openPreview("/assets/certificates/b.png")}
              onLoadingComplete={() =>
                handleImageLoad("/assets/certificates/b.png")
              }
            />
          </div>
          <a
            href="https://google.accredible.com/7e70edef-eaf4-4887-bc47-9f764d9afc70#acc.0ljbU6zR"
            target="_blank"
            className="w-full text-center md:max-w-[26rem] md:text-left"
          >
            <div className="font-passions-conflict mb-4 text-5xl text-neutral-100">
              Google Cloud Certified Associate Cloud Engineer
            </div>
            <p className="text-base text-neutral-500">
              A prestigious certification proving expertise in deploying and
              managing Google Cloud solutions. Highly valued in the industry, it
              requires hands-on experience and a solid understanding of cloud
              operations, with a challenging exam to validate these skills.
            </p>
          </a>
        </div>

        <div
          data-aos="zoom-in"
          className="mt-28 flex w-full flex-col items-center justify-center gap-6 px-4 md:gap-8 md:px-0"
        >
          <div className="order-2 w-full text-center md:order-1 md:max-w-[36rem] md:text-left">
            <div className="font-passions-conflict mb-4 text-center text-5xl text-neutral-100">
              Bangkit Academy: Distincion Graduate
            </div>
            <p className="text-center text-base text-neutral-500">
              Awarded to top-performing graduates of Bangkit Academy,
              recognizing exceptional achievement in its intensive program. This
              distinction highlights expertise in technology, innovation, and
              professional development, achieved through rigorous learning and
              real-world project experience.
            </p>
          </div>

          <div className="relative w-full max-w-[24rem] rounded-lg">
            {!loadedImages["/assets/certificates/bangkit.png"] && (
              <div className="shimmer absolute inset-0 rounded-lg opacity-75" />
            )}
            <Image
              width={500}
              height={300}
              className="animate-breathe inset-0 cursor-pointer rounded-lg border object-contain"
              src="/assets/certificates/bangkit.png"
              alt="Cert"
              onClick={() => openPreview("/assets/certificates/bangkit.png")}
              onLoadingComplete={() =>
                handleImageLoad("/assets/certificates/bangkit.png")
              }
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mx-auto mt-28 max-w-screen-md px-4 text-center md:px-0"
        >
          <div className="mb-4 text-2xl text-neutral-100">
            23 Google Cloud Badges
          </div>
          <p className="text-base text-neutral-200">
            Showcasing achievements through Google Cloud skill badges, earned by
            completing hands-on labs and projects.
          </p>
        </div>

        <div data-aos="fade-up" className="relative overflow-hidden">
          {/* <Marquee pauseOnHover>
            <div className="flex h-[12rem] items-center space-x-2 overflow-x-auto ps-1 pe-1 md:pe-3 md:mt-8 md:h-[12rem] md:space-x-4">
              {badgeImages.map((num) => {
                const src = `/assets/certificates/cloudbadges/${num}.png`;
                return (
                  <div key={num} className="relative h-36 w-auto">
                    {!loadedImages[src] && (
                      <div className="shimmer absolute inset-0 rounded-lg opacity-75" />
                    )}
                    <Image
                      className="h-36 w-auto rounded-lg object-contain transition-transform hover:scale-105"
                      src={src}
                      alt={`Badge ${num}`}
                      width={150}
                      height={150}
                      onLoadingComplete={() => handleImageLoad(src)}
                    />
                  </div>
                );
              })}
            </div>
          </Marquee> */}
          <Marquee pauseOnHover>
            <div className="flex h-[12rem] items-center space-x-2 overflow-x-auto ps-1 pe-1 md:mt-8 md:h-[12rem] md:space-x-4 md:pe-3">
              {badgeImages.map((num) => {
                const src = `/assets/certificates/cloudbadges/${num}.png`;
                const randomDelay = getRandomDelay();
                return (
                  <div key={num} className="relative h-36 w-auto">
                    {!loadedImages[src] && (
                      <div className="shimmer absolute inset-0 rounded-lg opacity-75" />
                    )}
                    <Image
                      className={`animate-breathe h-36 w-auto rounded-lg object-contain transition-transform hover:scale-105 ${randomDelay}`}
                      src={src}
                      alt={`Badge ${num}`}
                      width={150}
                      height={150}
                      onLoadingComplete={() => handleImageLoad(src)}
                    />
                  </div>
                );
              })}
            </div>
          </Marquee>

          {/* Left Gradient Overlay */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[6rem] bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent"></div>

          {/* Right Gradient Overlay */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[6rem] bg-gradient-to-l from-neutral-900/95 via-neutral-900/50 to-transparent"></div>
        </div>

        <div className="mt-16 px-4 text-center md:px-0">
          <div className="mb-4 text-2xl text-neutral-100">
            Other Certificates
          </div>
          <p className="text-base text-neutral-200">
            A collection of certifications in IT Support, Web Development,
            Backend Development, and Cloud Engineering.
          </p>
        </div>

        <div className="mx-auto mt-8 flex h-auto max-w-screen-xl flex-wrap items-start justify-center gap-4">
          {[
            {
              src: "/assets/certificates/0.png",
              title: "Operating Systems and You",
            },
            {
              src: "/assets/certificates/1.png",
              title: "Operating Systems and You",
            },
            { src: "/assets/certificates/2.png", title: "Computer Networking" },
            {
              src: "/assets/certificates/3.png",
              title: "System Administration",
            },
            { src: "/assets/certificates/4.png", title: "IT Security" },
            {
              src: "/assets/certificates/5.png",
              title: "Technical Support Fundamentals",
            },
            {
              src: "/assets/certificates/6.png",
              title: "Web Programming Basics",
            },
            { src: "/assets/certificates/7.png", title: "Cloud Engineer" },
            { src: "/assets/certificates/8.png", title: "JavaScript Basics" },
            { src: "/assets/certificates/9.png", title: "Backend Development" },
          ].map((item, index) => (
            <div
              key={item.src}
              className="flex w-[40%] flex-col items-center gap-2 rounded-md md:w-[25%] lg:w-[20%]"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full">
                {!loadedImages[item.src] && (
                  <div className="shimmer absolute inset-0 rounded-md opacity-75" />
                )}
                <Image
                  src={item.src}
                  alt={item.title}
                  width={200}
                  height={150}
                  className={`animate-breathe cursor-pointer rounded-md ${getRandomDelay()}`}
                  onClick={() => openPreview(item.src)}
                  onLoadingComplete={() => handleImageLoad(item.src)}
                />
              </div>
              <div className="text-center">
                <div className="mb-1 text-neutral-400">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={handleClosePreview}
        >
          <div
            className={`relative max-w-3xl p-4 ${
              isExiting ? "animate-popup-exit" : "animate-popup-enter"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="Preview"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
