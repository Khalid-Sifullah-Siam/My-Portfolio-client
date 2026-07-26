"use client";
import Image from "next/image";
import Link from "next/link";
import { CiShare1 } from "react-icons/ci";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import axiosInstance from "../../sharedComponents/AxiosInstance/AxiosInstance";
import { useEffect, useState } from "react";

interface ProfileData {
    _id: string;
    profilePicture?: {
        url: string;
        publicId: string;
        mediaType: string;
    } | null;
    resume?: {
        url: string;
        fileName: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}

const HomePage = () => {

  const [profileInfo, setProfileInfo] = useState<ProfileData | null>(null);

    useEffect(() => {
        // 1. First: Load from localStorage instantly
        const cachedData = localStorage.getItem("profileData");
        if (cachedData) {
            setProfileInfo(JSON.parse(cachedData));
        }

        // 2. Then: Fetch fresh data from server and update
        const fetchProfile = async () => {
            try {
                const res = await axiosInstance.get("/profile");
                const profileData = res.data.data;
                
                // Save to localStorage
                localStorage.setItem("profileData", JSON.stringify(profileData));
                
                // Update state with fresh data
                setProfileInfo(profileData);
            } catch (error) {
                console.log("Failed to fetch profile:", error);
            }
        };
        
        fetchProfile();
    }, []);

  const profilePicture = profileInfo?.profilePicture?.url;
  const resumeUrl = "https://drive.google.com/uc?export=download&id=1UtKXYgb4wgB-HvRv4oo8tlKgPDIWGLDI";



  return (
    <div className="mx-auto mt-4 max-w-6xl sm:mt-6 lg:mt-10">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Profile Image with Glass Badges Below */}
        <div className="flex w-full justify-center lg:w-[42%]">
          <div className="relative mt-6 flex flex-col items-center sm:mt-4 lg:mt-0">
            {/* Main Profile Image */}
            <div className="relative z-10 h-48 w-48 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl shadow-black/30 backdrop-blur-sm min-[375px]:h-56 min-[375px]:w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
<Image
    src={profilePicture || "/profile.jpg"}  
    alt="Khalid Saifullah Siam - Professional Portrait"
    fill
    className="object-cover"
    priority
/>
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Glass Ring */}
            <div className="absolute top-[44%] h-60 w-60 -translate-y-1/2 rounded-full border border-white/10 bg-white/2 backdrop-blur-3xl min-[375px]:h-68 min-[375px]:w-68 sm:h-76 sm:w-76 lg:h-84 lg:w-84" />

            {/* Badges Below Image - Horizontal Row with Dots */}
            <div className="z-10 mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-3">
              <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-white/10 backdrop-blur-2xl text-white/90 text-[10px] sm:text-xs md:text-sm font-medium rounded-full border border-white/20 shadow-lg shadow-black/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                Web Engineer
              </span>

              <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-white/10 backdrop-blur-2xl text-white/90 text-[10px] sm:text-xs md:text-sm font-medium rounded-full border border-white/20 shadow-lg shadow-black/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Problem Solver
              </span>

              <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-white/10 backdrop-blur-2xl text-white/90 text-[10px] sm:text-xs md:text-sm font-medium rounded-full border border-white/20 shadow-lg shadow-black/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                AI Enthusiast
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full max-w-3xl text-center lg:w-[58%] lg:text-left">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Khalid Saifullah Siam
          </h1>
          <h2 className="mt-2 text-2xl font-bold text-orange-400 sm:text-3xl">
            Code Freak, Problem Solver!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base lg:mx-0">
            I am a dedicated Software Engineer specializing in full-stack
            application development. I enjoy crafting responsive web solutions
            using modern technologies like Next.js, React, Tailwind CSS,
            Node.js, Express, and MongoDB, while also applying DevOps practices,
            continuously aiming to deliver high-quality, comprehensive,
            user-centric software solutions. I focus on writing clean,
            maintainable code and turning complex requirements into intuitive
            digital experiences. From planning and development to deployment
            and optimization, I value performance, reliability, and thoughtful
            collaboration throughout every stage of a project.
          </p>
          <div className="mt-5 flex flex-col items-stretch justify-center gap-3 min-[400px]:flex-row min-[400px]:items-center lg:justify-start">
            <div className="group flex items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-2.5 font-semibold transition-all duration-300 hover:bg-orange-700">
              <a
                href={resumeUrl}
                download="Resume.pdf"
                className="text-white"
              >
                Get Resume
              </a>
              <CiShare1 className="text-white group-hover:translate-y-0.5 transition-transform" />
            </div>
            <div className="group flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-semibold transition-all duration-300 hover:bg-gray-800/50">
              <MdOutlineMailOutline className="text-orange-400 text-xl group-hover:scale-110 transition-transform" />
              <a
                href="mailto:khalidsiam1754@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Send Mail
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-8 border-t border-white/10 py-10 sm:mt-10 sm:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            Core Expertise
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Building complete digital experiences
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
            I combine thoughtful interfaces, reliable systems, and performance-focused
            delivery to build products that work smoothly from idea to launch.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-white/3 p-5 transition-colors hover:border-orange-400/40 hover:bg-white/5">
            <FiCode className="text-2xl text-orange-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">
              Frontend Engineering
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Responsive, accessible interfaces built with React, Next.js, and
              modern styling systems.
            </p>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/3 p-5 transition-colors hover:border-orange-400/40 hover:bg-white/5">
            <FiLayers className="text-2xl text-orange-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">
              Backend & APIs
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Secure APIs and scalable application logic using Node.js, Express,
              and MongoDB.
            </p>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/3 p-5 transition-colors hover:border-orange-400/40 hover:bg-white/5">
            <FiZap className="text-2xl text-orange-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">
              Performance & Delivery
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Optimized builds, dependable deployments, and maintainable code
              prepared for long-term growth.
            </p>
          </article>
        </div>
      </section>

      <Link
        href="/about"
        className="group ml-auto mb-4 flex w-fit items-center justify-end gap-3 rounded-md px-4 py-2.5 transition-all duration-300 hover:bg-gray-800/50 sm:mb-6"
      >
        <span className="text-lg font-semibold text-gray-300 group-hover:text-white">
          About Me
        </span>
        <IoIosArrowForward className="text-xl text-orange-400 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default HomePage;
