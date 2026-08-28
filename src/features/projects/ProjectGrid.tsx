import { Link } from "react-router-dom";
import emailIcon from "../../assets/email-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import type { Project } from "../../data/projects";

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
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
  );
}

export default ProjectGrid;
