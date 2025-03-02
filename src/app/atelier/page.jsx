"use client";
import React, { useEffect, useState } from "react";
import { Image, Modal } from "antd";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import { MdOutlineWork } from "react-icons/md";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { RiArchiveDrawerFill } from "react-icons/ri";
import Loadercomponent from "../../components/ui/loader-component";
import "aos/dist/aos.css";

export default function page() {
  // Project items
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
      demo: "https://shiroplaneproject.vercel.app/",
    },
    {
      id: 2,
      title: "OcToefl: Gamified Learning App with Bayesian Knowledge Tracing",
      description:
        "A dynamic full-stack learning app designed to make TOEFL preparation engaging and adaptive. Users build unique profiles by collecting stars, rank badges, and customizable avatars, while tracking their progress through milestones and quests. The app features interactive quizzes/exam, one adapt to the learner's needs via Bayesian Knowledge Tracing, and a history of challenges to review past attempts. instant feedback, completion monitoring, leaderboards, customizable statuses, and a points-based store, OcToefl creates an immersive and personalized learning journey",
      techStack:
        "Next.js, React.js, Express.js, MongoDB, TailwindCSS, Zustand, Formik, ReactQuill, SCSS, HTML, CSS, JS",
      // imgSrc: "./Assets/Projects/motion.png",
      link: "https://github.com/rihitoRiku/motionClient",
      demo: "https://motion-client.vercel.app/",
    },
    {
      id: 3,
      title: "AI Chatbot with Vue",
      description:
        "This project responsive web application powered by Cohere's Command-R-08-2024 language model, designed to provide intelligent, predefined responses to user queries. With a simple, clean interface and fast performance, the chatbot delivers a seamless experience across both desktop and mobile devices, making it easy for users to access information quickly and efficiently.",
      techStack: "Vue.js, Vite.js, Tailwind, HTML, CSS, JS",
      // imgSrc: "./Assets/Projects/vue.png",
      link: "https://github.com/rihitoRiku/vue-chatbotv2",
      demo: "https://vue-chatbotv2.vercel.app/",
    },
    {
      id: 4,
      title: "E-Commerce: Rikustore",
      description: "",
      techStack:
        "Typescript, Next.js, React.js, Express.js, Supabase, Postgree, Tailwind, HTML, CSS, JS",
      // imgSrc: "./Assets/Projects/vue.png",
      link: "https://github.com/rihitoRiku/riku-store",
      demo: "https://riku-store.vercel.app/",
    },
    {
      id: 5,
      title: "Nutriast: Health Monitoring Mobile App",
      description:
        "A collaborative full-stack web app designed for health monitoring and cardiovascular disease prediction using machine learning. Developed by a team of six (3 full-stack/DevOps, 2 ML engineers, 1 mobile developer), Nutriast leverages Google Cloud and TensorFlow to integrate a predictive model trained on Kaggle data. The app includes extensive nutrition data, food intake tracking, and personalized health insights, offering users a robust tool for proactive health management.",
      techStack:
        "Express.js, Kotlin, Tensorflow.js Machine Learning, Google Collab, Python, Flask, Android Studio, Google Cloud Run, Google Cloud Bucket",
      link: "https://github.com/C23-PC718",
    },
    {
      id: 6,
      title: "Nutriast: Health Monitoring Web-App",
      description:
        "Transformed a mobile app into a full-stack web app, integrating an existing deployed machine learning model. Handled all roles from UI/UX design to backend development, delivering a responsive interface and robust architecture, showcasing full-stack and ML integration expertise.",
      techStack:
        "Typescript, Next.js, React.js, TailwindCSS, Express.js, MongoDB, SCSS, HTML, CSS, JS",
      // imgSrc: "project-image-4.jpg",
      link: "https://github.com/rihitoRiku/NutriastApp",
    },
    {
      id: 7,
      title: "Bank Sampah Management & Information System",
      description:
        "Built a comprehensive Bank Sampah Management & Information System for city-wide waste tracking, including an admin system for managing users, waste databases, and price-per-weight configurations. Enabled CRUD operations, an interactive dashboard for trend visualization, and a wallet feature for redeeming rewards based on collected waste. This system enhances environmental sustainability by streamlining waste management and incentivizing recycling efforts.",
      techStack:
        "Typescript, Next.js, React.js, TailwindCSS, Google AppScript, ApexChart, SCSS, HTML, CSS, JS",
      // imgSrc: "project-image-5.jpg",
      link: "https://github.com/rihitoRiku/BankSampah",
    },
    {
      id: 8,
      title: "E-Commerce: Utami Bakery Store",
      description:
        " Led front-end development in a team project, designing UI/UX for a bakery web app with full e-commerce features, including product catalog, details page, cart, and checkout. Built an admin system for product management and integrated WhatsApp for customer communication. Collaborated closely with backend, data teams, and clients to ensure feature alignment and optimal user experience.",
      techStack: "React.js, MUI, HTML, CSS, JS",
      link: "https://github.com/rihitoRiku/UtamiBakery",
    },
    {
      id: 9,
      title: "Personal Profile",
      description:
        "Developed a personal portfolio website to showcase my bio, education, projects, and contact information. Designed a visually appealing, dark-mode interface and integrated GitHub contribution data using GraphQL. Focused on creating an engaging, modern user experience to highlight my background, skills, and professional journey.",
      techStack: "React.js, Next.js, TailwindCSS, SCSS, HTML, CSS, JS",
      // imgSrc: "project-image-7.jpg",
      link: "https://github.com/rihitoRiku/perprof",
      link: "https://rihitorihiro.vercel.app/",
    },
    {
      id: 10,
      title: "Sales Admin Dashboard",
      description:
        "Developed a full-stack Sales Admin Dashboard for managing customers, products, and transactions. Implemented interactive charts and graphs for data visualization, pagination for data lists, and a dark mode option. This project streamlined sales administration by providing an intuitive, data-driven interface for efficient management and insights.",
      techStack:
        "React.js, Express.js, MongoDB, MUI, Redux, Nivo, SCSS, HTML, CSS, JS",
      // imgSrc: "project-image-8.jpg",
      link: "https://github.com/rihitoRiku/AdminDashboard",
    },
    {
      id: 11,
      title: "E-commerce: Metime Clothing",
      description:
        "Developed the front-end of a mobile app for an e-commerce clothing store in a team of five. Implemented product catalog displays, cart, and checkout features to create a seamless shopping experience for users. Focused on delivering a clean, responsive interface optimized for mobile use.",
      techStack: "Flutter, Dart, Android Studio, GetX",
      // imgSrc: "project-image-9.jpg",
      link: "https://github.com/rihitoRiku/MeTimeStore",
    },
    {
      id: 12,
      title: "Random Meal Generator",
      description:
        "Developed a native PHP project to suggest random meals, utilizing a SQL database to store and retrieve food data. Designed and built both the front and backend with an MVP architecture, ensuring a structured, efficient, and user-friendly experience.",
      techStack: "PHP, Bootsrap, MySQL",
      // imgSrc: "project-image-10.jpg",
      link: "https://github.com/rihitoRiku/RandomMealGenerator",
    },
    {
      id: 13,
      title: "Survival Hop 2D Java Game",
      description:
        "Created a 2D game using Java and Apache NetBeans, focusing on object-oriented principles. Connected to a MySQL database to track game progress and implemented user controls for movement, jumping, and point accumulation. Enhanced gameplay with interactive functions and database integration for a dynamic user experience.",
      techStack: "Java, Apache Netbeans, MySQl",
      link: "https://github.com/rihitoRiku/myHopGame_Java",
    },
  ];

  // Project items show more
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleCards = () => {
    setIsExpanded(!isExpanded);
  };

  // Project Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const showModal = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedProject(null);
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
  const badgeImages = Array.from({ length: 14 }, (_, i) => i + 1);

  // AOS initalize
  useEffect(() => {
    AOS.init({ once: true, mirror: false });
  }, []);

  const [isHovered, setIsHovered] = useState(null);

  return (
    <>
      {/* Project Section */}
      <div className="w-full bg-zinc-950 font-rethink">
        <div className="mx-auto h-[620px] max-w-screen-md">
          <div className="mx-auto grid h-[500px] w-full max-w-4xl grid-cols-2 gap-4 p-4">
            {/* Left column */}
            <div
              data-aos="zoom-in"
              className="relative h-[320px] overflow-hidden rounded-lg border border-borderColorTransparent"
            >
              <div
                className="absolute -left-20 -top-20 h-96 w-96 rounded-full border border-borderColorTransparent"
                style={{
                  backgroundImage: "url('/paper.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                }}
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
                className="relative overflow-hidden rounded-lg border border-borderColorTransparent"
                style={{
                  backgroundImage: "url('/color.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0" />
              </div>

              {/* Clean Code & Design container */}
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="relative rounded-lg border border-borderColorTransparent"
              >
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h3 className="text-lg font-light">
                    Clean Code &<br />
                    Design
                  </h3>
                  <p className="text-sm text-gray-600">
                    Focused on clean, maintainable code & scalable design.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom row - full width */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="relative col-span-2 h-[240px] overflow-hidden rounded-lg border border-borderColorTransparent"
            >
              <div
                className="clip-path-custom absolute right-0 top-0 h-full w-1/2"
                style={{
                  clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
                  backgroundImage: "url('/neuron.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="relative flex h-full max-w-[25rem] flex-col justify-between p-8">
                <h3 className="text-2xl font-light">
                  User Experience
                  <br />
                  Centric
                </h3>
                <p className="text-sm text-gray-600">
                  Delivering scalable solutions user-first design and a focus on
                  client satisfaction and exceptional user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        {/* Projects */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative mx-auto h-full max-w-screen-md p-4 font-rethink"
        >
          <div className="mb-8 text-primarytext">
            <div className="flex items-center justify-start gap-2 text-3xl">
              <RiArchiveDrawerFill className="mb-1" />
              <h1 className="mb-2 font-medium">Latest Project</h1>
            </div>

            <p className="text-base">
              Explore a collection of my projects. Each project includes a brief
              description, the technologies and tools used, and a link to the
              GitHub repository for further exploration. Some projects have been
              deployed and are accessible to the public.
            </p>
          </div>

          {/* Project Grid */}
          <div className="relative grid w-full grid-cols-2 gap-4 md:grid-cols-3">
            {projectItems.map((card, index) => {
              // Ensure only reveal up to 9 items if not expanded
              const isVisible = isExpanded || index < 6;

              return (
                <motion.div
                  onClick={() => showModal(card)}
                  key={card.id}
                  className="aspect-square w-full cursor-pointer overflow-hidden rounded-xl border border-borderColorTransparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ display: isVisible ? "block" : "none" }}
                  whileHover={{
                    rotate: 1,
                    scale: 1.02,
                    borderColor: "rgba(107, 114, 128, 0.5)",
                  }}
                  onHoverStart={() => setIsHovered(card.id)}
                  onHoverEnd={() => setIsHovered(null)}
                >
                  {card.imgSrc && (
                    <Image
                      src={card.imgSrc}
                      alt={card.title}
                      className="h-1/2 w-full object-cover"
                    />
                  )}
                  <div
                    className={`flex flex-col justify-between p-4 ${
                      card.imgSrc ? "h-1/2" : "h-full"
                    }`}
                  >
                    <div>
                      <motion.h2
                        className="title"
                        initial={{ textDecoration: "none" }}
                        animate={{
                          textDecoration:
                            isHovered === card.id ? "underline" : "none",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {card.title}
                      </motion.h2>
                      <p className="line-clamp-2 text-sm text-gray-600">
                        {card.description}
                      </p>
                    </div>

                    <p className="mt-4 line-clamp-1 text-sm text-gray-600">
                      {card.techStack}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Buttons */}
          {!isExpanded && (
            <div className="absolute inset-x-0 bottom-0 flex h-[30%] items-end justify-center bg-gradient-to-t from-zinc-950 to-transparent">
              <button
                onClick={toggleCards}
                className="flex w-full items-center justify-center gap-2 rounded-lg px-6 py-2 text-primarytext"
              >
                <FaAnglesDown className="animate-bounce" />
                Show More
              </button>
            </div>
          )}

          {isExpanded && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={toggleCards}
                className="flex w-full items-center justify-center gap-2 rounded-lg px-6 py-2 text-primarytext"
              >
                <FaAnglesUp />
                Show Less
              </button>
            </div>
          )}
        </div>

        {/* Github Calendar */}
        {loading ? (
          <div className="mt-32 flex h-64 w-full items-center justify-center">
            <Loadercomponent />
          </div>
        ) : error ? (
          <div className="flex h-64 w-full items-center justify-center text-red-500">
            Error: {error}
          </div>
        ) : (
          <div className="mt-32 flex flex-col items-center justify-center pt-8">
            <div className="relative mx-auto max-w-screen-lg font-rethink text-sm text-secondarytext"></div>
            <div className="mb-4 font-rethink text-xl">
              My Github Contribution Calendar
            </div>
            <div className="flex w-full flex-col justify-center rounded-md border border-borderColorTransparent px-6 py-4 lg:w-[60rem]">
              <div className="flex items-center justify-between">
                <div className="mb-2 text-sm font-semibold text-primarytext">
                  {contributionData.totalContributions} contributions in the
                  last year
                </div>
                <div className="mb-2 text-sm font-semibold text-primarytext">
                  {profileData.totalRepositories} total repositories
                </div>
              </div>

              <div className="max-w-max overflow-scroll font-rethink">
                <div className="mt-2 flex w-max flex-col rounded">
                  <div className="flex w-[60rem]">
                    <div className="mr-2 flex flex-col justify-evenly text-xs text-secondarytext">
                      {days.map((day) => (
                        <div key={day}>{day}</div>
                      ))}
                    </div>
                    <div className="w-full">
                      <div
                        className="grid gap-x-0.5 gap-y-1"
                        style={{
                          gridTemplateColumns: `repeat(${contributionData.contributions.length}, minmax(0, 1fr))`,
                          gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                        }}
                      >
                        {contributionData.contributions.map((week, weekIndex) =>
                          week.contributionDays.map((day, dayIndex) => (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className={`h-3 w-3 ${getColor(
                                day.contributionCount,
                              )} rounded-sm`}
                              style={{
                                gridRow: dayIndex + 1,
                                gridColumn: weekIndex + 1,
                              }}
                              title={`${day.contributionCount} contributions on ${day.date}`}
                            />
                          )),
                        )}
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-secondarytext">
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
              <div className="mt-2 flex items-center justify-end text-xs text-secondarytext">
                <span className="me-1">Less</span>
                <div className="ml-1 flex gap-1">
                  {[0, 4, 9, 15].map((count) => (
                    <div
                      key={count}
                      className={`h-3 w-3 ${getColor(count)} rounded-sm`}
                    />
                  ))}
                </div>
                <span className="ms-1">More</span>
              </div>
            </div>
          </div>
        )}

        {/* Certificate Showcases */}
        <div
          id="certificate"
          data-aos="fade-up"
          className="relative mx-auto mt-24 max-w-screen-lg font-rethink text-sm text-secondarytext"
        >
          {/* Text Background */}
          <div className="absolute inset-0 -z-10 flex items-start justify-center text-5xl font-bold text-zinc-800/20 md:text-9xl">
            CERTIFICATE
          </div>
          {/* Header */}
          <div className="relative -z-10 pt-16 text-white">
            <div className="ms-4 flex flex-col items-center justify-center text-center text-xl font-semibold lg:ms-8 lg:text-3xl">
              <div
                className="mb-2 w-fit rounded-xl border bg-zinc-950 p-2"
                style={{ borderColor: "rgba(107, 114, 128, 0.1)" }}
              >
                <PiCertificateFill className="text-4xl" />
              </div>
              <span>Certificate</span>
            </div>
          </div>
          <div className="mt-4 px-4 text-center text-base text-primarytext">
            A collection of certifications earned through completing courses and
            hands-on projects on Dicoding, Coursera, and Google Cloud. These
            certifications highlight my expertise in IT Support, Web
            Development, Backend Development, and Cloud Engineering.
          </div>
          <div>
            <div
              data-aos="zoom-in"
              className="mt-20 flex w-full flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-8 md:px-0"
            >
              <div className="w-full max-w-[24rem] rounded-lg">
                <Image
                  className="inset-0 rounded-lg border object-contain"
                  src="./Certificates/b.png"
                  alt="Cert"
                  preview={{ src: "./Certificates/b.png" }}
                />
              </div>
              <a
                href="https://google.accredible.com/7e70edef-eaf4-4887-bc47-9f764d9afc70#acc.0ljbU6zR"
                target="_blank"
                className="w-full text-center md:max-w-[26rem] md:text-left"
              >
                <div className="mb-4 font-passionsConflict text-5xl text-white">
                  Google Cloud Certified Associate Cloud Engineer
                </div>
                <p className="text-base">
                  A prestigious certification proving expertise in deploying and
                  managing Google Cloud solutions. Highly valued in the
                  industry, it requires hands-on experience and a solid
                  understanding of cloud operations, with a challenging exam to
                  validate these skills.
                </p>
              </a>
            </div>

            <div
              data-aos="zoom-in"
              className="mt-28 flex w-full flex-col items-center justify-center gap-6 px-4 md:gap-8 md:px-0"
            >
              <div className="order-2 w-full text-center md:order-1 md:max-w-[36rem] md:text-left">
                <div className="mb-4 text-center font-passionsConflict text-5xl text-white">
                  Bangkit Academy: Distincion Graduate
                </div>
                <p className="text-center text-base">
                  Awarded to top-performing graduates of Bangkit Academy,
                  recognizing exceptional achievement in its intensive program.
                  This distinction highlights expertise in technology,
                  innovation, and professional development, achieved through
                  rigorous learning and real-world project experience.
                </p>
              </div>

              <div className="w-full max-w-[24rem] rounded-lg">
                <Image
                  className="inset-0 rounded-lg border object-contain"
                  src="./Certificates/bangkit.png"
                  alt="Cert"
                  preview={{ src: "./Certificates/bangkit.png" }}
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="mx-auto mt-28 max-w-screen-md px-4 text-center md:px-0"
            >
              {" "}
              <div className="mb-4 text-2xl text-white">
                23 Google Cloud Badges
              </div>
              <p className="text-base">
                Showcasing achievements through Google Cloud skill badges,
                earned by completing hands-on labs and projects. Validate my
                expertise in cloud computing, infrastructure, and solutions
                using Google Cloud technologies.
              </p>
            </div>

            <div data-aos="fade-up" className="px-4 md:px-0">
              <Marquee pauseOnHover>
                <div className="me-2 mt-6 flex h-36 space-x-1 overflow-x-auto md:mt-8 md:h-36 md:space-x-2">
                  {badgeImages.map((num) => (
                    <Image
                      key={num}
                      className="inset-0 h-full w-auto cursor-pointer rounded-lg border object-contain hover:scale-105"
                      src={`./Certificates/Badges/${num}.png`}
                      alt={`Badge ${num}`}
                      preview={{ src: `./Certificates/Badges/${num}.png` }}
                      style={{ width: "150px", height: "auto" }}
                    />
                  ))}
                </div>
              </Marquee>
            </div>

            <div className="mt-16 px-4 text-center md:px-0">
              {" "}
              <div className="mb-4 text-2xl text-white">Other Certificates</div>
              <p className="text-base">
                A collection of certifications in IT Support, Web Development,
                Backend Development, and Cloud Engineering.
              </p>
            </div>

            <div className="mx-auto mt-8 flex h-auto max-w-screen-xl flex-wrap items-start justify-center gap-4">
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
                  className="flex w-[40%] flex-col items-center gap-2 rounded-md md:w-[25%] lg:w-[20%]"
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
                    <div className="mb-1">{item.title}</div>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="border-zinc-950 pb-12 pt-24">
          <div className="4 mb-8 h-[1px] w-full shrink-0 bg-gradient-to-r from-[#171717] via-[#525252] to-[#171717]"></div>
          <div className="mb-12 text-center font-rethink text-sm text-neutral-500">
            Copyright © 2025 Muhammad Rafi Shidiq.
            <span className="block sm:inline"> All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Modal untuk menampilkan detail proyek */}
      <Modal
        title={
          <div className="max-w-[28rem] text-xl text-white">
            {selectedProject?.title}
          </div>
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={700}
        closeIcon={
          <div
            style={{
              fontSize: "50px",
              backgroundColor: "transparent",
              color: "white",
              height: "fit",
              width: "fit",
            }}
          >
            ×
          </div>
        }
        centered
        styles={{
          mask: {
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          body: {
            backgroundColor: "#09090b",
            color: "#fff",
            // maxHeight: '80vh',
            overflowY: "auto",
          },
          content: {
            backgroundColor: "#09090b",
            color: "#fff",
            padding: "2rem",
            margin: "1rem",
            border: "1px solid rgba(107, 114, 128, 0.1)",
          },
          header: { backgroundColor: "#09090b", color: "#fff" },
          footer: { backgroundColor: "#09090b", color: "#fff" },
        }}
      >
        {selectedProject && (
          <div>
            <img
              src={selectedProject.imgSrc || "default-image.jpg"}
              alt={selectedProject.title}
              className="mb-4 h-auto w-full"
            />
            <p className="text-secondarytext">{selectedProject.description}</p>
            <p className="mb-8 mt-8 font-semibold text-secondarytext">
              <span className="text-primarytext">Tech Stack:</span>{" "}
              {selectedProject.techStack}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400"
            >
              Repository
            </a>
            {selectedProject.demo ? (
              <>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-4 text-green-500 hover:text-green-400"
                >
                  Live Demo
                </a>
              </>
            ) : (
              <>
                <p className="text-secondarytext">
                  The demo is currently unavailable due to hosting budget
                  limitations.
                </p>
              </>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
