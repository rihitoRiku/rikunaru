"use client";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image } from 'antd';

export default function page() {
  const badgeImages = Array.from({ length: 14 }, (_, i) => i + 1); // Creates an array [1, 2, 3, ..., 14]

  useEffect(() => {
    AOS.init({ once: false, mirror: false });
  }, []);

  return (
    <>
      <div className="max-w-screen-lg mx-auto text-secondarytext font-rethink text-sm px-4 md:px-0">
        <div className="">
          <div
            data-aos="zoom-in"
            className="mt-16 w-full flex flex-col gap-6 md:gap-8 md:flex-row justify-center items-center"
          >
            <div className="w-full max-w-[24rem] min-w-[20rem] rounded-lg mt-16">
              <Image
                className="inset-0 object-contain rounded-lg border"
                src="./Certificates/b.png"
                alt="Cert"
                preview={{ src: "./Certificates/b.png" }}
              />
            </div>
            <div className="md:max-w-[26rem] w-full text-center md:text-left">
              <div className="text-5xl mb-4 text-white font-passionsConflict">
                Google Cloud Certified Associate Cloud Engineer
              </div>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda doloremque dolore, iure aliquam nulla quo.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="mt-28 w-full flex flex-col gap-6 md:gap-8 justify-center items-center"
          >
            <div className="md:max-w-[36rem] w-full text-center md:text-left md:order-1 order-2">
              <div className="text-5xl mb-4 text-white font-passionsConflict">
                Bangkit Academy: Distincion Graduate
              </div>
              <p className="text-base md:text-center text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda doloremque dolore, iure aliquam nulla quo.
              </p>
            </div>

            <div className="w-full max-w-[24rem] min-w-[20rem] rounded-lg">
              <Image
                className="inset-0 object-contain rounded-lg border"
                src="./Certificates/bangkit.png"
                alt="Cert"
                preview={{ src: "./Certificates/bangkit.png" }}
              />
            </div>
          </div>

          <div data-aos="fade-up" className="mt-28 text-center">
            {" "}
            <div className="mb-4 text-2xl text-white">23 Google Cloud Badges</div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              obcaecati natus a eveniet aut odio.
            </p>
          </div>

          <div data-aos="fade-up" className="">
            <Marquee pauseOnHover>
              <div className="h-36 md:h-36 flex space-x-1 md:space-x-2 mt-6 md:mt-8 me-2 overflow-x-auto">
                {badgeImages.map((num) => (
                  <Image
                    key={num}
                    className="inset-0 h-full w-auto hover:scale-105 rounded-lg border object-contain cursor-pointer"
                    src={`./Certificates/Badges/${num}.png`}
                    alt={`Badge ${num}`}
                    preview={{ src: `./Certificates/Badges/${num}.png` }}
                    style={{ width: '150px', height: 'auto' }}
                  />
                ))}
              </div>
            </Marquee>
          </div>

          <div className="mt-16 text-center">
            {" "}
            <div className="mb-4 text-2xl text-white">Other Certificates</div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              obcaecati natus a eveniet aut odio.
            </p>
          </div>

          <div className="mx-auto mt-8 pb-16 max-w-screen-xl h-auto flex justify-center items-start flex-wrap gap-4">
            {[
              {
                src: "./Certificates/0.png",
                title: "Operating Systems and You: Becoming a Power User",
              },
              {
                src: "./Certificates/1.png",
                title: "Operating Systems and You: Becoming a Power User",
              },
              {
                src: "./Certificates/2.png",
                title: "The Bits and Bytes of Computer Networking",
              },
              {
                src: "./Certificates/3.png",
                title: "System Administration and IT Infrastructure Services",
              },
              {
                src: "./Certificates/4.png",
                title: "IT Security: Defense against the digital dark arts",
              },
              {
                src: "./Certificates/5.png",
                title: "Technical Support Fundamentals",
              },
              {
                src: "./Certificates/6.png",
                title: "Belajar Dasar Pemrograman Web",
              },
              {
                src: "./Certificates/7.png",
                title: "Menjadi Cloud Engineer",
              },
              {
                src: "./Certificates/8.png",
                title: "Belajar Dasar Pemrograman Javascript",
              },
              {
                src: "./Certificates/9.png",
                title:
                  "Belahar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-md flex flex-col items-center gap-2 lg:w-[20%] md:w-[25%] w-[40%]"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Image
                  src={item.src}
                  alt="Placeholder"
                  className="rounded-md"
                  style={{ aspectRatio: 4 / 3 }}
                  preview={{ src: item.src }}
                />
                <div className="text-center">
                  <div className=" mb-1">{item.title}</div>
                  <p className="text-gray-600"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
