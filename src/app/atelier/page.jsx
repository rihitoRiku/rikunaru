"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Loadercomponent from "../components/LoaderComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineWork } from "react-icons/md";

import { Image } from "antd";

const cards = [
  {
    id: 1,
    title: "Card Title",
    description: "description...",
    hasImage: true,
    imagePosition: "top",
  },
  {
    id: 2,
    title: "Card Title",
    description: "description...",
    hasImage: false,
  },
  {
    id: 3,
    title: "Card Title",
    description: "description...",
    hasImage: true,
    imagePosition: "top",
  },
  {
    id: 4,
    title: "Card Title",
    description: "description...",
    hasImage: false,
  },
  {
    id: 5,
    title: "Card Title",
    description: "description...",
    hasImage: true,
    imagePosition: "top",
  },
  {
    id: 6,
    title: "Card Title",
    description: "description...",
    hasImage: false,
  },
];

export default function page() {
  const allCards = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Card Title ${index + 1}`,
    description: "description...",
    hasImage: index % 2 === 0,
    imagePosition: "top",
  }));

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCards = () => {
    setIsExpanded(!isExpanded);
  };

  // State untuk kalender GitHub
  const [contributionData, setContributionData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "rihitoRiku";
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchGitHubData = async () => {
      const contributionQuery = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
            repositories {
              totalCount
            }
            bio
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: contributionQuery,
            variables: { username },
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        const user = result.data?.user;
        const calendar = user?.contributionsCollection?.contributionCalendar;

        if (!calendar)
          throw new Error("Invalid data structure received from GitHub API");

        const contributions = calendar.weeks || [];

        setContributionData({
          totalContributions: calendar.totalContributions || 0,
          contributions,
        });

        setProfileData({
          totalRepositories: user?.repositories?.totalCount || 0,
          bio: user?.bio || "",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username, token]);

  const getColor = (count) => {
    if (count === 0) return "bg-zinc-900";
    if (count < 5) return "bg-green-600";
    if (count < 10) return "bg-green-400";
    return "bg-green-200";
  };

  const days = ["Mon", "Wed", "Fri"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Create month labels logic (only when the month changes)
  const monthLabels = [];
  let lastMonth = null;

  contributionData?.contributions.forEach((week, index) => {
    const firstDayOfWeek = new Date(week.contributionDays[0].date);
    const currentMonth = firstDayOfWeek.getMonth();

    if (currentMonth !== lastMonth) {
      monthLabels.push({
        label: months[currentMonth],
        index,
      });
      lastMonth = currentMonth;
    }
  });

  const badgeImages = Array.from({ length: 14 }, (_, i) => i + 1); // Creates an array [1, 2, 3, ..., 14]

  useEffect(() => {
    AOS.init({ once: true, mirror: false });
  }, []);

  return (
    <>
      {/* Project Section */}

      <div className="max-w-screen-md mx-auto h-[620px] font-rethink">
        <div className="w-full max-w-4xl mx-auto p-4 grid grid-cols-2 gap-4 h-[500px]">
          {/* Left column */}
          <div className="relative overflow-hidden rounded-lg border border-borderColorTransparent h-[320px]">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-zinc-900 rounded-full" />
            <div className="relative h-full flex items-end justify-end px-4 pb-8 lg:px-8">
              <h2 className="text-3xl text-end font-bold">
                Professional
                <br />
                Project
              </h2>
            </div>
          </div>

          {/* Right column */}
          <div className="grid grid-rows-2 gap-4 h-[320px]">
            {/* Image container */}
            <div className="relative rounded-lg border border-borderColorTransparent bg-zinc-900 overflow-hidden">
              <div className="absolute inset-0 " />
            </div>

            {/* Clean Code & Design container */}
            <div className="relative rounded-lg border border-borderColorTransparent">
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <h3 className="text-lg font-light">
                  Clean Code &<br />
                  Design
                </h3>
                <p className="text-gray-600 text-sm">also text here</p>
              </div>
            </div>
          </div>

          {/* Bottom row - full width */}
          <div className="col-span-2 relative rounded-lg border border-borderColorTransparent overflow-hidden h-[240px]">
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900 clip-path-custom"
              style={{
                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            />
            <div className="relative p-8 flex flex-col h-full justify-between">
              <h3 className="text-2xl font-light">
                User Experience
                <br />
                Centric
              </h3>
              <p className="text-gray-600 text-sm">also text here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="font-rethink relative max-w-screen-md mx-auto h-full p-4">
        <div
          className={`${isExpanded ? "h-auto" : "h-[600px]"} overflow-hidden`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full relative">
            {allCards.slice(0, isExpanded ? allCards.length : 9).map((card) => (
              <div
                key={card.id}
                className="w-full aspect-square border border-borderColorTransparent rounded-xl overflow-hidden"
              >
                {card.hasImage && (
                  <div className="w-full h-1/2 bg-zinc-900 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">IMAGE</span>
                  </div>
                )}
                <div className={`p-4 ${card.hasImage ? "h-1/2" : "h-full"}`}>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!isExpanded && (
          <>
            <div className="absolute inset-x-0 bottom-0 flex justify-center items-end h-[20%] bg-gradient-to-t from-zinc-950 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 flex justify-center items-end h-[30%] bg-gradient-to-t from-zinc-950 to-transparent">
              <button
                onClick={toggleCards}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400"
              >
                Show More
              </button>
            </div>
          </>
        )}

        {isExpanded && (
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleCards}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400"
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {loading ? (
        <div className="mt-32 w-full h-64 flex justify-center items-center">
          <Loadercomponent />
        </div>
      ) : error ? (
        <div className="w-full h-64 flex justify-center items-center text-red-500">
          Error: {error}
        </div>
      ) : (
        <div className="mt-32 pt-8 flex flex-col justify-center items-center">
          <div className="relative max-w-screen-lg mx-auto text-secondarytext font-rethink text-sm"></div>
          {/* Github Calendar */}
          <div className="text-xl font-rethink mb-4">
            My Github Contribution Calendar
          </div>
          <div className="flex flex-col border rounded-md py-4 px-6 justify-center w-full lg:w-[60rem] border-borderColorTransparent">
            <div className="flex justify-between items-center">
              <div className="text-primarytext text-sm font-semibold mb-2">
                {contributionData.totalContributions} contributions in the last
                year
              </div>
              <div className="text-primarytext text-sm font-semibold mb-2">
                {profileData.totalRepositories} total repositories
              </div>
              {/* <img
                src={`https://komarev.com/ghpvc/?username=rihitoRiku&color=black`}
                alt="Profile views"
                className="h-6"
              /> */}
            </div>

            <div className="overflow-hidden max-w-max font-rethink">
              <div className="flex flex-col bg-black rounded mt-2 w-max">
                <div className="flex w-[60rem]">
                  <div className="flex flex-col justify-evenly mr-2 text-xs text-secondarytext">
                    {days.map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>
                  <div className="w-full">
                    <div
                      className="grid gap-y-1 gap-x-0.5"
                      style={{
                        gridTemplateColumns: `repeat(${contributionData.contributions.length}, minmax(0, 1fr))`,
                        gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                      }}
                    >
                      {contributionData.contributions.map((week, weekIndex) =>
                        week.contributionDays.map((day, dayIndex) => (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className={`w-3 h-3 ${getColor(
                              day.contributionCount
                            )} rounded-sm`}
                            style={{
                              gridRow: dayIndex + 1,
                              gridColumn: weekIndex + 1,
                            }}
                            title={`${day.contributionCount} contributions on ${day.date}`}
                          />
                        ))
                      )}
                    </div>
                    <div className="flex justify-between text-xs mt-2 text-secondarytext">
                      {monthLabels.map(({ label, index }) => (
                        <div key={index} className="text-center">
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center mt-2 text-xs text-secondarytext">
              <span className="me-1">Less</span>
              <div className="flex gap-1 ml-1">
                {[0, 4, 9, 15].map((count) => (
                  <div
                    key={count}
                    className={`w-3 h-3 ${getColor(count)} rounded-sm`}
                  />
                ))}
              </div>
              <span className="ms-1">More</span>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Showcases */}
      <div className="relative mt-24 max-w-screen-lg mx-auto text-secondarytext font-rethink text-sm">
        {/* Text Background */}
        <div className="absolute inset-0 flex justify-center items-start text-7xl md:text-9xl font-bold -z-10 text-zinc-800/20">
          CERTIFICATE
        </div>
        {/* Header */}
        <div className="relative pt-16 -z-10 text-white">
          <div className="ms-4 lg:ms-8 text-xl lg:text-3xl flex flex-col items-center justify-center font-semibold text-center">
            <div
              className="border rounded-xl p-2 mb-2 w-fit bg-zinc-950"
              style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
            >
              <MdOutlineWork className="text-4xl" />
            </div>
            <span>Certificate</span>
          </div>
        </div>
        <div className="text-base text-center mt-4 px-4 text-primarytext">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
          officiis quidem itaque aliquid debitis consequuntur nobis rerum
          dolores obcaecati repudiandae provident voluptates voluptatum odio
          totam ducimus voluptas reprehenderit veniam. Quaerat.
        </div>
        <div className="">
          <div
            data-aos="zoom-in"
            className="mt-20 w-full flex flex-col gap-6 md:gap-8 md:flex-row justify-center items-center px-4 md:px-0"
          >
            <div className="w-full max-w-[24rem] rounded-lg ">
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
            className="mt-28 w-full flex flex-col gap-6 md:gap-8 justify-center items-center px-4 md:px-0"
          >
            <div className="md:max-w-[36rem] w-full text-center md:text-left md:order-1 order-2">
              <div className="text-5xl mb-4 text-white font-passionsConflict text-center">
                Bangkit Academy: Distincion Graduate
              </div>
              <p className="text-base text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda doloremque dolore, iure aliquam nulla quo.
              </p>
            </div>

            <div className="w-full max-w-[24rem] rounded-lg">
              <Image
                className="inset-0 object-contain rounded-lg border"
                src="./Certificates/bangkit.png"
                alt="Cert"
                preview={{ src: "./Certificates/bangkit.png" }}
              />
            </div>
          </div>

          <div data-aos="fade-up" className="mt-28 text-center px-4 md:px-0">
            {" "}
            <div className="mb-4 text-2xl text-white">
              23 Google Cloud Badges
            </div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              obcaecati natus a eveniet aut odio.
            </p>
          </div>

          <div data-aos="fade-up" className="px-4 md:px-0">
            <Marquee pauseOnHover>
              <div className="h-36 md:h-36 flex space-x-1 md:space-x-2 mt-6 md:mt-8 me-2 overflow-x-auto">
                {badgeImages.map((num) => (
                  <Image
                    key={num}
                    className="inset-0 h-full w-auto hover:scale-105 rounded-lg border object-contain cursor-pointer"
                    src={`./Certificates/Badges/${num}.png`}
                    alt={`Badge ${num}`}
                    preview={{ src: `./Certificates/Badges/${num}.png` }}
                    style={{ width: "150px", height: "auto" }}
                  />
                ))}
              </div>
            </Marquee>
          </div>

          <div className="mt-16 text-center px-4 md:px-0">
            {" "}
            <div className="mb-4 text-2xl text-white">Other Certificates</div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              obcaecati natus a eveniet aut odio.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-screen-xl h-auto flex justify-center items-start flex-wrap gap-4 ">
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
