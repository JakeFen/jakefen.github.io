import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { slug } = useParams();

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-3 px-8 py-16 text-center">
      <h1 className="m-0 text-2xl font-medium text-neutral-900">{slug}</h1>
      <p className="m-0 text-neutral-600">Coming soon.</p>
    </section>
  );
}

export default ProjectDetail;
