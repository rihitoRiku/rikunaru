"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiCertificateFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";

export default function CertificateSection() {

  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (src: any) => {
    setPreviewImage(src);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  const badgeImages = Array.from({ length: 14 }, (_, i) => i + 1);

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
          <div className="w-full max-w-[24rem] rounded-lg">
            <Image
              width={500}
              height={300}
              className="inset-0 cursor-pointer rounded-lg border object-contain"
              src="/assets/certificates/b.png"
              alt="Cert"
              onClick={() => openPreview("/assets/certificates/b.png")}
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

          <div className="w-full max-w-[24rem] rounded-lg">
            <Image
              width={500}
              height={300}
              className="inset-0 cursor-pointer rounded-lg border object-contain"
              src="/assets/certificates/bangkit.png"
              alt="Cert"
              onClick={() => openPreview("/assets/certificates/bangkit.png")}
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mx-auto mt-28 max-w-screen-md px-4 text-center md:px-0"
        >
          {" "}
          <div className="mb-4 text-2xl text-neutral-100">
            23 Google Cloud Badges
          </div>
          <p className="text-base text-neutral-200">
            Showcasing achievements through Google Cloud skill badges, earned by
            completing hands-on labs and projects.
          </p>
        </div>

        <div data-aos="fade-up" className="relative overflow-hidden">
          <Marquee pauseOnHover>
            <div className="flex h-[12rem] items-center space-x-2 overflow-x-auto ps-1 pe-1 md:mt-8 md:h-[12rem] md:space-x-4">
              {badgeImages.map((num) => (
                <Image
                  key={num}
                  className="h-36 w-auto cursor-pointer rounded-lg object-contain transition-transform hover:scale-105"
                  src={`/assets/certificates/badges/${num}.png`}
                  alt={`Badge ${num}`}
                  width={150}
                  height={150}
                />
              ))}
            </div>
          </Marquee>

          {/* Left Gradient Overlay */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[6rem] bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent"></div>

          {/* Right Gradient Overlay */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[6rem] bg-gradient-to-l from-neutral-900/95 via-neutral-900/50 to-transparent"></div>
        </div>

        <div className="mt-16 px-4 text-center md:px-0">
          {" "}
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
              key={index}
              className="flex w-[40%] flex-col items-center gap-2 rounded-md md:w-[25%] lg:w-[20%]"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={200}
                height={150}
                className="cursor-pointer rounded-md"
                onClick={() => openPreview(item.src)}
              />
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
          onClick={closePreview}
        >
          <div
            className="relative max-w-3xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="Preview"
              width={600}
              height={400}
              className="rounded-lg"
            />
            {/* <button
              onClick={closePreview}
              className="absolute top-2 right-2 rounded-full bg-white p-2"
            >
              X
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
