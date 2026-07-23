"use client";

import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px] sm:h-150 sm:w-150 sm:blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px] sm:h-150 sm:w-150 sm:blur-[150px]" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's Connect
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-2">
              Have a project in mind? Let's work together
            </p>
            <div className="h-1 w-20 bg-linear-to-r from-orange-400 to-blue-500 mx-auto rounded-full" />
          </div>

          {/* Contact Options Grid */}
          <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3 2xl:grid-cols-5 2xl:gap-5">
            {/* Email Card */}
            <a
              href="mailto:khalidsiam1754@gmail.com"
              className="group relative backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 block"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 pointer-events-none">
                <div className="mb-6 w-16 h-16 rounded-xl bg-linear-to-br from-blue-600/30 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-2xl text-blue-400 group-hover:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-gray-400 text-sm mb-4">Send me an email directly</p>
                <p className="text-blue-400 font-semibold text-sm break-all">khalidsiam1754@gmail.com</p>
              </div>
            </a>

            {/* Phone Card */}
            <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-orange-600/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-orange-600/30 to-orange-400/20 transition-transform duration-300 group-hover:scale-110">
                  <FaPhoneAlt className="text-2xl text-orange-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">Phone</h3>
                <div className="space-y-2 text-sm font-semibold text-orange-400">
                  <a className="block hover:text-orange-300" href="tel:+8801521745455">
                    +880 1521 745455
                  </a>
                  <a className="block hover:text-orange-300" href="tel:+8801751926808">
                    +880 1751 926808
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/8801521745455"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-linear-to-br from-green-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-xl bg-linear-to-br from-green-600/30 to-green-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp className="text-2xl text-green-400 group-hover:text-green-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
                <p className="text-gray-400 text-sm mb-4">Quick chat on WhatsApp</p>
                <p className="text-green-400 font-semibold text-sm">+880 1521 745455</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="http://www.linkedin.com/in/khalid-sifullah-siam"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-600/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-700/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-xl bg-linear-to-br from-blue-700/30 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaLinkedin className="text-2xl text-blue-500 group-hover:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">LinkedIn</h3>
                <p className="text-gray-400 text-sm mb-4">Connect professionally</p>
                <p className="text-blue-500 font-semibold text-sm">View Profile</p>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/khalid.sifullah.siam.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-xl bg-linear-to-br from-blue-600/30 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaFacebook className="text-2xl text-blue-500 group-hover:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Facebook</h3>
                <p className="text-gray-400 text-sm mb-4">Follow me on Facebook</p>
                <p className="text-blue-500 font-semibold text-sm">Follow</p>
              </div>
            </a>
          </div>

          {/* Info Section */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white mb-2">Response Time</h3>
                <p className="text-gray-400">Usually within 24 hours</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white mb-2">Availability</h3>
                <p className="text-gray-400">Monday to Friday, 9 AM - 6 PM</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white mb-2">Best Way</h3>
                <p className="text-gray-400">Email or WhatsApp preferred</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-white/10">
            <Link href="/experience" className="flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-white/5 transition-all duration-200 group">
              <IoIosArrowBack className="text-white group-hover:-translate-x-1 transition-transform" />
              <span className="text-white font-bold">Experience</span>
            </Link>
            <Link href="/skills-tools" className="flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-white/5 transition-all duration-200 group">
              <span className="text-white font-bold">Skills & Tools</span>
              <IoIosArrowForward className="text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
