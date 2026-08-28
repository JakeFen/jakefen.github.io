import { socials } from "../data/socials";

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-3 bg-neutral-800 px-8 py-6">
      {socials.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noopener noreferrer"}
          aria-label={label}
          className="flex rounded-[4px] p-2 text-neutral-300 no-underline transition-opacity hover:opacity-75"
        >
          <img src={icon} alt="" className="h-8 w-8 invert" />
        </a>
      ))}
    </footer>
  );
}

export default Footer;
