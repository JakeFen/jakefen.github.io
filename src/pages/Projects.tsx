import { projects } from "../data/projects";
import ProjectGrid from "../features/projects/ProjectGrid";

function Projects() {
  return (
    <section className="px-8 py-16">
      <h1 className="m-0 mb-8 text-2xl font-bold text-neutral-900">
        Projects
      </h1>
      <ProjectGrid projects={projects} />
    </section>
  );
}

export default Projects;
