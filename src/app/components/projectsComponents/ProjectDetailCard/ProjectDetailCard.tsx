"use client";

import Image from "next/image";
import { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

type Project = {
  id: number;
  title: string;
  short_description: string;
  descriptioin: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  futurePlans: string[];
  links: { name: string; url: string }[];
  screenshots: string[];
};

const ProjectDetailCard = ({ project }: { project: Project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1,
    );
  };

  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="space-y-6 text-gray-300">
      {/* Title */}
      <h1 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h1>

      {/* Description */}
      <p className="leading-relaxed text-gray-400">{project.descriptioin}</p>

      {/* Tech Stack */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-2">Features</h2>
        <ul className="list-disc list-inside space-y-1">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* Challenges */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-2">Challenges</h2>
        <ul className="list-disc list-inside space-y-1">
          {project.challenges.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* Learnings */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-2">Learnings</h2>
        <ul className="list-disc list-inside space-y-1">
          {project.learnings.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>

      {/* Future Plans */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-2">
          Future Improvements
        </h2>
        <ul className="list-disc list-inside space-y-1">
          {project.futurePlans.map((plan, i) => (
            <li key={i}>{plan}</li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3 pt-4 sm:gap-4">
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-orange-800 px-4 py-2 font-semibold text-gray-300 transition hover:text-white min-[420px]:flex-none"
          >
            {link.name === "GitHub" ? (
              <FaGithub size={20} />
            ) : (
              <CiShare1 size={20} />
            )}
            {link.name}
          </a>
        ))}
      </div>

      {/* Screenshots Slider */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Screenshots</h2>

        {/* Slider Container */}
        <div className="relative group">
          {/* Main Image */}
          <div
            className="relative h-56 w-full cursor-pointer overflow-hidden rounded-lg sm:h-80 md:h-100 xl:h-125"
            onClick={() => openModal(project.screenshots[currentIndex])}
          >
            <Image
              src={project.screenshots[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              fill
              className="object-contain rounded-lg border border-gray-700 bg-gray-900 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Navigation Buttons */}
          {project.screenshots.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition-all duration-200 md:opacity-0 md:group-hover:opacity-100"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition-all duration-200 md:opacity-0 md:group-hover:opacity-100"
              >
                <FiChevronRight size={24} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {project.screenshots.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {project.screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Thumbnails for Desktop */}
          {project.screenshots.length > 1 && (
            <div className="hidden md:grid grid-cols-4 gap-2 mt-4">
              {project.screenshots.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-20 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === idx
                      ? "border-white scale-95"
                      : "border-gray-700 hover:border-gray-500"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal for full screen image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative mx-3 w-full max-w-7xl sm:mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <IoClose size={32} />
            </button>
            <div className="relative h-[70vh] w-full sm:h-[80vh]">
              <Image
                src={selectedImage}
                alt="Full screen screenshot"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailCard;
