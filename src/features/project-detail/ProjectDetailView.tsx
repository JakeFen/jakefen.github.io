import type { Project } from "../../data/projects";
import ProjectInfoCard from "./ProjectInfoCard";

function ProjectDetailView({ project }: { project: Project }) {
  const { photo, title, description, tools, webHref, githubHref } = project;

  return (
    <section>
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <img
          src={photo}
          alt={title}
          className="aspect-[3/1] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
          {title}
        </h1>
      </div>

      <div className="flex flex-col gap-8 px-8 py-16 md:flex-row">
        <div className="flex-1">
          <h2 className="m-0 mb-4 text-3xl font-bold text-neutral-900">
            Overview
          </h2>
          <p className="m-0 leading-relaxed text-neutral-600">{description}</p>
        </div>

        <ProjectInfoCard
          tools={tools}
          webHref={webHref}
          githubHref={githubHref}
        />
      </div>
    </section>
  );
}

export default ProjectDetailView;
