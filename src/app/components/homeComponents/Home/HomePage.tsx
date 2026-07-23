"use client";
import Image from "next/image";
import Link from "next/link";
import { CiShare1 } from "react-icons/ci";
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
  const resumeUrl = "https://drive.google.com/uc?export=download&id=1EahL5hbPGUQvJ7gFTagCZQ3pyDqlWVx7";



  return (
    <div className="mx-auto mt-4 max-w-6xl sm:mt-6">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-10">
        {/* Left side - Profile Image with Glass Badges Below */}
        <div className="flex w-full justify-center lg:w-1/3">
          <div className="relative mt-10 md:mt-0 flex flex-col items-center">
            {/* Main Profile Image */}
            <div className="relative z-10 h-44 w-44 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl shadow-black/30 backdrop-blur-sm min-[375px]:h-52 min-[375px]:w-52 sm:h-60 sm:w-60 lg:h-64 lg:w-64 xl:h-72 xl:w-72">
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
            <div className="absolute top-[44%] h-56 w-56 -translate-y-1/2 rounded-full border border-white/10 bg-white/2 backdrop-blur-3xl min-[375px]:h-68 min-[375px]:w-68 sm:h-76 sm:w-76 lg:h-80 lg:w-80 xl:h-84 xl:w-84" />

            {/* Badges Below Image - Horizontal Row with Dots */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 z-10">
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

        {/* Right side - Content */}
        <div className="w-full text-center lg:w-2/3 lg:text-left">
          <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            Khalid Saifullah Siam
          </h1>
          <br />
          <h2 className="text-2xl font-bold text-orange-400 sm:text-3xl xl:text-4xl">
            Code Freak, <br /> Problem Solver!
          </h2>
          <br />
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I am a dedicated Software Engineer specializing in full-stack
            application development. I enjoy crafting responsive web solutions
            using modern technologies like Next.js, React, Tailwind CSS,
            Node.js, Express, and MongoDB, while also applying DevOps practices,
            continuously aiming to deliver high-quality, comprehensive,
            user-centric software solutions.
          </p>
          <br />
          <div className="flex flex-col items-stretch gap-3 min-[400px]:flex-row min-[400px]:items-center lg:justify-start">
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

      <Link
        href="/about"
        className="mt-12 flex items-center justify-end gap-3 px-6 py-3 rounded-md hover:bg-gray-800/50 transition-all duration-300 w-fit ml-auto group"
      >
        <span className="text-lg font-semibold text-gray-300 group-hover:text-white">
          About Me
        </span>
        <IoIosArrowForward className="text-xl text-orange-400 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default HomePage;
