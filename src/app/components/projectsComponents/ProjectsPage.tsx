"use client";

import { projects } from "@/app/utils/projects";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectCard from "./ProjectsCard/ProjectCard";

const PROJECTS_PER_PAGE = 6;

const ProjectsPage = ({ initialPage }: { initialPage: number }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  const changePage = (page: number) => {
    setCurrentPage(page);
    router.replace(`/projects?page=${page}`, { scroll: false });
  };

  return (
    <div className="py-4">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <p className="py-4 text-xl font-bold text-gray-300 sm:text-2xl lg:text-3xl">
        A lot of ideas,but some are still under development!
      </p>
      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} page={currentPage} />
          ))}
        </motion.div>
      </AnimatePresence>

      <nav
        aria-label="Projects pagination"
        className="mt-8 flex max-w-full items-center justify-start gap-2 overflow-x-auto pb-2 sm:justify-center"
      >
        <button
          type="button"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-md border border-gray-700 px-3 py-2 text-sm font-semibold text-gray-300 transition hover:border-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              type="button"
              onClick={() => changePage(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={`h-10 w-10 rounded-md border text-sm font-semibold transition ${
                currentPage === page
                  ? "border-orange-500 bg-orange-600 text-white"
                  : "border-gray-700 text-gray-300 hover:border-orange-500 hover:text-white"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-md border border-gray-700 px-3 py-2 text-sm font-semibold text-gray-300 transition hover:border-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </nav>

      <div className="flex flex-wrap items-center justify-between gap-3 py-8">
        <div className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer">
          <IoIosArrowBack />
          <Link href="/about" className="text-white font-bold">
            About
          </Link>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer">
          <Link href="/skills-tools" className="text-white font-bold">
            Skill & Tools
          </Link>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
