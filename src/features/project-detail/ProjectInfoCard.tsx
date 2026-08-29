import ProjectLinks from "../../components/ProjectLinks";

function ProjectInfoCard({
  tools,
  webHref,
  githubHref,
}: {
  tools: string;
  webHref: string;
  githubHref: string;
}) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-[4px] bg-neutral-100 p-6 md:w-72">
      <div>
        <h3 className="m-0 mb-2 text-sm font-bold text-neutral-900">Tools</h3>
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
        <h3 className="m-0 mb-2 text-sm font-bold text-neutral-900">Links</h3>
        <ProjectLinks webHref={webHref} githubHref={githubHref} />
      </div>
    </div>
  );
}

export default ProjectInfoCard;
