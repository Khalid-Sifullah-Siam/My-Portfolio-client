import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const education = [
  {
    year: "2023 - Present",
    degree: "B.Sc. (Honours) in Botany",
    institution: "Netrakona Government College",
    result: "Currently in 4th Year",
  },
  {
    year: "2022",
    degree: "Higher Secondary Certificate (HSC) — Science Group",
    institution: "Alamgir Monsur (Mintu) Memorial College",
    result: "GPA: 4.00 / 5.00",
  },
  {
    year: "2020",
    degree: "Secondary School Certificate (SSC) — Science Group",
    institution: "Amjuman Adarsha Government High School",
    result: "GPA: 5.00 / 5.00",
  },
  {
    year: "2017",
    degree: "Junior School Certificate (JSC)",
    institution: "Amjuman Adarsha Government High School",
    result: "GPA: 5.00 / 5.00",
  },
  {
    year: "2014",
    degree: "Primary School Certificate (PSC)",
    result: "GPA: 5.00 / 5.00",
  },
];

const EducationalQualificationPage = () => {
  return (
    <div className="space-y-8 py-4">
      <header>
        <h1 className="text-3xl font-bold text-white">
          Educational Qualification
        </h1>
        <p className="py-4 text-lg leading-relaxed text-gray-400">
          My academic journey and qualifications.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <article
            key={`${item.year}-${item.degree}`}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <p className="mb-2 text-sm font-bold text-orange-400">
              {item.year}
            </p>
            <h2 className="font-bold text-white">{item.degree}</h2>
            {item.institution && (
              <p className="mt-1 text-sm text-gray-400">{item.institution}</p>
            )}
            <p className="mt-3 text-sm font-semibold text-gray-200">
              {item.result}
            </p>
          </article>
        ))}
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/about"
          className="flex items-center gap-2 rounded-md px-4 py-2 font-bold text-white hover:bg-gray-900"
        >
          <IoIosArrowBack />
          About Me
        </Link>
        <Link
          href="/projects"
          className="flex items-center gap-2 rounded-md px-4 py-2 font-bold text-white hover:bg-gray-900"
        >
          Projects
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default EducationalQualificationPage;
