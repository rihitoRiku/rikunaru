"use client";
import React, { useEffect, useState } from "react";
import { Image } from "antd";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import { MdOutlineWork } from "react-icons/md";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { RiArchiveDrawerFill } from "react-icons/ri";
import Loadercomponent from "../components/LoaderComponent";
import "aos/dist/aos.css";

export default function page() {
  const projectItems = [
    {
      id: 1,
      title: "Shiroplane Artworks Showcases",
      description:
        "A full-stack web app portfolio and client management platform featuring an animated UI/UX design with a paper-inspired theme for an interactive, artistic experience. The app is fully responsive across all devices, with an elegant layout and fonts for a visually engaging presentation. Optimized for fast performance, it offers smooth navigation and quick load times. Developed end-to-end, this solo project covered the complete SDLC,  from UI/UX design to deployment",
      techStack:
        "ReactJs, Tailwind, ExpressJs, MongoDB, Cloudinary, Google Captcha, Emailjs, SCSS, HTML, CSS, JS",
      // imgSrc: "./Assets/Projects/shiro.png",
      link: "https://github.com/rihitoRiku/shiroplaneApp",
    },
    {
      id: 2,
      title: "OcToefl: Gamified Learning App with Bayesian Knowledge Tracing",
      description:
        "A dynamic full-stack learning app designed to make TOEFL preparation engaging and adaptive. Users build unique profiles by collecting stars, rank badges, and customizable avatars, while tracking their progress through milestones and quests. The app features interactive quizzes/exam, one adapt to the learner’s needs via Bayesian Knowledge Tracing, and a history of challenges to review past attempts. instant feedback, completion monitoring, leaderboards, customizable statuses, and a points-based store, OcToefl creates an immersive and personalized learning journey",
      techStack:
        "Next.js, React.js, Express.js, MongoDB, TailwindCSS, Zustand, Formik, ReactQuill, SCSS, HTML, CSS, JS",
      // imgSrc: "./Assets/Projects/motion.png",
      link: "https://github.com/rihitoRiku/motionClient",
    },
    {
      id: 3,
      title: "AI Chatbot with Vue",
      description:
        "This project responsive web application powered by Cohere's Command-R-08-2024 language model, designed to provide intelligent, predefined responses to user queries. With a simple, clean interface and fast performance, the chatbot delivers a seamless experience across both desktop and mobile devices, making it easy for users to access information quickly and efficiently.",
      techStack: "Vue.js, Vite.js, Tailwind, HTML, CSS, JS",
      // imgSrc: "./Assets/Projects/vue.png",
      link: "https://github.com/rihitoRiku/vue-chatbotv2",
    },
    {
      id: 4,
      title: "Nutriast: Health Monitoring Mobile App",
      description:
        "A collaborative full-stack web app designed for health monitoring and cardiovascular disease prediction using machine learning. Developed by a team of six (3 full-stack/DevOps, 2 ML engineers, 1 mobile developer), Nutriast leverages Google Cloud and TensorFlow to integrate a predictive model trained on Kaggle data. The app includes extensive nutrition data, food intake tracking, and personalized health insights, offering users a robust tool for proactive health management.",
      techStack:
        "Express.js, Kotlin, Tensorflow.js Machine Learning, Google Collab, Python, Flask, Android Studio, Google Cloud Run, Google Cloud Bucket",
      link: "https://github.com/C23-PC718",
    },
    {
      id: 5,
      title: "Nutriast: Health Monitoring Web-App",
      description:
        "Transformed a mobile app into a full-stack web app, integrating an existing deployed machine learning model. Handled all roles from UI/UX design to backend development, delivering a responsive interface and robust architecture, showcasing full-stack and ML integration expertise.",
      techStack:
        "Typescript, Next.js, React.js, TailwindCSS, Express.js, MongoDB, SCSS, HTML, CSS, JS",
      // imgSrc: "project-image-4.jpg",
      link: "https://github.com/rihitoRiku/NutriastApp",
    },
    {
      id: 6,
      title: "Bank Sampah Management & Information System",
      description:
        "Built a comprehensive Bank Sampah Management & Information System for city-wide waste tracking, including an admin system for managing users, waste databases, and price-per-weight configurations. Enabled CRUD operations, an interactive dashboard for trend visualization, and a wallet feature for redeeming rewards based on collected waste. This system enhances environmental sustainability by streamlining waste management and incentivizing recycling efforts.",
      techStack:
        "Typescript, Next.js, React.js, TailwindCSS, Google AppScript, ApexChart, SCSS, HTML, CSS, JS",
      // imgSrc: "project-image-5.jpg",
      link: "https://github.com/rihitoRiku/BankSampah",
    },
    {
      id: 7,
      title: "E-Commerce: Utami Bakery Store",
      description:
        " Led front-end development in a team project, designing UI/UX for a bakery web app with full e-commerce features, including product catalog, details page, cart, and checkout. Built an admin system for product management and integrated WhatsApp for customer communication. Collaborated closely with backend, data teams, and clients to ensure feature alignment and optimal user experience.",
      techStack: "React.js, MUI, HTML, CSS, JS",
      link: "https://github.com/rihitoRiku/UtamiBakery",
    },
    {
      id: 8,
      title: "Personal Profile",
      description:
        "Developed a personal portfolio website to showcase my bio, education, projects, and contact information. Designed a visually appealing, dark-mode interface and integrated GitHub contribution data using GraphQL. Focused on creating an engaging, modern user experience to highlight my background, skills, and professional journey.",
      techStack: "React.js, Next.js, TailwindCSS, SCSS, HTML, CSS, JS",
      // imgSrc: "project-image-7.jpg",
      link: "https://github.com/rihitoRiku/perprof",
    },
    {
      id: 9,
      title: "Sales Admin Dashboard",
      description:
        "Developed a full-stack Sales Admin Dashboard for managing customers, products, and transactions. Implemented interactive charts and graphs for data visualization, pagination for data lists, and a dark mode option. This project streamlined sales administration by providing an intuitive, data-driven interface for efficient management and insights.",
      techStack:
        "React.js, Express.js, MongoDB, MUI, Redux, Nivo, SCSS, HTML, CSS, JS",
      // imgSrc: "project-image-8.jpg",
      link: "https://github.com/rihitoRiku/AdminDashboard",
    },
    {
      id: 10,
      title: "E-commerce: Metime Clothing",
      description:
        "Developed the front-end of a mobile app for an e-commerce clothing store in a team of five. Implemented product catalog displays, cart, and checkout features to create a seamless shopping experience for users. Focused on delivering a clean, responsive interface optimized for mobile use.",
      techStack: "Flutter, Dart, Android Studio, GetX",
      // imgSrc: "project-image-9.jpg",
      link: "https://github.com/rihitoRiku/MeTimeStore",
    },
    {
      id: 11,
      title: "Random Meal Generator",
      description:
        "Developed a native PHP project to suggest random meals, utilizing a SQL database to store and retrieve food data. Designed and built both the front and backend with an MVP architecture, ensuring a structured, efficient, and user-friendly experience.",
      techStack: "PHP, Bootsrap, MySQL",
      // imgSrc: "project-image-10.jpg",
      link: "https://github.com/rihitoRiku/RandomMealGenerator",
    },
    {
      id: 12,
      title: "Survival Hop 2D Java Game",
      description:
        "Created a 2D game using Java and Apache NetBeans, focusing on object-oriented principles. Connected to a MySQL database to track game progress and implemented user controls for movement, jumping, and point accumulation. Enhanced gameplay with interactive functions and database integration for a dynamic user experience.",
      techStack: "Java, Apache Netbeans, MySQl",
      link: "https://github.com/rihitoRiku/myHopGame_Java",
    },
  ];

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

  // Fetch Github Stats
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
      <div className="max-w-screen-md mx-auto h-[620px] font-rethink ">
        <div className="w-full max-w-4xl mx-auto p-4 grid grid-cols-2 gap-4 h-[500px]">
          {/* Left column */}
          <div
            data-aos="zoom-in"
            className="relative overflow-hidden rounded-lg border border-borderColorTransparent h-[320px]"
          >
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-zinc-900 rounded-full" />
            <div className="relative h-full flex items-end justify-end px-4 pb-8 lg:px-8">
              <h2 className="text-2xl sm:text-3xl text-end font-bold">
                Professional
                <br />
                Standard
              </h2>
            </div>
          </div>

          {/* Right column */}
          <div className="grid grid-rows-2 gap-4 h-[320px]">
            {/* Image container */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="relative rounded-lg border border-borderColorTransparent bg-zinc-900 overflow-hidden"
            >
              <div className="absolute inset-0 " />
            </div>

            {/* Clean Code & Design container */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="relative rounded-lg border border-borderColorTransparent"
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <h3 className="text-lg font-light">
                  Clean Code &<br />
                  Design
                </h3>
                <p className="text-gray-600 text-sm">
                  Focused on clean, maintainable code and efficient, scalable
                  design.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row - full width */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="col-span-2 relative rounded-lg border border-borderColorTransparent overflow-hidden h-[240px]"
          >
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900 clip-path-custom"
              style={{
                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            />
            <div className="relative p-8 flex flex-col h-full justify-between max-w-[25rem]">
              <h3 className="text-2xl font-light">
                User Experience
                <br />
                Centric
              </h3>
              <p className="text-gray-600 text-sm">
                Delivering scalable solutions user-first design and a focus on
                client satisfaction and exceptional user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="font-rethink relative max-w-screen-md mx-auto h-full p-4"
      >
        <div className="text-primarytext mb-8">
          <div className="flex justify-start items-center gap-2 text-3xl ">
            <RiArchiveDrawerFill className="mb-1" />
            <h1 className="font-medium mb-2">Latest Project</h1>
          </div>

          <p className="text-base">
            Explore a collection of my projects. Each project includes a brief
            description, the technologies and tools used, and a link to the
            GitHub repository for further exploration. Some projects have been
            deployed and are accessible to the public.
          </p>
        </div>
        <div
          className={`${isExpanded ? "h-auto" : "h-[600px]"} overflow-hidden`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full relative">
            {projectItems
              .slice(0, isExpanded ? projectItems.length : 9)
              .map((card) => (
                <a
                  href={card.link}
                  target="_blank"
                  key={card.id}
                  className="w-full aspect-square border border-borderColorTransparent rounded-xl overflow-hidden"
                >
                  {card.imgSrc && (
                    <Image
                      src={card.imgSrc}
                      alt={card.title}
                      className="w-full h-1/2 object-cover"
                    />
                  )}
                  <div
                    className={`flex flex-col justify-between p-4 ${
                      card.imgSrc ? "h-1/2" : "h-full"
                    }`}
                  >
                    <div className="">
                      <h3 className="text-base font-semibold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {card.description}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-1 mt-4">
                      {card.techStack}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>

        {!isExpanded && (
          <>
            <div className="absolute inset-x-0 bottom-0 flex justify-center items-end h-[20%] bg-gradient-to-t from-zinc-950 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 flex justify-center items-end h-[30%] bg-gradient-to-t from-zinc-950 to-transparent">
              <button
                onClick={toggleCards}
                className="w-full flex justify-center items-center gap-2 px-6 py-2 text-primarytext rounded-lg"
              >
                <FaAnglesDown className="animate-bounce" />
                Show More
              </button>
            </div>
          </>
        )}

        {isExpanded && (
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleCards}
              className="w-full flex justify-center items-center gap-2 px-6 py-2 text-primarytext rounded-lg"
            >
              <FaAnglesUp />
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* Github Calendar */}
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

            <div className="overflow-scroll max-w-max font-rethink">
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
      <div data-aos="fade-up" className="relative mt-24 max-w-screen-lg mx-auto text-secondarytext font-rethink text-sm">
        {/* Text Background */}
        <div className="absolute inset-0 flex justify-center items-start text-5xl md:text-9xl font-bold -z-10 text-zinc-800/20">
          CERTIFICATE
        </div>
        {/* Header */}
        <div className="relative pt-16 -z-10 text-white">
          <div className="ms-4 lg:ms-8 text-xl lg:text-3xl flex flex-col items-center justify-center font-semibold text-center">
            <div
              className="border rounded-xl p-2 mb-2 w-fit bg-zinc-950"
              style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
            >
              <PiCertificateFill className="text-4xl" />
            </div>
            <span>Certificate</span>
          </div>
        </div>
        <div className="text-base text-center mt-4 px-4 text-primarytext">
          A collection of certifications earned through completing courses and
          hands-on projects on Dicoding, Coursera, and Google Cloud. These
          certifications highlight my expertise in IT Support, Web Development,
          Backend Development, and Cloud Engineering.
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
                A prestigious certification proving expertise in deploying and
                managing Google Cloud solutions. Highly valued in the industry,
                it requires hands-on experience and a solid understanding of
                cloud operations, with a challenging exam to validate these
                skills.
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
                Awarded to top-performing graduates of Bangkit Academy,
                recognizing exceptional achievement in its intensive program.
                This distinction highlights expertise in technology, innovation,
                and professional development, achieved through rigorous learning
                and real-world project experience.
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

          <div
            data-aos="fade-up"
            className="mt-28 text-center px-4 md:px-0 max-w-screen-md mx-auto"
          >
            {" "}
            <div className="mb-4 text-2xl text-white">
              23 Google Cloud Badges
            </div>
            <p className="text-base">
              Showcasing achievements through Google Cloud skill badges, earned
              by completing hands-on labs and projects. Validate my expertise in
              cloud computing, infrastructure, and solutions using Google Cloud
              technologies.
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
              A collection of certifications in IT Support, Web Development,
              Backend Development, and Cloud Engineering.
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
