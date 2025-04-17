"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectItem {
  title: string;
  description: string;
  techStack: string;
  link: string;
  demo?: string;
  imgSrc?: string;
}

const projectItems: ProjectItem[] = [
  {
    title: "E-Commerce: Rikustore",
    description:
      "A full-stack personal store web app for selling website development services.",
    techStack:
      "Typescript, Next.js, React.js, Express.js, Supabase, PostgreSQL, Tailwind, HTML, CSS, JS",
    link: "https://github.com/rihitoRiku/riku-store",
    demo: "https://rikustore.vercel.app/",
  },
  {
    title: "Monolosofis",
    description:
      "Modern dribble UI design landing page for selling my own books",
    techStack: "Typescript, Next.js, React.js, Tailwind, HTML, CSS, JS",
    link: "https://github.com/rihitoRiku/monolosofis",
    demo: "https://monolosofis.vercel.app/",
  },
  {
    title: "AI Chatbot with Vue",
    description:
      "A responsive web application powered by Cohere's Command-R-08-2024 language model...",
    techStack: "Vue.js, Vite.js, Tailwind, HTML, CSS, JS",
    link: "https://github.com/rihitoRiku/vue-chatbotv2",
    demo: "https://vue-chatbotv2.vercel.app/",
  },
  {
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
    title: "Nutriast: Health Monitoring Mobile App",
    description:
      "A collaborative full-stack web app designed for health monitoring and cardiovascular disease prediction using machine learning. Developed by a team of six (3 full-stack/DevOps, 2 ML engineers, 1 mobile developer), Nutriast leverages Google Cloud and TensorFlow to integrate a predictive model trained on Kaggle data. The app includes extensive nutrition data, food intake tracking, and personalized health insights, offering users a robust tool for proactive health management.",
    techStack:
      "Express.js, Kotlin, Tensorflow.js Machine Learning, Google Collab, Python, Flask, Android Studio, Google Cloud Run, Google Cloud Bucket",
    link: "https://github.com/C23-PC718",
  },
  {
    title: "Bank Sampah Management & Information System",
    description:
      "Built a comprehensive Bank Sampah Management & Information System for city-wide waste tracking, including an admin system for managing users, waste databases, and price-per-weight configurations. Enabled CRUD operations, an interactive dashboard for trend visualization, and a wallet feature for redeeming rewards based on collected waste. This system enhances environmental sustainability by streamlining waste management and incentivizing recycling efforts.",
    techStack:
      "Typescript, Next.js, React.js, TailwindCSS, Google AppScript, ApexChart, SCSS, HTML, CSS, JS",
    // imgSrc: "project-image-5.jpg",
    link: "https://github.com/rihitoRiku/BankSampah",
  },
  {
    title: "Nutriast: Health Monitoring Web-App",
    description:
      "Transformed a mobile app into a full-stack web app, integrating an existing deployed machine learning model. Handled all roles from UI/UX design to backend development, delivering a responsive interface and robust architecture, showcasing full-stack and ML integration expertise.",
    techStack:
      "Typescript, Next.js, React.js, TailwindCSS, Express.js, MongoDB, SCSS, HTML, CSS, JS",
    // imgSrc: "project-image-4.jpg",
    link: "https://github.com/rihitoRiku/NutriastApp",
  },
  {
    title: "E-Commerce: Utami Bakery Store",
    description:
      " Led front-end development in a team project, designing UI/UX for a bakery web app with full e-commerce features, including product catalog, details page, cart, and checkout. Built an admin system for product management and integrated WhatsApp for customer communication. Collaborated closely with backend, data teams, and clients to ensure feature alignment and optimal user experience.",
    techStack: "React.js, MUI, HTML, CSS, JS",
    link: "https://github.com/rihitoRiku/UtamiBakery",
  },
  {
    title: "Personal Profile",
    description:
      "Developed a personal portfolio website to showcase my bio, education, projects, and contact information. Designed a visually appealing, dark-mode interface and integrated GitHub contribution data using GraphQL. Focused on creating an engaging, modern user experience to highlight my background, skills, and professional journey.",
    techStack: "React.js, Next.js, TailwindCSS, SCSS, HTML, CSS, JS",
    // imgSrc: "project-image-7.jpg",
    link: "https://github.com/rihitoRiku/perprof",
  },
  {
    title: "Sales Admin Dashboard",
    description:
      "Developed a full-stack Sales Admin Dashboard for managing customers, products, and transactions. Implemented interactive charts and graphs for data visualization, pagination for data lists, and a dark mode option. This project streamlined sales administration by providing an intuitive, data-driven interface for efficient management and insights.",
    techStack:
      "React.js, Express.js, MongoDB, MUI, Redux, Nivo, SCSS, HTML, CSS, JS",
    // imgSrc: "project-image-8.jpg",
    link: "https://github.com/rihitoRiku/AdminDashboard",
  },
  {
    title: "E-commerce: Metime Clothing",
    description:
      "Developed the front-end of a mobile app for an e-commerce clothing store in a team of five. Implemented product catalog displays, cart, and checkout features to create a seamless shopping experience for users. Focused on delivering a clean, responsive interface optimized for mobile use.",
    techStack: "Flutter, Dart, Android Studio, GetX",
    // imgSrc: "project-image-9.jpg",
    link: "https://github.com/rihitoRiku/MeTimeStore",
  },
  {
    title: "Random Meal Generator",
    description:
      "Developed a native PHP project to suggest random meals, utilizing a SQL database to store and retrieve food data. Designed and built both the front and backend with an MVP architecture, ensuring a structured, efficient, and user-friendly experience.",
    techStack: "PHP, Bootsrap, MySQL",
    // imgSrc: "project-image-10.jpg",
    link: "https://github.com/rihitoRiku/RandomMealGenerator",
  },
  {
    title: "Survival Hop 2D Java Game",
    description:
      "Created a 2D game using Java and Apache NetBeans, focusing on object-oriented principles. Connected to a MySQL database to track game progress and implemented user controls for movement, jumping, and point accumulation. Enhanced gameplay with interactive functions and database integration for a dynamic user experience.",
    techStack: "Java, Apache Netbeans, MySQl",
    link: "https://github.com/rihitoRiku/myHopGame_Java",
  },
];

