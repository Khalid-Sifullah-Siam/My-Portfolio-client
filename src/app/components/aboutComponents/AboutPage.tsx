import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const AboutPage = () => {
  return (
    <div className="space-y-10 py-4">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">About Khalid</h1>
        <p className="py-4 text-xl font-bold text-gray-400 sm:text-2xl lg:text-3xl">
          More than just a title—let&apos;s get to know me better.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">My Programming Journey</h2>
        <div className="space-y-4 text-lg font-medium leading-relaxed text-gray-200">
          <p>
            It started with a simple question: how does a website actually work?
            That curiosity pulled me into code and gradually became a passion for
            building products people can genuinely use.
          </p>
          <p>
            I began with HTML, CSS, and JavaScript, then moved into React,
            Next.js, TypeScript, Node.js, Express.js, and MongoDB. Today, I build
            full-stack applications with authentication, role-based dashboards,
            payment integrations, and reliable backend systems.
          </p>
          <p>
            I learn best by building: choosing a project, facing difficult
            problems, understanding why something failed, and improving with
            every solution. Recently, I have also become interested in agentic
            AI and automation—applications that can reason, remember context,
            and take useful actions for users.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-3 text-2xl font-bold text-white">
            Hobbies and Interests
          </h2>
          <p className="leading-relaxed text-gray-300">
            Outside active development, I enjoy exploring AI coding tools,
            learning how other developers improve their workflows, and
            experimenting with side projects. I especially enjoy automating
            repetitive work because it saves time and turns routine problems
            into satisfying engineering challenges. Programming is no longer
            only something I study—it is also something I genuinely do for fun.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-3 text-2xl font-bold text-white">My Personality</h2>
          <p className="leading-relaxed text-gray-300">
            I am curious, persistent, and always motivated to improve. I prefer
            efficient, organized solutions over brute-force ones, and I treat
            clean code, thoughtful UX, and security as essential parts of a
            finished product. I value feedback and want to grow into a
            full-stack developer who builds products that truly matter to the
            people using them.
          </p>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-900">
          <IoIosArrowBack />
          <Link href="/" className="font-bold text-white">
            Intro
          </Link>
        </div>
        <div className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-900">
          <Link href="/educational-qualification" className="font-bold text-white">
            Education
          </Link>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
