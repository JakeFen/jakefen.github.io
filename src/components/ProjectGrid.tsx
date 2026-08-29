import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import ProjectLinks from "./ProjectLinks";

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
            <ProjectLinks webHref={webHref} githubHref={githubHref} />
          </div>
        )
      )}
    </div>
  );
}

export default ProjectGrid;
