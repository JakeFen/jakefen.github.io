import { Link } from "react-router-dom";
import emailIcon from "../assets/email-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

const socials = [
  {
    label: "Email",
    href: "mailto:jacob@example.com",
    icon: emailIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/JakeFen",
    icon: githubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jacob-fenwick/",
    icon: linkedinIcon,
  },
];

// TODO: Added specific projects
const projects = [
  {
    slug: "project-one",
    photo: "https://placehold.co/400x225",
    title: "Project One",
    subtitle:
      "A short description of what this project does and why it matters.",
    tools: "React, TypeScript, Tailwind",
    webHref: "#",
    githubHref: "#",
  },
  {
    slug: "project-two",
    photo: "https://placehold.co/400x225",
    title: "Project Two",
    subtitle:
      "A short description of what this project does and why it matters.",
    tools: "Node.js, Express, PostgreSQL",
    webHref: "#",
    githubHref: "#",
  },
  {
    slug: "project-three",
    photo: "https://placehold.co/400x225",
    title: "Project Three",
    subtitle:
      "A short description of what this project does and why it matters.",
    tools: "Next.js, Prisma, Tailwind",
    webHref: "#",
    githubHref: "#",
  },
];

function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 px-8 py-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <h1 className="m-0 text-3xl font-bold text-neutral-900">
            Hi, I'm Jacob Fenwick.
          </h1>
          <p className="m-0 max-w-md text-xl text-neutral-600">
            I'm a software developer specializing in modern frontend and
            full-stack web applications.
          </p>
        </div>

        <img
          src="https://placehold.co/192x192"
          alt="Jacob Fenwick"
          className="h-48 w-48 rounded-full object-cover"
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
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[4px] bg-neutral-900 px-8 py-3 text-base font-medium text-white no-underline transition-colors hover:bg-neutral-700"
        >
          Resume
        </a>
      </section>

      <hr className="mx-8 border-t border-neutral-200" />

      <section className="px-8 py-16 pb-48">
        <h2 className="m-0 mb-8 text-2xl font-bold text-neutral-900">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ slug, photo, title, subtitle, tools, webHref, githubHref }) => (
              <div key={slug} className="flex flex-col gap-3">
                <Link to={`/projects/${slug}`}>
                  <img
                    src={photo}
                    alt={title}
                    className="aspect-video w-full rounded-[4px] object-cover"
                  />
                </Link>
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 text-lg font-bold text-neutral-900">
                    {title}
                  </h3>
                  <p className="m-0 text-neutral-600">{subtitle}</p>
                  <p className="m-0 text-sm text-neutral-400">{tools}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={webHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-[4px] border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 no-underline transition-colors hover:border-neutral-900 hover:text-neutral-900"
                  >
                    <img src={emailIcon} alt="" className="h-4 w-4" />
                    Web
                  </a>
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-[4px] border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 no-underline transition-colors hover:border-neutral-900 hover:text-neutral-900"
                  >
                    <img src={githubIcon} alt="" className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center">
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