export default function LatestProjectSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleCards = () => setIsExpanded(!isExpanded);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="relative mx-auto max-w-screen-md p-4"
      >
        <div className="mb-8">
          <div className="flex items-center  gap-2 text-3xl text-emerald-100 mb-4">
            {/* <RiArchiveDrawerFill className="mb-1" /> */}
            <img alt="" src="/assets/project.png" className="size-10" />
            <h1 className=" font-medium">Latest Project</h1>
          </div>

          <p className="mt-3 text-base text-neutral-200">
            Explore a collection of my projects. Each project includes a brief
            description, the technologies and tools used, and a link to the
            GitHub repository for further exploration. Some projects have been
            deployed and are accessible to the public.
          </p>
        </div>
        <div className="relative grid w-full grid-cols-2 gap-4 md:grid-cols-3">
          {projectItems.map((project, index) => {
            const isVisible = isExpanded || index < 6;

            return (
              <motion.div
                onClick={() => setSelectedProject(project)}
                key={index}
                className="border-trsp aspect-square w-full cursor-pointer overflow-hidden rounded-xl border"
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
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
              >
                {project.imgSrc && (
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-1/2 w-full object-cover"
                  />
                )}
                <div
                  className={`flex flex-col justify-between p-4 ${
                    project.imgSrc ? "h-1/2" : "h-full"
                  }`}
                >
                  <div>
                    <motion.h2
                      className="text-neutral-100"
                      initial={{ textDecoration: "none" }}
                      animate={{
                        textDecoration:
                          isHovered === index ? "underline" : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h2>
                    <p className="line-clamp-2 text-sm text-neutral-600">
                      {project.description}
                    </p>
                  </div>

                  <p className="mt-4 line-clamp-1 text-sm text-emerald-200">
                    {project.techStack}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Buttons */}
        {!isExpanded && (
          <div className="absolute inset-x-0 bottom-0 flex h-[30%] items-end justify-center bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-transparent">
            <button
              onClick={toggleCards}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-2 text-neutral-100"
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
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-2 text-neutral-100"
            >
              <FaAnglesUp />
              Show Less
            </button>
          </div>
        )}
      </div>
      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="border-none bg-neutral-950">
            <DialogHeader>
              <DialogTitle className="mt-8 text-xl">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            <p className="text-sm text-neutral-400">
              {selectedProject.description}
            </p>
            <p className="mt-2 text-sm text-emerald-400">
              Tech-Stacks: {selectedProject.techStack}
            </p>
            <div className="mt-8 flex justify-end gap-6">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-neutral-500 hover:text-emerald-200"
              >
                <FaGithub /> GitHub
              </a>
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-neutral-500 hover:text-emerald-200"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
