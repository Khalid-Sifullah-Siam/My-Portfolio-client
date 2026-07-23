"use client";

import { projects } from "@/app/utils/projects";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectCard from "./ProjectsCard/ProjectCard";

const PROJECTS_PER_PAGE = 6;

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  return (
    <div className="py-4">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <p className="text-gray-300 font-bold text-3xl py-4">
        A lot of ideas,but some are still under development!
      </p>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <nav
        aria-label="Projects pagination"
        className="mt-8 flex items-center justify-center gap-2"
      >
        <button
          type="button"
          onClick={() => setCurrentPage((page) => page - 1)}
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
              onClick={() => setCurrentPage(page)}
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
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={currentPage === totalPages}
          className="rounded-md border border-gray-700 px-3 py-2 text-sm font-semibold text-gray-300 transition hover:border-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </nav>

      <div className="flex items-center justify-between py-8">
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
