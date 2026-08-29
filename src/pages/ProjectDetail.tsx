import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectLinks from "../features/projects/ProjectLinks";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="flex flex-1 flex-col items-center justify-center gap-3 px-8 py-16 text-center">
        <h1 className="m-0 text-2xl font-medium text-neutral-900">
          Project not found
        </h1>
      </section>
    );
  }

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
          <p className="m-0 text-neutral-600">{description}</p>
        </div>

        <div className="flex w-full flex-col gap-4 rounded-[4px] bg-neutral-100 p-6 md:w-72">
          <div>
            <h3 className="m-0 mb-2 text-sm font-bold text-neutral-900">
              Tools
            </h3>
            <ul className="m-0 flex flex-wrap gap-x-1 gap-y-1 list-none p-0 text-sm text-neutral-600">
              {tools.split(", ").map((tool, index, all) => (
                <li key={tool}>
                  {tool}
                  {index < all.length - 1 && ","}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="m-0 mb-2 text-sm font-bold text-neutral-900">
              Links
            </h3>
            <ProjectLinks webHref={webHref} githubHref={githubHref} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
