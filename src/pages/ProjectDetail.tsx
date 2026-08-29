import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectDetailView from "../features/project-detail/ProjectDetailView";
import ProjectNotFound from "../features/project-detail/ProjectNotFound";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <ProjectNotFound />;
  }

  return <ProjectDetailView project={project} />;
}

export default ProjectDetail;
