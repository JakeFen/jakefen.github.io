import ProjectGrid from "../../components/ProjectGrid";
import { projects } from "../../data/projects";

function ProjectsList() {
  return (
    <section className="px-8 py-16">
      <h1 className="m-0 mb-8 text-3xl font-bold text-neutral-900">
        Projects
      </h1>
      <ProjectGrid projects={projects} />
    </section>
  );
}

export default ProjectsList;
