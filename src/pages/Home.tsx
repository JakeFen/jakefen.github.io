import { Link } from "react-router-dom";
import resumePdf from "../assets/jf-resume.pdf";
import { socials } from "../data/socials";
import { projects } from "../data/projects";
import ProjectGrid from "../features/projects/ProjectGrid";

function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 px-8 py-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <h1 className="m-0 max-w-lg text-2xl text-neutral-600">
            <span className="font-bold">Hi, I'm Jacob Fenwick,</span> a software
            developer who builds products, tools, and experiences.
          </h1>
        </div>

        <img
          src="https://placehold.co/200x200"
          alt="Jacob Fenwick"
          className="h-60 w-60 rounded-full object-cover"
        />

        <div className="flex gap-3">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="flex rounded-[4px] border border-neutral-300 p-2 text-neutral-700 no-underline transition-colors hover:border-neutral-900 hover:text-neutral-900"
            >
              <img src={icon} alt="" className="h-7 w-7" />
            </a>
          ))}
        </div>

        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[4px] bg-neutral-900 px-8 py-3 text-base font-medium text-white no-underline transition-colors hover:bg-neutral-700"
        >
          Resume
        </a>
      </section>

      <hr className="mx-8 border-t border-neutral-200" />

      <section className="px-8 py-16 pb-48">
        <h2 className="m-0 mb-8 text-3xl font-bold text-neutral-900">
          Projects
        </h2>
        <ProjectGrid projects={projects} />

        {projects.length > 3 && (
          <div className="mt-8 flex justify-center">
            <Link
              to="/projects"
              className="rounded-[4px] border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-700 no-underline transition-colors hover:border-neutral-900 hover:text-neutral-900"
            >
              View All Projects
            </Link>
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
