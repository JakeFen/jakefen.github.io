import emailIcon from "../assets/email-icon.svg";
import githubIcon from "../assets/github-icon.svg";

function ProjectLinks({
  webHref,
  githubHref,
}: {
  webHref: string;
  githubHref: string;
}) {
  return (
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
  );
}

export default ProjectLinks;
