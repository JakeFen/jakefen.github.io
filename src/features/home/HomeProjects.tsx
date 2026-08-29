import { Link } from "react-router-dom";
import ProjectGrid from "../../components/ProjectGrid";
import { projects } from "../../data/projects";

function HomeProjects() {
  return (
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
  );
}

export default HomeProjects;
